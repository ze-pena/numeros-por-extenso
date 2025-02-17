export function fractionNumberMask(value) {
  if (!value || (typeof value !== "string" && typeof value !== "number")) return value;

  const formatOptions = { style: "currency", currency: "BRL", maximumFractionDigits: 2, useGrouping: false };
  let formatter = Intl.NumberFormat("pt-BR", formatOptions);
  let newValue = 0;

  newValue = typeof value === "string" ? Number(value.slice(0, 4).replace(/\D/g, "")) : value;

  return String(formatter.format(newValue / 100)).replace("R$", "").trim();
}

export function integerNumberMask(value) {
  if (!value || (typeof value !== "string" && typeof value !== "number")) return value;

  let newValue = typeof value === "number" ? String(value) : value;

  newValue = newValue
    .slice(0, 4)
    .replace(/\D/g, "")
    .replace(/^([0]+)([\d])/gi, "$2");

  return newValue;
}