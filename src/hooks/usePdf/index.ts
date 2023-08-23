import { useContext } from "react";
import { PdfContext } from "../../providers/pdfContext";

export function usePdf() {
  const { counter, date } = useContext(PdfContext);

  return {
    counter,
    date,
  };
}
