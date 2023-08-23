
import { formatToCurrency } from "../../utils/utils";
import { StyledTable } from "./style";
import { TableRow } from "../tableRow";

export function CustomTable({ tableList, setTableList }: TableListProps) {


  function deleteProduct(id: number) {
    const filteredTableList = tableList.filter(item => item.id_produto != id)
    setTableList([...filteredTableList])
  }

  const formatedTableList = tableList.map((item: AtivaProductProps) => {
    item = {
      ...item,
      valor: Number(formatToCurrency((item.valor)))
    }
  })

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Item</th>
          <th>Name</th>
          <th>Apresentação</th>
          <th>Fabricante</th>
          <th>Unitário</th>
          <th>Quantidade</th>
          <th>Valor</th>
          <th>Excluir</th>
        </tr>
      </thead>

      <tbody>
        {formatedTableList.length > 0 && tableList.map((item, index: number) => (
          <TableRow key={item.id_produto} 
          deleteProduct={deleteProduct} 
          item={item}
          index={index} 
          />
        ))}
      </tbody>
    </StyledTable>
  )
}