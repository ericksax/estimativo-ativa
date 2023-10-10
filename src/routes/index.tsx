import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { PDFRender } from "../pages/pdfRender";
import { FormInfo } from "../pages/FormInfo";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<FormInfo />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pdf_document" element={<PDFRender />} />
    </Routes>
  );
}
