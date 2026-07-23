import React from "react";
import LeftSection from "../component/LeftSection";
import LoginForm from "../component/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <div className="grid lg:grid-cols-2">
        <LeftSection />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
