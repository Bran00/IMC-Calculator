export const Modal = {
returnResult: document.querySelector(".modal-wrapper"),
titleResult: document.querySelector("#title"),
buttonCloseModal: document.querySelector(".close"),

  open() {
    Modal.returnResult.classList.add("open")
  },
  close() {
    Modal.returnResult.classList.remove("open")
  }
}

Modal.buttonCloseModal.addEventListener("click", Modal.close)

window.addEventListener('keydown', handleKeydown)

function handleKeydown (event) {
  if(event.key === 'Escape') {
    Modal.close()
  }
}