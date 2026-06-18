export function hasDifferentValues(values: ReadonlyArray<string | number>): boolean {
  return new Set(values).size > 1
}
