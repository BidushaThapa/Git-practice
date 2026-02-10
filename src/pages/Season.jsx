import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Season() {
  const [ward, setWard] = useState("");
  const [season, setSeason] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!ward || !season) return;
    localStorage.setItem("ward", ward);
    localStorage.setItem("season", season);
     navigate("/crop-selection");
  };

  const seasonData = {
    Summer: { emoji: "☀️" },
    Monsoon: { emoji: "🌧️" },
    Winter: { emoji: "❄️" }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full">

        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <span className="text-6xl mb-3 inline-block">🌾</span>
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-600 mb-2 ">
            AgriTogether
          </h1>
          <p className="text-lg text-gray-600 italic font-light tracking-wide">
            Plan crops together. Grow smarter 🤝
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* LEFT – DESCRIPTION */}
            <div className="p-10 bg-linear-to-br from-green-600 via-green-700 to-emerald-800 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">🌱</span>
                  <h2 className="text-4xl font-bold">Why AgriTogether?</h2>
                </div>

                <p className="mb-6 text-green-50 text-lg leading-relaxed">
                  When many farmers grow the same crop in a season, markets get
                  over-saturated — leading to price drops and losses.
                </p>

                <div className="space-y-3 ">
                  {[
                    { icon: "👥", text: "See what crops others are planning" },
                    { icon: "📊", text: "Identify over- and under-grown crops" },
                    { icon: "💡", text: "Make informed planting decisions" },
                    { icon: "🤝", text: "Plan better as a community" }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="pt-1 text-black">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-yellow-400 bg-opacity-20 rounded-lg border border-yellow-300 border-opacity-30">
                  <p className="text-sm text-yellow-100 font-medium">
                    💰 <strong>Impact:</strong> Better planning helps reduce losses
                    and supports more stable farmer income.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT – FORM */}
            <div className="p-10 bg-linear-to-br from-amber-50 to-orange-50">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Start Planning 👋
                </h3>
                <p className="text-gray-600">
                  Select your ward and season to view community trends
                </p>
              </div>

              {/* Ward */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  📍 Community Ward
                </label>
                <select
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none bg-white text-black"
                  value={ward}
                  onChange={(e) => setWard(e.target.value)}
                >
                  <option value="">Select ward</option>
                  <option value="Ward-1">Ward 1</option>
                  <option value="Ward-2">Ward 2</option>
                  <option value="Ward-3">Ward 3</option>
                </select>
              </div>

              {/* Season */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  📅 Growing Season
                </label>
                <select
                  className="w-full p-4 border-2 border-gray-200  text-black rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none bg-white"
                  value={season}
                  onChange={(e) => setSeason(e.target.value)}
                >
                  <option value="">Select season</option>
                  <option value="Summer">☀️ Summer</option>
                  <option value="Monsoon">🌧️ Monsoon</option>
                  <option value="Winter">❄️ Winter</option>
                </select>
              </div>

              {/* Selection Preview */}
              {(ward || season) && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">Your selection:</p>
                  <div className="flex gap-3 flex-wrap">
                    {ward && (
                      <span className="px-3 py-1 bg-white text-black rounded-full text-sm font-medium shadow">
                        📍 {ward}
                      </span>
                    )}
                    {season && (
                      <span className="px-3 py-1 bg-white text-black rounded-full text-sm font-medium shadow">
                        {seasonData[season]?.emoji} {season}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Continue */}
              <button
                onClick={handleContinue}
                disabled={!ward || !season}
                className="w-full  hover:scale-90 bg-linear-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl disabled:opacity-40 hover:from-green-700 hover:to-emerald-700 transition-all font-semibold text-lg shadow-lg"
              >
                Continue  →
              </button>

              {/* Trust Line */}
              <p className="mt-4 text-center text-sm text-gray-500">
                🔒 Your choice is private until you submit your final decision.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Badges */}
        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          {[
            { icon: "🔒", text: "Secure & Private" },
            { icon: "📱", text: "Mobile Friendly" },
            { icon: "🌍", text: "Community Driven" }
          ].map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium text-gray-700"
            >
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style> */}
    </div>
  );
}
