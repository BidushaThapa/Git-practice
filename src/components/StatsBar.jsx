// src/components/StatsBar.jsx
import { Map, Compass, ShieldCheck } from "lucide-react";

const StatsBar = () => {
  const stats = [
    {
      icon: Map,
      title: "Top Destinations",
      desc: "Handpicked Himalayan routes",
      color: "text-blue-600"
    },
    {
      icon: Compass,
      title: "Curated Itineraries",
      desc: "Treks & tours for all levels",
      color: "text-green-600"
    },
    {
      icon: ShieldCheck,
      title: "Verified Guides",
      desc: "Trusted local experts",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="flex justify-center mt-10">
      {/* Width constraint */}
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="
                bg-white
                p-5
                rounded-xl
                shadow-md
                hover:shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <stat.icon className={`${stat.color} mb-3`} size={26} />
              <h3 className="font-semibold text-gray-800">{stat.title}</h3>
              <p className="text-sm text-gray-600">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
