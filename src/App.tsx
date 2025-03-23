import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Layout from "./layout/Layout";
import SettingsPage from "./pages/settings/SettingsPage";
import ProductsPage from "./pages/products/ProductsPage";
import BulkMessagingPage from "./pages/messaging/BulkMessagingPage";
import MainPage from "./pages/main/MainPage";
import CallbackPage from "./pages/main/CallbackPage";
import CommandsPage from "./pages/commands/CommandsPage";
import { faqLoader } from "./pages/settings/components/DisplayLoadedFaq";
import { postsLoader } from "./pages/products/components/AllProducts";

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
          { path: "settings", element: <SettingsPage />, loader: faqLoader },
          { path: "products", element: <ProductsPage />, loader: postsLoader },
          { path: "bulk-messaging", element: <BulkMessagingPage /> },
          { path: "commands", element: <CommandsPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
