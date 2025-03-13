import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Layout from "./layout/Layout";
import FaqPage from "./pages/faq/FaqPage";
import ProductsPage from "./pages/products/ProductsPage";
import BulkMessagingPage from "./pages/messaging/BulkMessagingPage";
import MainPage from "./pages/main/MainPage";
import CallbackPage from "./pages/main/CallbackPage";
import { useEffect, useState } from "react";

// define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> }, // Landing page before login
      { path: "auth/callback", element: <CallbackPage /> }, // Handles OAuth response
      {
        path: "dashboard",
        children: [
          { index: true, element: <HomePage /> },
          { path: "faq", element: <FaqPage /> },
          { path: "products", element: <ProductsPage /> },
          { path: "bulk-messaging", element: <BulkMessagingPage /> },
        ],
      },
    ],
  },
]);

// Add Bearer Token Authorization Header
// const [product, setProduct] = useState(null);
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// useEffect(() => {
//   const headers = { Authorization: "Bearer my-token" };
//   fetch(API_BASE_URL, { headers })
//     .then((response) => response.json())
//     .then((data) => setProduct(data));
// }, []);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
