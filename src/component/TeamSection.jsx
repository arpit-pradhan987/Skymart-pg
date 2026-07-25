import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const teamMembers = [
  { name: "Aryan Shah", role: "Founder & CEO", initial: "A", color: "from-lime-200 to-emerald-400" },
  { name: "Priya Mehta", role: "Head of Product", initial: "P", color: "from-sky-200 to-blue-400" },
  { name: "Rohan Verma", role: "Lead Engineer", initial: "R", color: "from-violet-200 to-purple-400" },
  { name: "Sneha Kapoor", role: "Design Director", initial: "S", color: "from-rose-200 to-pink-400" },
];

const TeamSection = () => {
  const navigate = useNavigate();
  return (
    <section className="pb-6 sm:pb-10"><div className="site-container"><div className="mb-6 text-center"><p className="eyebrow">The people behind it</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white">Small team, high standards.</h2></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{teamMembers.map((member) => <article key={member.name} className="surface rounded-2xl p-5 text-center"><span className={`mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${member.color} text-xl font-extrabold text-[#102618]`}>{member.initial}</span><h3 className="mt-5 font-extrabold text-white">{member.name}</h3><p className="mt-1 text-sm text-slate-400">{member.role}</p></article>)}</div><div className="relative mt-12 overflow-hidden rounded-3xl border border-lime-200/16 bg-gradient-to-br from-[#153d26] to-[#0c2015] px-6 py-10 text-center sm:px-10"><div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(rgba(183,245,109,.32) 1px, transparent 1px)", backgroundSize: "16px 16px" }} /><div className="relative"><p className="eyebrow">Ready when you are</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white">Make your next find a good one.</h2><p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-emerald-50/70">Explore the collection, compare with confidence, and get the things that make every day work a little better.</p><button onClick={() => navigate("/main/shop")} className="primary-button mt-6 gap-2 px-5 py-3 text-sm">Explore the shop <ArrowRight size={17} /></button></div></div></div></section>
  );
};

export default TeamSection;
