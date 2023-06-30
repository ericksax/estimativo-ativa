interface FormProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  inputQuantity: number
  setInputQuantity: (quantity: number) => void
  handleSubmit: (e: FormEvent) => void
}