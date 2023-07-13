import { createContext } from "react";


export interface ContactProps {
  name: string,
  contact: string;
  adress: string;
  cnpj: string
}

interface PDFContextProps {
  date: string,
  counter: string,
}

export const PdfContext = createContext({} as PDFContextProps);

export function PdfProvider() {


  const date = new Date().toLocaleDateString("pt-br");
  const counter = new Date().getTime().toString().substring(7);




  return (
    <PdfContext.Provider
      value={{
        date,     
        counter,
      }}
    ></PdfContext.Provider>
  );
}
