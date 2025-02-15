export function fractionNumberMask(value) {
  if (!value || (typeof value !== "string" && typeof value !== "number")) {
    return value;
  }

  let newValue = 0;
  let formatter = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
    useGrouping: false
  })

  if (typeof value === "string") {
    newValue = Number(value.replace(/\D/g, ""))
  }

  return String(formatter.format(newValue / 100)).replace("R$", "").trim();
}

export function integerNumberMask(value) {
  if (!value || (typeof value !== "string" && typeof value !== "number")) {
    return value;
  }

  let newValue = "";

  if (typeof value === "number") {
    newValue = String(value).replace(/\D/g, "");
  }

  if (typeof value === "string") {
    newValue = value.replace(/\D/g, "");
  }

  return newValue;
}