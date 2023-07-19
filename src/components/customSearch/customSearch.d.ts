// interface ProductProps {
//   PRODUTO: string,
//   LABORATÓRIO: string,
//   APRESENTAÇÃO: string,
//   'PF Sem Impostos': number,
//   'EAN 1': string,
//   'CÓDIGO GGREM': string
//   quantity: number,
// }

interface DataTypeProps {
  data: ProductProps[]
}

interface AtivaProductProps {
  id_produto: number
  descricao_produto: string
  fabricante: string
  embalagem: string
  valor: string
  quantity: number
}