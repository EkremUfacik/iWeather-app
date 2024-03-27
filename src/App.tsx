import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllRoutes from "./router/Router";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AllRoutes />
    </QueryClientProvider>
  );
}

export default App;
