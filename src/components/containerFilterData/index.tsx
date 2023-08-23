import { Container } from "./style";

export function ContainerFilterData({
  filteredData,
  searchTerm,
  addItemToTable,
}: ContainerFilterDataProps) {
  return (
    <>
      {filteredData.length > 0 ? (
        <Container>
          <ul>
            {filteredData.map(
              (item: AtivaProductProps) =>
                searchTerm &&
                searchTerm != item.descricao_produto && (
                  <li
                    key={item.id_produto}
                    onClick={() => addItemToTable(item)}
                  >
                    {item.descricao_produto}
                    <span className="subInfo">
                      {item.embalagem + " - " + item.fabricante}
                    </span>
                  </li>
                )
            )}
          </ul>
        </Container>
      ) : null}
    </>
  );
}
