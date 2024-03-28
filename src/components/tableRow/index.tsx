
import { formatToCurrency } from "../../utils/utils";
import { CustomFaTrash, StyledTr } from "./style";

export function TableRow({ deleteProduct, item}: TableRowProps) {
  function findNullableValue(item:any) {
    const objetoModificado: any = {};
      Object.keys(item).forEach(chave => {
        objetoModificado[chave] = item[chave] === null ? "" : item[chave];
  });
  return objetoModificado;
  }
  item = findNullableValue(item)
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
