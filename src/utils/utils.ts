export function formatToCurrency(value: number) {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formatQuantity(value: number) {
  return value.toLocaleString("pt-br");
}
