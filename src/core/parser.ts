export function parseSpedLine(line: string, cursorPosition: number) {
  if (!line.startsWith('|')) return null;

  const parts = line.split('|');
  const registro = parts[1];
  if (!registro) return null;

  let currentIndex = 0;
  let fieldIndex = -1;

  for (let i = 1; i < parts.length; i++) {
    const fieldValue = parts[i];

    const start = currentIndex;
    const end = start + fieldValue.length + 1;

    if (cursorPosition >= start && cursorPosition < end) {
      fieldIndex = i - 1; 
      break;
    }

    currentIndex = end;
  }

  if (fieldIndex < 0) return null;

  return {
    registro,
    fieldIndex
  };
}