export function addOrRemove<T>(
  source: T[],
  candidate: T,
  comparator?: (a: T, b: T) => boolean
): T[] {
  const c = comparator || ((a, b) => a == b)
  const e = source.find((i) => c(i, candidate))
  return e ? source.filter((i) => !c(i, candidate)) : [...source, candidate]
}
