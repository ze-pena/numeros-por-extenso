import { commonList, exceptions } from "../../../data/numbers.js"

export function convertNumberToString(value) {
  if (typeof value !== "string" && typeof value !== "number") return value;

  let numberValue = typeof value === "number" ? String(value) : value;

  if (isNaN(numberValue)) return value;

  if (Object.keys(exceptions).includes(numberValue)) return exceptions[numberValue];

  let ignoreFlag = false;
  let stringValue = "";
  const stringLength = numberValue.length;

  for(let i = stringLength; i > 0; i--) {
    if (ignoreFlag) continue;
    
    if (i <= 3 && i > 1 && Object.keys(exceptions).includes(numberValue.slice(-i))) {
      const exceptionValue = numberValue.slice(-i);

      ignoreFlag = true;
      stringValue += ` e ${exceptions[exceptionValue]}`;
      continue;
    }

    const indexA = i - 1;
    const indexB = Number(numberValue[stringLength - i]) - 1;
    const currentValue = commonList[indexA][indexB];

    if (!currentValue) continue;

    stringValue += i === stringLength ? currentValue : ` e ${currentValue}`;
  }

  return stringValue.trim();
}
