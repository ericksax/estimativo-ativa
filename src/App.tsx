import { Router } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./providers/modalContext";
import { QueryClientProvider, QueryClient } from "react-query";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ModalProvider>
          <Router />
        </ModalProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
