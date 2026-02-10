import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  const ward = localStorage.getItem("ward");
  const season = localStorage.getItem("season");
  const selectedCrop = localStorage.getItem("selectedCrop") || "";

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");

      try {
        const res = await fetch(
          `https://api.fakefarmapp.com/stats?ward=${ward}&season=${season}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [ward, season]);

  const handleFinalSubmit = async () => {
    const token = localStorage.getItem("token");
    await fetch("https://api.fakefarmapp.com/submission/final", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert("Your crop plan has been finalized! ✅");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        Loading community stats...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-700 mb-2">
            Community Dashboard 🌾
          </h1>
          <p className="text-gray-600">
            See what other farmers in your ward are planning for {season} season.
          </p>
          <div className="mt-3 flex justify-center gap-3 flex-wrap">
            <span className="px-3 py-1 bg-white rounded-full shadow text-sm text-black">
              📍 {ward}
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {stats.map((item) => (
            <div
              key={item.crop}
              className={`p-6 rounded-2xl shadow-md border-2 transition-all ${
                item.alert.includes("Over") ? "border-red-400 bg-red-50" :
                item.alert.includes("Opportunity") ? "border-green-400 bg-green-50" :
                "border-gray-200 bg-white"
              }`}
            >
              <div className="text-5xl mb-3">{item.emoji || "🌱"}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">
                {item.crop}
              </div>
              <div className="text-sm text-gray-600 mb-2">
                {item.percent}% of farmers are planning this
              </div>
              <div className={`font-bold ${
                item.alert.includes("Over") ? "text-red-600" :
                item.alert.includes("Opportunity") ? "text-green-600" :
                "text-yellow-600"
              }`}>
                {item.alert}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Crop Info */}
        <div className="mb-6 text-center">
          <p className="text-gray-700">
            Your current choice:{" "}
            <span className="font-semibold text-green-700">{selectedCrop}</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            You can go back and change your crop if you want.
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4 flex-wrap">
         
          <button
            className="px-8 py-4 bg-white border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-all shadow-md hover:scale-90"
            onClick={() => (window.location.href = "/crop-selection")}
          >
            Change Crop ↩️
          </button>
           <button
            className="px-8 py-4 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all  hover:scale-90 shadow-lg"
            onClick={handleFinalSubmit}
          >
            Finalize Crop Plan ✅
          </button>
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Once finalized, your crop plan will be counted in community stats.
        </p>
      </div>
    </div>
  );
}
