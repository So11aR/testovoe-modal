const modalButton = document.getElementById('openModal')
const modalWindow = document.getElementById('modal')
const app = document.getElementById('app')

app.addEventListener('click', function(event) {
  event.preventDefault()
  let clickTarget = event.target
  if (clickTarget.classList.contains('btn')) {
    modalButton.classList.add('none')
    modalWindow.classList.remove('none')
  }

  if (clickTarget.classList.contains('app') && modalButton.classList.contains('none')) {
    modalWindow.classList.add('none')
    modalButton.classList.remove('none')
  }
})