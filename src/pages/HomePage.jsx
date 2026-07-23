import React from "react";
import HeroSection from "../component/HeroSection";
import BoxCard from "../component/BoxCard";
import CategorySection from "../component/CategorySection";
import Features from "../component/Features";

const HomePage = () => {
  return (
    <div className="flex flex-col ">
      <HeroSection />
      <BoxCard />
      <CategorySection />
      <Features />
    </div>
  );
};

export default HomePage;
