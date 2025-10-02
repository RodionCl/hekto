import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Uikit from "./pages/Uikit";
import { Products } from "@/pages/Products";
import { Header } from "@/layout/Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
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
