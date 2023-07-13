import { formatToCurrency } from "../../utils/utils";
import { CustomFaTrash, StyledTr } from "./style";

export function TableRow({ deleteProduct, item, index }: TableRowProps) {
  const numItem = index + 1;
  const unitaryPrice = (item["PF Sem Impostos"] / item.quantity).toFixed(2);
  const price = formatToCurrency(item["PF Sem Impostos"]);
  const quantity = item.quantity.toLocaleString("pt-BR");

  return (
    <StyledTr>
      <td>{numItem}</td>
      <td>{item.PRODUTO}</td>
      <td>{item.APRESENTAÇÃO}</td>
      <td>{item.LABORATÓRIO}</td>
      <td>{unitaryPrice}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        <CustomFaTrash
          size={14}
          onClick={() => deleteProduct(item["CÓDIGO GGREM"])}
        />
      </td>
    </StyledTr>
  );
}
