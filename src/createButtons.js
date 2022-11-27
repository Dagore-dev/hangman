import { checkGame } from './checkGame.js'

/**
 * @param {string} word
 * @returns {DocumentFragment}
 */
export function createButtons (word) {
  const fragment = document.createDocumentFragment()

  for (let i = 65; i < 91; i++) {
    const char = String.fromCharCode(i)
    const btn = createBtn(char, word)
    fragment.appendChild(btn)
  }

  const btn = createBtn('Ñ', word)
  fragment.appendChild(btn)

  return fragment
}

/**
 * @param {string} char
 * @param {string} word
 */
function createBtn (char, word) {
  const btn = document.createElement('button')
  btn.textContent = char

  btn.addEventListener('click', e => {
    const wordDiv = document.getElementById('word')
    const charArray = wordDiv.textContent.trim().split(' ')

    for (let i = 0; i < word.length; i++) {
      const currentChar = word[i]

      if (currentChar === char) {
        charArray[i] = char
      }
    }

    const updatedContent = charArray.join(' ')
    wordDiv.textContent = updatedContent

    checkGame()
  })

  return btn
}
