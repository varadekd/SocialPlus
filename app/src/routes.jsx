/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Error = React.lazy(() => import("./pages/Error"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "/product/:id",
        index: true,
        element: <ProductDetail />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default router;
