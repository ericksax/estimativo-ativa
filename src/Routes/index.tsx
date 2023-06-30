import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { PDFRender } from "../pages/pdfRender";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pdf_document" element={<PDFRender />} />
    </Routes>
  );
}
