
import { formatToCurrency } from "../../utils/utils";
import { StyledTable } from "./style";
import { TableRow } from "../tableRow";

export function CustomTable({ tableList, setTableList }: TableListProps) {


  function deleteProduct(id: string) {
    const filteredTableList = tableList.filter(item => item["CÓDIGO GGREM"] != id)
    setTableList([...filteredTableList])
  }

  const formatedTableList = tableList.map((item: ProductProps) => {
    item = {
      ...item,
      'PF Sem Impostos': Number(formatToCurrency(Number(item["PF Sem Impostos"].toFixed(2))))
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
          <TableRow key={item['CÓDIGO GGREM']} 
          deleteProduct={deleteProduct} 
          item={item}
          index={index} 
          />
        ))}
      </tbody>
    </StyledTable>
  )
}