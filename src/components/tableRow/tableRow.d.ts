interface TableRowProps {
  deleteProduct: (id: string) => void,
  item: ProductProps
  index: number
}