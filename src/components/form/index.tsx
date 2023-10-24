import { Button } from "../../style/buttons";
import { formatToCurrency } from "../../utils/utils";
import { Input } from "../Input";
import { FormProps } from "./@types";
import { FormContainer } from "./style";

export function Form({
  handleSubmit,
  searchTerm,
  setSearchTerm,
  setInputQuantity,
  inputQuantity,
  setFilteredData,
  price,
  children,
}: FormProps) {
  price = price || 0;
  const formattedPrice = formatToCurrency(price / 100);

  const subTotal = (price: number) => {
    if (inputQuantity) {
      const subtotal = formatToCurrency((price * inputQuantity) / 100);
      return subtotal;
    }
  };

  const getApiSearch = async (searchTerm: string) => {
    const termo = {
      searchTerm: searchTerm.replace(" ", "%").trim(),
    };

    if (termo.searchTerm && termo.searchTerm.length >= 3) {
      try {
        const response = await fetch(import.meta.env.VITE_DATABASE_URL, {
          body: JSON.stringify(termo),
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await response.json();

        const actualDate = new Date();

        const vigentProducts: AtivaProductProps[] = data
          .filter((product: AtivaProductProps) => {
            const partDate = product?.data_validade.split("-");
            const vigentDate = new Date(
              Number(partDate[0]),
              Number(partDate[1]) - 1,
              Number(partDate[2])
            );
            return vigentDate > actualDate;
          })
          .map((product: AtivaProductProps) => {
            return {
              ...product,
              valor: product.valor * 0.3,
            };
          });
        setFilteredData(vigentProducts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input
          className="description"
          label="Descrição"
          type="text"
          value={searchTerm}
          placeholder="Busque aqui pelo produto que deseja..."
          onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
          onKeyUp={() => {
            if (searchTerm === "") {
              setFilteredData([]);
            }
            getApiSearch(searchTerm);
          }}
          required
        />

        <Input
          label="Preço"
          type="text"
          className="price"
          readOnly
          value={formattedPrice || 0}
        />

        <Input
          label="Quantidade"
          type="number"
          name="quantity"
          className="price"
          required
          min={1}
          value={inputQuantity}
          onChange={(e) => setInputQuantity(parseInt(e.target.value))}
        />

        <Input
          label="Subtotal"
          min={0}
          type="text"
          className="price"
          readOnly
          value={subTotal(price)}
        />

        <Button variant="primary">Adicionar</Button>
      </form>
      {children}
    </FormContainer>
  );
}
