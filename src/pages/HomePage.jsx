import React from "react";
import HeroSection from "../component/HeroSection";
import BoxCard from "../component/BoxCard";
import CategorySection from "../component/CategorySection";
import FeaturedSection from "../component/FeaturedSection";
import Features from "../component/Features";

const HomePage = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <HeroSection />
      <BoxCard />
      <CategorySection />
      <FeaturedSection />
      <Features />
    </div>
  );
};

export default HomePage;
