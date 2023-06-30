import { Container } from "./style";

export function ContainerFilterData({filteredData, searchTerm, addItemToTable}: ContainerFilterDataProps) {
  return (
    <Container>
      <ul>
        {filteredData.map((item: any) => (
          searchTerm &&
          searchTerm != item.PRODUTO &&
          <li key={item['CÓDIGO GGREM']} onClick={() => addItemToTable(item)}>{item.PRODUTO + '-' + item.APRESENTAÇÃO + '-'+ item.LABORATÓRIO }</li>
        ))}
      </ul>
  </Container>
  )
}