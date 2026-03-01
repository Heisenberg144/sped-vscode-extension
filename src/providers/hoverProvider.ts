import * as vscode from 'vscode';
import { parseSpedLine } from '../core/parser';
import { resolveField } from '../core/fieldResolver';

export function registerHoverProvider(context: vscode.ExtensionContext) {

  const provider = vscode.languages.registerHoverProvider('sped', {

    provideHover(
      document: vscode.TextDocument,
      position: vscode.Position
    ): vscode.ProviderResult<vscode.Hover> {

      const line = document.lineAt(position).text;

      const parsed = parseSpedLine(line, position.character);
      if (!parsed) return;

      const resolved = resolveField(parsed.registro, parsed.fieldIndex);
      if (!resolved) return;

      const markdown = new vscode.MarkdownString();
      markdown.appendMarkdown(`### ${resolved.fieldName}\n`);
      markdown.appendMarkdown(`**Registro:** ${parsed.registro}\n\n`);
      markdown.appendMarkdown(`${resolved.fieldDescription}`);

      if (resolved.registerDescription) {
        markdown.appendMarkdown(`\n\n---\n`);
        markdown.appendMarkdown(`_${resolved.registerDescription}_`);
      }

      return new vscode.Hover(markdown);
    }
  });

  context.subscriptions.push(provider);
}