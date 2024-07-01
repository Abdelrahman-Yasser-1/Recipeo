import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Banner, Footer, Header } from "./components";
import "./App.css";
import { About, Error404, Home, Recipe } from "./pages";

function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error404 />,
    },
    {
      path: "recipe/:recipeId",
      element: <Recipe />,
      errorElement: <Error404 />,
    },
    {
      path: "about",
      element: <About />,
      errorElement: <Error404 />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-screen-lg container mx-auto px-5 h-screen flex flex-col">
        <Header />
        {/* <Banner /> */}
        <RouterProvider router={router} />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
