import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Uikit from "./pages/Uikit";
import { Products } from "@/pages/products";
import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";

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
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
