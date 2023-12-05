export interface AtivaProductProps {
  id_produto: number;
  descricao_produto: string;
  fabricante: string;
  embalagem: string;
  valor: number;
  quantity: number;
}

export interface ContactProps {
  orcNumber: number;
  orgao_nome: string;
  telefone: string;
  cnpj: string;
  id: number;
  email: string;
  solicitante_nome: string;
}
