export const isUrl = (url: string) =>
  /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(url)