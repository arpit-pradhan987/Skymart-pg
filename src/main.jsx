import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouters from "./AppRoutes.jsx";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./cosntext/AuthContext.jsx";
import { MainProvider } from "./cosntext/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <MainProvider>
        <AppRouters />
      </MainProvider>
    </AuthProvider>
  </BrowserRouter>,
);
