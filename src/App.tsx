import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Uikit from "./pages/Uikit";

const router = createBrowserRouter([
  {
    path: "/uikit",
    element: <Uikit />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
