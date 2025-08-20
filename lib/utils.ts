// lib/utils.ts
export function truncateWords(text: string, wordLimit: number): string {
  const words = text.split(' ');
  if (words.length <= wordLimit) {
    return text;
  }
  return words.slice(0, wordLimit).join(' ') + '...';
}