import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import { Banner, Header, RecipesList } from "./components";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <div className="max-w-screen-lg container mx-auto px-5">
          <Banner />
          <div className="my-4">
            <RecipesList />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
