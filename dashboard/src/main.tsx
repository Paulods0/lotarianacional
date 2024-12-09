import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "./index.css"
import "react-toastify/dist/ReactToastify.css"

import { router } from "./utils/router"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer autoClose={2000} position="bottom-right" />
  </StrictMode>
)
