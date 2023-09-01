import { FormProps } from "./@types";
import { FormContainer } from "./style";

export function Form({
  handleSubmit,
  searchTerm,
  setSearchTerm,
  setInputQuantity,
  inputQuantity,
  setFilteredData,
}: FormProps) {
  const getApiSearch = async (searchTerm: string) => {
    const termo = {
      searchTerm: searchTerm,
    };
    if (searchTerm.length >= 3) {
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

        const vigentProducts = data.filter((product: any) => {
          const partDate = product.valid_reg_anvisa.split("/");
          const vigentDate = new Date(
            partDate[2],
            partDate[1] - 1,
            partDate[0]
          );

          return (
            product.valid_reg_anvisa === "VIGENTE" || vigentDate > actualDate
          );
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
        <input
          type="text"
          value={searchTerm}
          placeholder="Busque aqui pelo produto que deseja..."
          onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
          onKeyUp={() => getApiSearch(searchTerm)}
          required
        />
        <input
          type="number"
          name="quantity"
          min={1}
          onChange={(e) => setInputQuantity(parseInt(e.target.value))}
          value={inputQuantity}
        />
        <button>Adicionar</button>
      </form>
    </FormContainer>
  );
}
