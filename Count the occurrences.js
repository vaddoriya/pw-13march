function countWordOccurrences(text) {
  const words = text.split(' ');
  const wordCountMap = new Map();

  for (const word of words) {
    const trimmedWord = word.trim();
    if (trimmedWord) {
      wordCountMap.set(trimmedWord, (wordCountMap.get(trimmedWord) || 0) + 1);
    }
  }

  return wordCountMap;
}
