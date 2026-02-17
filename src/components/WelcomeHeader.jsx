// src/components/WelcomeHeader.jsx
import { Sparkles } from "lucide-react";

const YatraLogo = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-300 hover:scale-110"
  >
    <path
      d="M24 6L38 30H10L24 6Z"
      fill="url(#grad)"
      stroke="#1E3A8A"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="36" cy="10" r="3" fill="#FACC15" />
    <defs>
      <linearGradient id="grad" x1="24" y1="6" x2="24" y2="30">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#1E40AF" />
      </linearGradient>
    </defs>
  </svg>
);

const WelcomeHeader = () => {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="animate-fadeIn">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-white rounded-xl shadow-md">
          <YatraLogo />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Yatra Nepal
          </h2>
          <p className="text-xs text-gray-500 tracking-wide">
            YOUR HIMALAYAN JOURNEY
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <h1 className="text-4xl font-bold text-gray-800">
          {greeting}, Traveller
        </h1>
        <Sparkles className="text-yellow-500 animate-pulse" size={26} />
      </div>

      <p className="text-lg text-gray-600">
        Where will your next adventure take you?
      </p>
    </div>
  );
};

export default WelcomeHeader;
