import { integerNumberMask } from "../utils/masks/numbers.js";
import { convertNumberToString } from "../utils/converters/numbers.js";

function debouncer(event, callback, delay = 1000) {
  const timeoutId = event.target.dataset.timeoutId;

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  const id = setTimeout(() => {
    callback();
  }, delay);

  event.target.dataset.timeoutId = id;
}

function toggleOutput(content = "", hasError = false) {
  const isVisible = Boolean(content);
  const textOutput = document.getElementById("text-output");

  if (hasError) {
    textOutput.classList.add("error");
  }

  if (!hasError && textOutput.classList.contains("error")) {
    textOutput.classList.remove("error")
  }

  textOutput.innerText = content;
  textOutput.classList.replace(isVisible ? "hidden" : "visible", isVisible ? "visible" : "hidden");
}


function validateEntry(value) {
  if (!value) {
    toggleOutput();
    return;
  }

  if (value.length > 4) {
    toggleOutput("Digite somente valores entra 0 e 9999", true);
    return;
  }

  if (value.includes(',')) {
    const [integers, decimals] = value.split(",");
    const convertedIntegers = convertNumberToString(integers);
    const convertedDecimals = convertNumberToString(decimals);
    toggleOutput(`${convertedIntegers} e ${convertedDecimals} décimos`);
    return;
  }

  toggleOutput(convertNumberToString(value));
}

export function handleInput(event) {
  const numberInput = document.getElementById("number-input");
  const newValue = integerNumberMask(event.target.value);
  const oldValue = numberInput.dataset.fieldValue;

  numberInput.value = newValue;

  if (oldValue && oldValue === newValue) return;

  numberInput.dataset.fieldValue = newValue
  toggleOutput("Digitando...");

  debouncer(event, () => {
    validateEntry(event.target.value)
  }, 500)
}
