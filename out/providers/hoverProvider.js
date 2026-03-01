"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerHoverProvider = registerHoverProvider;
const vscode = require("vscode");
const parser_1 = require("../core/parser");
const fieldResolver_1 = require("../core/fieldResolver");
function registerHoverProvider(context) {
    const provider = vscode.languages.registerHoverProvider('sped', {
        provideHover(document, position) {
            const enabled = vscode.workspace
                .getConfiguration()
                .get('sped.fieldsEnabled');
            if (!enabled)
                return;
            const line = document.lineAt(position).text;
            const parsed = (0, parser_1.parseSpedLine)(line, position.character);
            if (!parsed)
                return;
            const resolved = (0, fieldResolver_1.resolveField)(parsed.registro, parsed.fieldIndex);
            if (!resolved)
                return;
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
//# sourceMappingURL=hoverProvider.js.map