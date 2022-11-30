import { checkGame } from './checkGame.js'

/**
 * @param {string} word
 * @returns {DocumentFragment}
 */
export function createButtons (word) {
  const fragment = document.createDocumentFragment()

  for (let i = 65; i < 79; i++) {
    const char = String.fromCharCode(i)
    const btn = createBtn(char, word)
    fragment.appendChild(btn)
  }

  const btn = createBtn('Ñ', word)
  fragment.appendChild(btn)

  for (let i = 79; i < 91; i++) {
    const char = String.fromCharCode(i)
    const btn = createBtn(char, word)
    fragment.appendChild(btn)
  }

  const div = document.createElement('div')
  div.id = 'keyboard'
  div.appendChild(fragment)
  return div
}

/**
 * @param {string} char
 * @param {string} word
 */
function createBtn (char, word) {
  const btn = document.createElement('button')
  btn.textContent = char

  btn.addEventListener('click', e => {
    let hit = false
    const wordDiv = document.getElementById('word')
    const charArray = wordDiv.textContent.trim().split(' ')

    for (let i = 0; i < word.length; i++) {
      const currentChar = word[i]

      if (currentChar === char) {
        charArray[i] = char
        hit = true
      }
    }

    const updatedContent = charArray.join(' ')
    wordDiv.textContent = updatedContent

    btn.disabled = true
    btn.style.color = 'white'

    if (hit) {
      btn.style.backgroundColor = 'green'
    } else {
      btn.style.backgroundColor = 'red'
    }

    const hasWon = charArray.every(char => char !== '_')
    checkGame(hasWon, hit, word)
  })

  return btn
}
