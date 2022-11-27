export async function getRandomSpanishWord () {
  const worldsURL = './resources/miDiccionario.json'
  const request = window.fetch(worldsURL)
  const response = await request
  const result = { ok: response.ok, word: {} }

  if (response.ok) {
    const spanishWords = await response.json()
    const length = spanishWords.palabras.length
    const randomIndex = Math.floor(Math.random() * length)
    const randomSpanishWord = spanishWords.palabras[randomIndex]

    result.word = randomSpanishWord
  }

  return result
}
