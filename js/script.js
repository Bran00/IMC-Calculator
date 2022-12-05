import { Modal } from '/js/modal.js'
import { AlertError} from "/js/alert-error.js"
import { inputCheck, calculateIMC, displayResultMessage } from "/js/utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.oninput = () => {
  AlertError.close()
}

form.onsubmit = (event) => {
  
event.preventDefault()

const weight = Number(inputWeight.value)
const height = Number(inputHeight.value)
const weightorHeightIsANumber = inputCheck(weight) || inputCheck(height)

if(weightorHeightIsANumber) {
  AlertError.open()
  return;
}

AlertError.close()

const result = calculateIMC(weight, height)
displayResultMessage(result)
}
