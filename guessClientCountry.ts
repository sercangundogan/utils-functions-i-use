export function guessClientCountry(): string {
  return navigator.language.split('-')[1] || 'US'
}