import { drawMan } from './canvas/drawMan.js'
import { createModal } from './utils/createModal.js'

/**
 * @param {boolean} hasWon
 * @param {boolean} hit
 * @param {string} word
 */
export function checkGame (hasWon, hit, word) {
  const canvas = document.getElementById('canvas')
  const root = document.getElementById('root')

  if (hasWon) {
    disableButtons()

    const dialog = createModal('Has ganado')
    root.appendChild(dialog)
    dialog.open = true
  } else {
    if (!hit) {
      const count = ++canvas.dataset.count
      drawMan(canvas, count)

      if (count > 5) {
        disableButtons()

        const dialog = createModal(`¡Has perdido! La palabra era ${word}`)
        root.appendChild(dialog)
        dialog.open = true

        const wordDiv = document.getElementById('word')
        wordDiv.textContent = word.split('').join(' ')
      }
    }
  }
}

function disableButtons () {
  const buttons = document.querySelectorAll('#keyboard button')
  buttons.forEach(btn => { btn.disabled = true })
}
