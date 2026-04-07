import { useNavigate } from "react-router-dom";
import { useFarmerStore } from "../store/farmerStore";

export default function CropSelection() {
  const selectedCrop = useFarmerStore((state) => state.selectedCrop);
  const setSelectedCrop = useFarmerStore((state) => state.setSelectedCrop);
  const ward = useFarmerStore((state) => state.ward);
  const season = useFarmerStore((state) => state.season);
  const landSize = useFarmerStore((state) => state.landSize);
  const landUnit = useFarmerStore((state) => state.landUnit);
  const navigate = useNavigate();
  const crops = [
    { name: "Tomato", emoji: "🍅" },
    { name: "Onion", emoji: "🧅" },
    { name: "Potato", emoji: "🥔" },
    { name: "Chilli", emoji: "🌶️" },
    { name: "Cabbage", emoji: "🥬" }
  ];
    const handleCropClick = (cropName) => {
    if (selectedCrop === cropName) {
      setSelectedCrop("");
    } else {
      setSelectedCrop(cropName);
    }
  };


  const handleContinue = async () => {
    if (!selectedCrop) return;

    const token = localStorage.getItem("token");
    navigate("/dashboard")
    // Save DRAFT to backend
    await fetch("https://api.fakefarmapp.com/submission/draft", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        ward,
        season,
        crop: selectedCrop
      })
    });

    // navigate("/stats");
    console.log("Draft saved:", selectedCrop);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-700 mb-2">
            Choose Your Crop 🌱
          </h1>
          <p className="text-gray-600">
            Select the crop you are planning to grow this season
          </p>

          <div className="mt-4 flex justify-center gap-3 flex-wrap">
            <span className="px-3 py-1 bg-white rounded-full shadow text-sm text-black">
              📍 {ward}
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow text-sm text-black">
              📅 {season}
            </span>
              <span className="px-3 py-1 bg-white rounded-full shadow text-sm text-black">
                  🌾 {landSize} {landUnit}
            </span>
          </div>
        </div>

        {/* Crop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {crops.map((crop) => (
            <button
              key={crop.name}
              onClick={() => handleCropClick(crop.name)}
              className={`p-6  hover:scale-90 rounded-2xl border-2 transition-all text-center shadow-sm
                ${
                  selectedCrop === crop.name
                    ? "border-green-600 bg-green-100 scale-[1.03]"
                    : "border-gray-200 bg-white hover:border-green-400"
                }`}
            >
              <div className="text-5xl mb-3">{crop.emoji}</div>
              <div className="text-lg font-semibold text-gray-800">
                {crop.name}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Info */}
        {selectedCrop && (
          <div className="mb-6 text-center">
            <p className="text-gray-700">
              You selected:{" "}
              <span className="font-semibold text-green-700">
                {selectedCrop}
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              You can change this after viewing community trends
            </p>
          </div>
        )}

        {/* Continue Button */}
        <div className="flex gap-2 justify-center">
           <button
            onClick={() => navigate("/season")} // SPA navigation, no reload
            className="px-10  hover:scale-90 py-4 bg-white border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-all shadow-md flex items-center gap-2"
          >
            <span>←</span> <span>Go Back</span>
          </button>
          <button
            onClick={handleContinue}
            disabled={!selectedCrop}
            className="px-10  hover:scale-90 py-4 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold text-lg disabled:opacity-40 hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg"
          >
            View Community Trends →
          </button>
         
        </div>

        {/* Trust Line */}
        <p className="mt-6 text-center text-sm text-gray-500">
          🔒 This is a draft choice. Your final decision is not submitted yet.
        </p>
      </div>
    </div>
  );
}
