"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateManager = void 0;
const vscode = require("vscode");
const CONFIG_SECTION = 'sped';
const CONFIG_KEY = 'fieldsEnabled';
class StateManager {
    /**
     * Carrega o estado salvo nas configurações globais.
     * Se não existir, assume true por padrão.
     */
    static loadState() {
        const config = vscode.workspace.getConfiguration(CONFIG_SECTION);
        const saved = config.get(CONFIG_KEY);
        this._enabled = saved !== undefined ? saved : true;
    }
    static isEnabled() {
        return this._enabled;
    }
    /**
     * Alterna o estado e persiste no VS Code.
     */
    static async toggle() {
        this._enabled = !this._enabled;
        const config = vscode.workspace.getConfiguration(CONFIG_SECTION);
        await config.update(CONFIG_KEY, this._enabled, vscode.ConfigurationTarget.Global);
    }
}
exports.StateManager = StateManager;
StateManager._enabled = true;
//# sourceMappingURL=stateManager.js.map