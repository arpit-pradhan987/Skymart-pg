import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const teamMembers = [
  {
    name: "Aryan Shah",
    role: "Founder & CEO",
    initial: "A",
    color: "bg-lime-400 text-black",
  },
  {
    name: "Priya Mehta",
    role: "Head of Product",
    initial: "P",
    color: "bg-blue-500 text-white",
  },
  {
    name: "Rohan Verma",
    role: "Lead Engineer",
    initial: "R",
    color: "bg-purple-500 text-white",
  },
  {
    name: "Sneha Kapoor",
    role: "Design Director",
    initial: "S",
    color: "bg-rose-500 text-white",
  },
];

const TeamSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#111111] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-16">Meet the Team</h2>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="border border-zinc-600 rounded-3xl p-10 flex flex-col items-center hover:border-lime-400 transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-bold ${member.color}`}
              >
                {member.initial}
              </div>

              <h3 className="text-2xl font-semibold mt-6">{member.name}</h3>

              <p className="text-gray-500 mt-2">{member.role}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 border border-lime-400/30 rounded-[40px] py-20 px-8 text-center">
          <h2 className="text-5xl font-bold">Ready to shop?</h2>

          <p className="text-gray-500 text-xl mt-6">
            Explore thousands of products at unbeatable prices.
          </p>

          <button
            onClick={() => navigate("/main/shop")}
            className="mt-12 inline-flex items-center gap-3 bg-lime-400 text-black px-10 py-5 rounded-2xl text-2xl font-semibold hover:bg-lime-300 transition-all"
          >
            Browse Products
            <ArrowRight size={26} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
