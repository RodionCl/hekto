import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Uikit from "./pages/Uikit";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/uikit",
    element: <Uikit />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
