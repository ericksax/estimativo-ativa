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

export function ordenarPorTermo(
  items: AtivaProductProps[],
  termoBusca: string
): AtivaProductProps[] {
  // Função auxiliar para verificar se o item começa com o termo de busca
  const iniciaComTermo = (item: string): boolean => {
    return item.toLowerCase().startsWith(termoBusca.toLowerCase());
  };

  // Separar os itens em dois grupos: os que começam e os que não começam com o termo de busca
  const itensIniciamComTermo = items.filter((item: AtivaProductProps) =>
    iniciaComTermo(item.descricao_produto)
  );

  const itensNaoIniciamComTermo = items.filter(
    (item) => !iniciaComTermo(item.descricao_produto)
  );

  // Ordenar cada grupo separadamente
  itensIniciamComTermo.sort();
  itensNaoIniciamComTermo.sort();

  // Concatenar os dois grupos, mantendo os que iniciam com o termo de busca primeiro
  return [...itensIniciamComTermo, ...itensNaoIniciamComTermo];
}
