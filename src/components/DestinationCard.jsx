// src/components/DestinationCard.jsx
import { useNavigate } from "react-router-dom";
import { Mountain, Clock, TrendingUp } from "lucide-react";

const DestinationCard = ({ destination, index }) => {
  const navigate = useNavigate();

  const difficultyColors = {
    Easy: "bg-green-100 text-green-700",
    Moderate: "bg-yellow-100 text-yellow-700",
    Challenging: "bg-red-100 text-red-700"
  };

  return (
    <div
      onClick={() => navigate(`/itineraries/${destination.id}`)}
      className="
        group
        cursor-pointer
        rounded-2xl
        overflow-hidden
        bg-white
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-2
      "
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="
            w-full 
            h-[220px] 
            object-cover
            group-hover:scale-110
            transition-transform
            duration-500
          "
        />
        <div className="
          absolute 
          top-0 
          left-0 
          right-0 
          bottom-0 
          bg-gradient-to-t 
          from-black/60 
          via-black/20 
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
        "></div>
        
        <span className={`
          absolute 
          top-3 
          right-3 
          px-3 
          py-1 
          rounded-full 
          text-xs 
          font-semibold
          ${difficultyColors[destination.difficulty]}
        `}>
          {destination.difficulty}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {destination.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {destination.description}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{destination.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Mountain size={16} />
            <span>{destination.elevation}</span>
          </div>
        </div>

        <div className="
          mt-4 
          pt-4 
          border-t 
          border-gray-100
          flex 
          items-center 
          justify-between
        ">
          <span className="text-blue-600 font-semibold text-sm">
            Explore Trek
          </span>
          <TrendingUp 
            size={18} 
            className="text-blue-600 group-hover:translate-x-1 transition-transform" 
          />
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;