import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Uikit from "./pages/Uikit";
import { Products } from "@/pages/products";
import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";
import ProductDetails from "@/pages/pdp/ProductDetails";
import { CartProvider } from "@/contexts/CartContext";
import { Cart } from "@/pages/Cart";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/uikit",
        element: <Uikit />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  );
}

export default App;
