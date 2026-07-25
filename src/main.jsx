import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouters from "./AppRoutes.jsx";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./cosntext/AuthContext.jsx";
import { MainProvider } from "./cosntext/MainContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <MainProvider>
        <AppRouters />
        <ToastContainer position="bottom-right" theme="dark" autoClose={3200} />
      </MainProvider>
    </AuthProvider>
  </BrowserRouter>,
);
