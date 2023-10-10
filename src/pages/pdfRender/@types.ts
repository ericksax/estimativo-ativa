export interface AtivaProductProps {
  id_produto: number;
  descricao_produto: string;
  fabricante: string;
  embalagem: string;
  valor: number;
  quantity: number;
}

export interface ContactProps {
  name: string;
  contact: string;
  cnpj: string;
  id: number;
  email: string;
  requester: string;
}
