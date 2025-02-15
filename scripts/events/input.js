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
    return
  }

  const id = setTimeout(() => {
    callback();
    event.target.dataset.fieldValue = eventValue;
  }, delay);

  event.target.dataset.timeoutId = id;
}


export function handleInput(event) {
  event.target.value = integerNumberMask(event.target.value)
  debouncer(event, () => {
    console.log("Eu funcionei!");
  }, 500)
}