import { Modal } from '/js/modal.js'

export function inputCheck(value) {
  return isNaN(value) || value == ""
}

export function calculateIMC(weight, height) { 
  return (weight/((height/100)**2)).toFixed(2)
}

export function displayResultMessage(result) {
Modal.open()
Modal.titleResult.innerHTML = `Seu IMC é de ${result} Kg/m².`
}