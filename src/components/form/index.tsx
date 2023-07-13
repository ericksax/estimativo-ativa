import { FormContainer } from "./style";

export function Form({handleSubmit, searchTerm, setSearchTerm, setInputQuantity, inputQuantity }: FormProps) {
  
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          placeholder='Busque aqui pelo produto que deseja...'
          onChange={(e) => setSearchTerm(e.target.value)}
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
  )
}