import * as vscode from 'vscode';

const CONFIG_SECTION = 'sped';
const CONFIG_KEY = 'fieldsEnabled';

export class StateManager {

  private static _enabled: boolean = true;

  /**
   * Carrega o estado salvo nas configurações globais.
   * Se não existir, assume true por padrão.
   */
  public static loadState() {
    const config = vscode.workspace.getConfiguration(CONFIG_SECTION);
    const saved = config.get<boolean>(CONFIG_KEY);

    this._enabled = saved !== undefined ? saved : true;
  }

  public static isEnabled(): boolean {
    return this._enabled;
  }

  /**
   * Alterna o estado e persiste no VS Code.
   */
  public static async toggle() {
    this._enabled = !this._enabled;

    const config = vscode.workspace.getConfiguration(CONFIG_SECTION);
    await config.update(
      CONFIG_KEY,
      this._enabled,
      vscode.ConfigurationTarget.Global
    );
  }

}