import { FormEvent, SetStateAction } from "react";

export interface FormProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  inputQuantity: number;
  setInputQuantity: (quantity: number) => void;
  handleSubmit: (e: FormEvent) => void;
  setFilteredData: React.Dispatch<SetStateAction<AtivaProductProps[]>>;
}
