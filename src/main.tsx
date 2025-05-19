import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "@contexts/AuthContext" 
import AppRoutes from "@routes/AppRoutes"
import "@styles/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes/>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)