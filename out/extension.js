"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
const hoverProvider_1 = require("./providers/hoverProvider");
let statusBarItem;
function activate(context) {
    console.log('SPED Fiscal Tools ativada');
    // Registrar Hover
    (0, hoverProvider_1.registerHoverProvider)(context);
    // Criar botão da status bar
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.command = 'sped.toggleFields';
    context.subscriptions.push(statusBarItem);
    updateStatusBar();
    statusBarItem.show();
    // Registrar comando
    const toggleCommand = vscode.commands.registerCommand('sped.toggleFields', async () => {
        const config = vscode.workspace.getConfiguration();
        const current = config.get('sped.fieldsEnabled');
        await config.update('sped.fieldsEnabled', !current, vscode.ConfigurationTarget.Global);
        updateStatusBar();
    });
    context.subscriptions.push(toggleCommand);
}
function updateStatusBar() {
    const enabled = vscode.workspace
        .getConfiguration()
        .get('sped.fieldsEnabled');
    if (enabled) {
        statusBarItem.text = '$(check) SPED Fields: ON';
        statusBarItem.tooltip = 'Click to disable SPED field documentation';
    }
    else {
        statusBarItem.text = '$(circle-slash) SPED Fields: OFF';
        statusBarItem.tooltip = 'Click to enable SPED field documentation';
    }
}
function deactivate() { }
//# sourceMappingURL=extension.js.map