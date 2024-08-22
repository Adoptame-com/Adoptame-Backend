export function replacePlaceholders(message: string, values: string[]): string {
  return message.replace(/<<(\d+)>>/g, (match, index) => {
    return values[parseInt(index, 10)] || match;
  });
}
