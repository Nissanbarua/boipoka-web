import { StrictMode } from "react";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
