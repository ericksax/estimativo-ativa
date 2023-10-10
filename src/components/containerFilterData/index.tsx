import { formatToCurrency } from "../../utils/utils";
import { Container } from "./style";

export function ContainerFilterData({
  filteredData,
  searchTerm,
  addItemToTable,
}: ContainerFilterDataProps) {
  return (
    <>
      {searchTerm && filteredData.length > 0 ? (
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
                      {item.embalagem +
                        " - " +
                        item.emb_com +
                        item.und +
                        " - " +
                        item.fabricante}
                    </span>
                    <span className="price">
                      {formatToCurrency(item.valor / 100)}
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
