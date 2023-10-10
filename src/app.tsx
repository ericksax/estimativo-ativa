import { Router } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./providers/modalContext";
import { QueryClientProvider, QueryClient } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./style/global";
import { GlobalReset } from "./style/reset";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <GlobalReset />
      <ToastContainer />
      <BrowserRouter>
        <ModalProvider>
          <Router />
        </ModalProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
