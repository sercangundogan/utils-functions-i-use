export function removeUrlParams(keys: string[]) {
  const url = new URL(window.location.href)
  keys.forEach((key) => url.searchParams.delete(key))
  window.history.replaceState({}, '', url.toString())
}