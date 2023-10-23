function extractElements(arr) {
  const [first, second, ...rest] = arr;
  return [first, second, rest[rest.length - 1]];
}
