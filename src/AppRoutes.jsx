import React from "react";
import { Route, Routes } from "react-router";
import AuthRoute from "./routers/AuthRoute";
import MainRoute from "./routers/MainRoute";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductView from "./pages/ProductView";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthRoute />}>
          <Route path="" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/main" element={<MainRoute />}>
          <Route path="" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="product/:id" element={<ProductView />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
