import { getRandomSpanishWord } from './services/getRandomSpanishWord.js'
import { createButtons } from './createButtons.js'

window.addEventListener('DOMContentLoaded', main)

async function main () {
  const root = document.getElementById('root')
  root.textContent = 'Cargando...'
  const randomSpanishWord = await getRandomSpanishWord()

  if (randomSpanishWord.ok) {
    root.textContent = ''
    const word = randomSpanishWord.word.palabra_sin_tilde.toUpperCase()

    const content = getUnderscores(word.length)
    const wordDiv = document.createElement('div')
    wordDiv.id = 'word'
    wordDiv.textContent = content

    const buttons = createButtons(word)

    root.appendChild(wordDiv)
    root.appendChild(buttons)
  } else {
    console.error('Something went wrong')
    root.textContent = 'Ha fallado la carga de un recurso crítico.'
  }
}

function getUnderscores (length) {
  let result = ''

  for (let i = 0; i < length; i++) {
    result += '_ '
  }

  return result
}
