export function formatToCurrency(value: number) {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formatQuantity(value: number) {
  return value.toLocaleString("pt-br");
}

export const insertCNPJMask = (cnpj: string) => {
  const cnpjFormatted = cnpj.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    "$1.$2.$3/$4-$5"
  );
  return cnpjFormatted;
};
