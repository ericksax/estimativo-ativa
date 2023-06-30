import { CustomFaTrash, StyledTr } from './style'

export function TableRow({ deleteProduct, item, index }: TableRowProps) {
  const numItem = index + 1
  const unitaryPrice = item['PF Sem Impostos'] / item.quantity
  return (
    <StyledTr>
      <td>{numItem}</td>
      <td>{item.PRODUTO}</td>
      <td>{item.APRESENTAÇÃO}</td>
      <td>{item.LABORATÓRIO}</td>
      <td>{unitaryPrice}</td>
      <td>{item.quantity}</td>
      <td>{item["PF Sem Impostos"].toFixed(2)}</td>
      <td><CustomFaTrash onClick={() => deleteProduct(item['CÓDIGO GGREM'])} /></td>
    </StyledTr>
  )
}