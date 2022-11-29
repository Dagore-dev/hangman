import { main } from './index.js'

export default function createNewGameBtn () {
  const btn = document.createElement('button')

  btn.textContent = 'Nueva partida'
  btn.addEventListener('click', handleClick)

  return btn
}

function handleClick () {
  const root = document.getElementById('root')

  while (root.firstChild) {
    root.removeChild(root.firstChild)
  }

  main()
}
