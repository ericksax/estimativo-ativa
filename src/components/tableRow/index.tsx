import { formatToCurrency } from "../../utils/utils";
import { CustomFaTrash, StyledTr } from "./style";

export function TableRow({ deleteProduct, item }: TableRowProps) {
  const unitaryPrice = (Number(item.valor) / item.quantity).toFixed(2);
  const price = formatToCurrency(Number(item.valor));
  const quantity = item.quantity.toLocaleString("pt-BR");

  return (
    <StyledTr>
      <td>{item.id_produto}</td>
      <td>{item.descricao_produto}</td>
      <td>{item.embalagem}</td>
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
