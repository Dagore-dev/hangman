import { drawMan } from './canvas/drawMan.js'

/**
 * @param {boolean} hasWon
 * @param {boolean} hit
 * @param {string} word
 */
export function checkGame (hasWon, hit, word) {
  const canvas = document.getElementById('canvas')

  if (hasWon) {
    window.alert('!Has ganado!')
    disableButtons()
  } else {
    if (!hit) {
      const count = ++canvas.dataset.count
      drawMan(canvas, count)

      if (count > 5) {
        window.alert(`!Has perdido! La palabra era ${word}`)

        const wordDiv = document.getElementById('word')
        wordDiv.textContent = word.split('').join(' ')

        disableButtons()
      }
    }
  }
}

function disableButtons () {
  const buttons = document.querySelectorAll('#keyboard button')
  buttons.forEach(btn => { btn.disabled = true })
}
