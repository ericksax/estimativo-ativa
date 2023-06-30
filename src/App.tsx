import { Router } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./providers/modalContext";

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Router />
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
