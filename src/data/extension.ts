// extension.ts  —  adicione as linhas marcadas com [+]

import * as vscode from 'vscode';
import { registerHoverProvider } from './providers/hoverProvider';
import { registerNfeHoverProvider } from './providers/nfeHoverProvider'; // [+]
import { StateManager } from './core/stateManager';

export function activate(context: vscode.ExtensionContext) {

  StateManager.loadState();

  // Provider SPED (.txt)
  registerHoverProvider(context);

  // Provider NF-e / NFC-e / CT-e / NFS-e (.xml)  [+]
  registerNfeHoverProvider(context);               // [+]

  // Comando toggle (compartilhado entre SPED e NF-e)
  const toggle = vscode.commands.registerCommand('sped.toggleFields', async () => {
    await StateManager.toggle();
    const state = StateManager.isEnabled() ? 'ativada' : 'desativada';
    vscode.window.showInformationMessage(`Documentação de campos: ${state}`);
  });

  context.subscriptions.push(toggle);
}

export function deactivate() {}
