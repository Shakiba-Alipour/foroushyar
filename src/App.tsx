import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Layout from "./layout/Layout";
import FaqPage from "./pages/faq/FaqPage";
import ProductsPage from "./pages/products/ProductsPage";
import BulkMessagingPage from "./pages/messaging/BulkMessagingPage";

// define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/faq", element: <FaqPage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/bulk-messaging", element: <BulkMessagingPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
