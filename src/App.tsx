import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Layout from "./layout/Layout";

// define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
