import { Container } from "./style";

export function ContainerFilterData({filteredData, searchTerm, addItemToTable}: ContainerFilterDataProps) {
  return (
    <Container>
      <ul>
        {filteredData.map((item: AtivaProductProps) => (
          searchTerm &&
          searchTerm != item.descricao_produto &&
          <li key={item.id_produto} onClick={() => addItemToTable(item)}>{item.descricao_produto + '-' + item.embalagem + '-'+ item.fabricante }</li>
        ))}
      </ul>
  </Container>
  )
}