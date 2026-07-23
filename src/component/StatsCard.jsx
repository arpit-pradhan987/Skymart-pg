const StatsCard = ({ number, title }) => {
  return (
    <div className="border border-zinc-700 rounded-2xl p-6 flex-1 text-center hover:border-lime-400 transition">
      <h2 className="text-3xl font-bold text-lime-400">{number}</h2>

      <p className="text-zinc-400 mt-2">{title}</p>
    </div>
  );
};

export default StatsCard;
