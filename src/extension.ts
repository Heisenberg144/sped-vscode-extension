import * as vscode from 'vscode';
import { registerHoverProvider } from './providers/hoverProvider';

export function activate(context: vscode.ExtensionContext) {

  console.log('SPED Fiscal Tools ativada ');

  registerHoverProvider(context);

}
export function deactivate() {}