import { getRandomSpanishWord } from './services/getRandomSpanishWord.js'
import { createButtons } from './createButtons.js'
import { canvasCreator } from './canvas/canvasCreator.js'
import createNewGameBtn from './createNewGameBtn.js'

window.addEventListener('DOMContentLoaded', main)

export async function main () {
  const root = document.getElementById('root')
  root.textContent = 'Cargando...'
  const randomSpanishWord = await getRandomSpanishWord()

  if (randomSpanishWord.ok) {
    root.textContent = ''

    const word = randomSpanishWord.word.palabra_sin_tilde.toUpperCase()

    // Setting canvas
    const canvas = document.createElement('canvas')
    canvas.id = 'canvas'
    canvas.dataset.count = 0
    root.appendChild(canvas)
    const { initialDrawing } = canvasCreator(canvas)
    initialDrawing()

    // Setting hint
    const content = getUnderscores(word.length)
    const wordDiv = document.createElement('div')
    wordDiv.id = 'word'
    wordDiv.textContent = content

    const buttons = createButtons(word)
    const newGameBtn = createNewGameBtn()

    root.appendChild(wordDiv)
    root.appendChild(buttons)
    root.appendChild(newGameBtn)
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
