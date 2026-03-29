export function registerNfeHoverProvider(context: vscode.ExtensionContext) {

  const provider = vscode.languages.registerHoverProvider('xml', {

    provideHover(document, position) {

      try {

        const enabled = vscode.workspace
          .getConfiguration()
          .get<boolean>('sped.fieldsEnabled');

        if (!enabled) return;

        //  DETECÇÃO INTELIGENTE (uma vez por arquivo)
        const textStart = document.getText(
          new vscode.Range(0, 0, Math.min(document.lineCount, 50), 0)
        );

        const isNfe =
          textStart.includes('<NFe') ||
          textStart.includes('<nfeProc') ||
          textStart.includes('<infNFe');

        if (!isNfe) return; // 👉 ignora XML normal

        const line = document.lineAt(position).text;

        if (!line.includes('<')) return;

        const parsed = parseNfeLine(line, position.character);
        if (!parsed) return;

        const resolved = resolveNfeTag(parsed.tagName, parsed.tagValue);
        if (!resolved) return;

        const markdown = new vscode.MarkdownString();
        markdown.appendMarkdown(formatNfeHover(resolved));

        return new vscode.Hover(markdown);

      } catch (err) {
        console.error('Erro NFE hover:', err);
      }
    }
  });

  context.subscriptions.push(provider);
}