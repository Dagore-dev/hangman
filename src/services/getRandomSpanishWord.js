export async function getRandomSpanishWord () {
  const worldsURL = 'https://dict-ljvl.onrender.com/api/v1/spanishWords/random?minLength=3&maxLength=7'
  const request = window.fetch(worldsURL)
  const response = await request
  const result = { ok: response.ok, word: {} }

  if (response.ok) {
    const { randomWord } = await response.json()
    result.word = randomWord
  }

  return result
}
