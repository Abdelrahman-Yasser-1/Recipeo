import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <p>Recipeo App</p>
      </div>
    </QueryClientProvider>
  );
}

export default App;
