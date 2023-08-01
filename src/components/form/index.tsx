import { FormProps } from "./@types";
import { FormContainer } from "./style";

export function Form({
  handleSubmit,
  searchTerm,
  setSearchTerm,
  setInputQuantity,
  inputQuantity,
  setFilteredData
}: FormProps) {
  const getApiSearch = async (searchTerm: string) => {
      if(searchTerm.length >= 3) {
        const response = await fetch(`http://localhost:3000/search?term=${searchTerm}`)
        const data = await response.json()
        setFilteredData(data)
      }
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          placeholder="Busque aqui pelo produto que deseja..."
          onChange={(e) => setSearchTerm(e.target.value)}
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
        {/* <button type="button" onClick={() => getApiSearch(searchTerm)}>
          pesquizar
        </button> */}
      </form>
    </FormContainer>
  );
}
