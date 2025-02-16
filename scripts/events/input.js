import { integerNumberMask } from "../utils/masks.js";

function debouncer(event, callback, delay = 1000) {
  const timeoutId = event.target.dataset.timeoutId;
  const eventValue = event.target.value;
  const fieldValue = event.target.dataset.fieldValue;

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  if (fieldValue && fieldValue === eventValue) {
    event.target.dataset.timeoutId = "";
    return;
  }

  const id = setTimeout(() => {
    callback();
    event.target.dataset.fieldValue = eventValue;
  }, delay);

  event.target.dataset.timeoutId = id;
}

function toggleOutput(content = "") {
  const isVisible = Boolean(content);
  const textOutput = document.getElementById("text-output");
  const parentOutput = textOutput.parentElement;

  textOutput.innerText = content;
  parentOutput.classList.replace(isVisible ? "hidden" : "visible", isVisible ? "visible" : "hidden");
}

export function handleInput(event) {
  const numberInput = document.getElementById("number-input");

  numberInput.value = integerNumberMask(event.target.value);
  toggleOutput("Digitando...");

  debouncer(event, () => {
    toggleOutput(numberInput.value ? "Eu funcionei!" : "");
  }, 500)
}