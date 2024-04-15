import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import StoriesPage from "./components/StoriesPage/StoriesPage";
import FeaturesPage from "./components/FeaturesPage/FeaturesPage";
import PricingPage from "./components/PricingPage/PricingPage";
import FormPage from "./components/FormPage/FormPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/stories",
    element: <StoriesPage />,
  },
  {
    path: "/features",
    element: <FeaturesPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/form",
    element: <FormPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
