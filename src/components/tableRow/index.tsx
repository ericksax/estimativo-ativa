import { formatToCurrency } from "../../utils/utils";
import { CustomFaTrash, StyledTr } from "./style";

export function TableRow({ deleteProduct, item }: TableRowProps) {
  const unitaryPrice = formatToCurrency(Number(item.valor) / item.quantity);
  const price = formatToCurrency(Number(item.valor));
  const quantity = item.quantity.toLocaleString("pt-BR");
  const packaging =
    item.embalagem?.trim() !== "" || item.emb_com || item.und
      ? item.embalagem + " " + item.emb_com + item.und
      : "--";

  return (
    <StyledTr>
      <td>{item.id_produto}</td>
      <td>{item.descricao_produto}</td>
      <td>{packaging}</td>
      <td>{item.fabricante}</td>
      <td>{unitaryPrice}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        <CustomFaTrash
          size={14}
          onClick={() => deleteProduct(item.id_produto)}
        />
      </td>
    </StyledTr>
  );
}
