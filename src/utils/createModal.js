/**
 * @param {string} msg
 * @returns {HTMLDialogElement}
 */
export function createModal (msg) {
  const root = document.getElementById('root')
  const dialog = document.createElement('dialog')
  const acceptBtn = document.createElement('button')

  acceptBtn.textContent = 'Cerrar'
  acceptBtn.addEventListener('click', e => {
    dialog.open = false
    root.removeChild(dialog)
  })

  dialog.textContent = msg
  dialog.className = 'modal'
  dialog.appendChild(acceptBtn)

  return dialog
}

// CSS for modal
/*
.modal {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  margin: 0 auto;
  text-align: center;
  z-index: 10;
}
*/
