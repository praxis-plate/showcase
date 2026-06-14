const entityMap: Record<string, string> = {
  '&bull;': '•',
  '&mdash;': '—',
  '&laquo;': '«',
  '&raquo;': '»'
}

export const renderEntities = (value: string) => Object.entries(entityMap).reduce(
  (result, [entity, symbol]) => result.replaceAll(entity, symbol),
  value
)
