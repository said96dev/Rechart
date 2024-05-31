import { createBrowserRouter } from "react-router-dom"
import { Dashboard, Predictions, DashboardLayout } from "./pages"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <DashboardLayout />

    </>,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "predictions",
        element: <Predictions />
      }
    ]
  },

])