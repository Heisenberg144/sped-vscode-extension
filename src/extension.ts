import * as vscode from 'vscode';
import { registerHoverProvider } from './providers/hoverProvider';

let statusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {

  console.log('SPED Fiscal Tools ativada');

  // Registrar Hover
  registerHoverProvider(context);

  // Criar botão da status bar
  statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );

  statusBarItem.command = 'sped.toggleFields';
  context.subscriptions.push(statusBarItem);

  updateStatusBar();
  statusBarItem.show();

  // Registrar comando
  const toggleCommand = vscode.commands.registerCommand(
    'sped.toggleFields',
    async () => {

      const config = vscode.workspace.getConfiguration();
      const current = config.get<boolean>('sped.fieldsEnabled');

      await config.update(
        'sped.fieldsEnabled',
        !current,
        vscode.ConfigurationTarget.Global
      );

      updateStatusBar();
    }
  );

  context.subscriptions.push(toggleCommand);
}

function updateStatusBar() {
  const enabled = vscode.workspace
    .getConfiguration()
    .get<boolean>('sped.fieldsEnabled');

  if (enabled) {
    statusBarItem.text = '$(check) SPED Fields: ON';
    statusBarItem.tooltip = 'Click to disable SPED field documentation';
  } else {
    statusBarItem.text = '$(circle-slash) SPED Fields: OFF';
    statusBarItem.tooltip = 'Click to enable SPED field documentation';
  }
}

export function deactivate() {}