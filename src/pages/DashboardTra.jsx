// src/pages/DashboardTra.jsx
import DestinationCard from "../components/DestinationCard";
import WelcomeHeader from "../components/WelcomeHeader";
import StatsBar from "../components/StatsBar";
import { destinations } from "../data/DestinationData";

const DashboardTra = () => {
  return (
    <div className="min-h-screen bg-linear-to-br  via-blue-200 from-purple-200 to-blue-500 p-8">
      <div className="flex flex-col gap-10 max-w-7xl mx-auto">
        <WelcomeHeader />

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Popular Destinations 🏔️
          </h2>
          <p className="text-gray-600">
            Select a place to start planning your adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              index={index}
            />
          ))}
        </div>

        <StatsBar />
      </div>
    </div>
  );
};

export default DashboardTra;
