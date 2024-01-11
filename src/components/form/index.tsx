import { api } from "../../servers/api";
import { Button } from "../../style/buttons";
import { formatToCurrency, ordenarPorTermo } from "../../utils/utils";
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
    // while (searchTerm.indexOf(" ") >= 0) {
    //   searchTerm = searchTerm.replace(" ", "%");
    // }

    const termo = {
      searchTerm,
    };

    if (termo.searchTerm && termo.searchTerm.length >= 3) {
      try {
        const { data } = await api.post(
          import.meta.env.VITE_DATABASE_URL,
          JSON.stringify(termo),
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );
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
              valor: product.valor * 1,
            };
          });

        // .sort((a: AtivaProductProps, b: AtivaProductProps) => {
        //   if (
        //     a.descricao_produto.startsWith(searchTerm) &&
        //     !b.descricao_produto.startsWith(searchTerm)
        //   ) {
        //     return -1;
        //   }

        //   if (
        //     !a.descricao_produto.startsWith &&
        //     b.descricao_produto.startsWith(searchTerm)
        //   ) {
        //     return 1;
        //   }
        //   return 0;
        // });

        const filteredProducts = ordenarPorTermo(vigentProducts, searchTerm);
        setFilteredData(filteredProducts);
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
          autoFocus={true}
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

        <Button variant="primary" type="submit">
          Adicionar
        </Button>
      </form>
      {children}
    </FormContainer>
  );
}
