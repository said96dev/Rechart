import { ThemeProvider, createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./themes"
import { Box, CssBaseline } from "@mui/material"
import { router } from "@/Router"
import { RouterProvider } from "react-router-dom"

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
        <RouterProvider router={router}>
        </RouterProvider>
      </Box>
    </ThemeProvider>
  )
}

export default App
