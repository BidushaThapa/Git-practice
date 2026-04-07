import { useState, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useFarmerStore } from "../store/farmerStore";



const CROP_META = {
  tomato:  { label: "Tomato",  emoji: "🍅", color: "#e05c2a" },
  onion:   { label: "Onion",   emoji: "🧅", color: "#d4a017" },
  potato:  { label: "Potato",  emoji: "🥔", color: "#7f77dd" },
  chilli:  { label: "Chilli",  emoji: "🌶️", color: "#c0392b" },
  cabbage: { label: "Cabbage", emoji: "🥬", color: "#27ae60" },
};

const PRICE_DATA = [
  { season: "Summer '24", tomato: 45, onion: 30, potato: 28, chilli: 80, cabbage: 18 },
  { season: "Monsoon '24", tomato: 12, onion: 35, potato: 32, chilli: 75, cabbage: 22 },
  { season: "Winter '24",  tomato: 38, onion: 22, potato: 20, chilli: 85, cabbage: 15 },
  { season: "Summer '25",  tomato: 42, onion: 28, potato: 25, chilli: 78, cabbage: 20 },
  { season: "Monsoon '25", tomato: 15, onion: 33, potato: 30, chilli: 72, cabbage: 24 },
];

const RISK_DATA = [
  { crop: "Tomato",  emoji: "🍅", farmers: 72, color: "#e05c2a" },
  { crop: "Onion",   emoji: "🧅", farmers: 18, color: "#d4a017" },
  { crop: "Potato",  emoji: "🥔", farmers: 35, color: "#7f77dd" },
  { crop: "Chilli",  emoji: "🌶️", farmers: 14, color: "#c0392b" },
  { crop: "Cabbage", emoji: "🥬", farmers: 20, color: "#27ae60" },
];

const ALERTS = [
  {
    type: "danger",
    title: "⚠️ Tomato oversupply — Monsoon 2025",
    body: "72% of Ward-1 farmers grew Tomato last monsoon. Prices dropped from Rs 45 to Rs 12 — a 73% crash. Avoid if many neighbours plan it again.",
  },
  {
    type: "success",
    title: "✅ Chilli — consistently high returns",
    body: "Chilli maintained Rs 72–85/kg across all seasons with fewer than 15% of farmers growing it. Low competition, stable demand.",
  },
  {
    type: "warning",
    title: "🔔 Potato — moderate risk this season",
    body: "Potato coverage has risen from 28% to 35% over two seasons. Prices dipped slightly. Monitor community trends before committing.",
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-3 text-sm">
      <p className="font-semibold text-gray-700 mb-2">{label}</p>
      {payload.map((p) => (
        <div key={p.dataKey} className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
          <span className="text-gray-500">{CROP_META[p.dataKey]?.label}:</span>
          <span className="font-medium text-gray-800">Rs {p.value}/kg</span>
        </div>
      ))}
    </div>
  );
};

const RiskTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0];
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-3 text-sm">
      <p className="font-semibold text-gray-700">{d.payload.emoji} {d.payload.crop}</p>
      <p className="text-gray-500 mt-1">{d.value}% of farmers grew this</p>
      <p className={`text-xs mt-1 font-medium ${d.value > 50 ? "text-red-600" : d.value > 30 ? "text-amber-600" : "text-green-600"}`}>
        {d.value > 50 ? "High oversupply risk" : d.value > 30 ? "Moderate risk" : "Low risk — good opportunity"}
      </p>
    </div>
  );
};
import { useNavigate } from "react-router-dom";

export default function MarketPriceTrends() {
  const [selectedCrop, setSelectedCrop] = useState("all");
  const [animatedIn, setAnimatedIn] = useState(false);
  const ward = useFarmerStore((state) => state.ward);
  const season = useFarmerStore((state) => state.season);
    const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => setAnimatedIn(true), 80);
    return () => clearTimeout(t);
  }, []);

  const visibleCrops =
    selectedCrop === "all" ? Object.keys(CROP_META) : [selectedCrop];

  const metricHigh = { value: "Rs 85", label: "Chilli / Winter '24" };
  const metricLow  = { value: "Rs 12", label: "Tomato / Monsoon '24" };
  const metricVol  = { value: "Tomato", label: "−73% last monsoon" };

  return (
    <div
      className="min-h-screen"
      style={{ background: "#f0f7ee", fontFamily: "'Segoe UI', sans-serif" }}
    >
      {/* Header */}
      <div
        className="text-center py-10 px-4"
        style={{
          opacity: animatedIn ? 1 : 0,
          transform: animatedIn ? "translateY(0)" : "translateY(-12px)",
          transition: "all 0.5s ease",
        }}
      >
        <h1 className="text-3xl font-bold" style={{ color: "#1a5c1a" }}>
          Market Price Trends 📊
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Historical crop prices to help you make smarter planting decisions
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <span className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-500">
            📍 {ward}
          </span>
          <span className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-500">
            🗓️ {season}
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-16 space-y-6">

        {/* Metric Cards */}
        <div
          className="grid grid-cols-3 gap-3"
          style={{
            opacity: animatedIn ? 1 : 0,
            transform: animatedIn ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.55s ease 0.1s",
          }}
        >
          {[
            { label: "Highest price", value: metricHigh.value, sub: metricHigh.label, subColor: "#27ae60" },
            { label: "Lowest price",  value: metricLow.value,  sub: metricLow.label,  subColor: "#c0392b" },
            { label: "Most volatile", value: metricVol.value,  sub: metricVol.label,  subColor: "#c0392b" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-2xl p-4"
              style={{ background: "white", border: "0.5px solid #d4e8d0" }}
            >
              <p className="text-xs text-gray-400 mb-1">{m.label}</p>
              <p className="text-lg font-bold text-gray-800">{m.value}</p>
              <p className="text-xs mt-1 font-medium" style={{ color: m.subColor }}>
                {m.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Price Line Chart */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: "white",
            border: "0.5px solid #d4e8d0",
            opacity: animatedIn ? 1 : 0,
            transform: animatedIn ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.55s ease 0.2s",
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div>
              <h2 className="text-base font-semibold text-gray-800">
                Price per kg (Rs) — last 5 seasons
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                How market prices shifted across seasons
              </p>
            </div>
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="text-sm rounded-xl px-3 py-2 outline-none"
              style={{
                border: "1.5px solid #b8ddb5",
                background: "#f0f7ee",
                color: "#1a5c1a",
                fontWeight: 500,
              }}
            >
              <option value="all">All crops</option>
              {Object.entries(CROP_META).map(([k, v]) => (
                <option key={k} value={k}>
                  {v.emoji} {v.label}
                </option>
              ))}
            </select>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mb-4">
            {visibleCrops.map((k) => (
              <span key={k} className="flex items-center gap-1.5 text-xs text-gray-500">
                <span
                  className="inline-block w-3 h-3 rounded-sm"
                  style={{ background: CROP_META[k].color }}
                />
                {CROP_META[k].label}
              </span>
            ))}
          </div>

          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={PRICE_DATA} margin={{ top: 4, right: 8, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eef5ec" />
              <XAxis dataKey="season" tick={{ fontSize: 11, fill: "#9ca3af" }} />
              <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} tickFormatter={(v) => `Rs ${v}`} />
              <Tooltip content={<CustomTooltip />} />
              {visibleCrops.map((k) => (
                <Line
                  key={k}
                  type="monotone"
                  dataKey={k}
                  stroke={CROP_META[k].color}
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: CROP_META[k].color }}
                  activeDot={{ r: 6 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Oversupply Risk Bar Chart */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: "white",
            border: "0.5px solid #d4e8d0",
            opacity: animatedIn ? 1 : 0,
            transform: animatedIn ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.55s ease 0.3s",
          }}
        >
          <h2 className="text-base font-semibold text-gray-800 mb-1">
            Oversupply risk index
          </h2>
          <p className="text-xs text-gray-400 mb-4">
            % of Ward-1 farmers who grew each crop last monsoon. Higher = more
            risk of price crash.
          </p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={RISK_DATA}
              margin={{ top: 4, right: 8, left: -10, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#eef5ec" vertical={false} />
              <XAxis
                dataKey="crop"
                tick={{ fontSize: 11, fill: "#9ca3af" }}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                tickFormatter={(v) => `${v}%`}
                domain={[0, 100]}
              />
              <Tooltip content={<RiskTooltip />} />
              <Bar dataKey="farmers" radius={[6, 6, 0, 0]}>
                {RISK_DATA.map((entry) => (
                  <rect key={entry.crop} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {/* Risk legend */}
          <div className="flex gap-4 mt-3 flex-wrap">
            {[
              { color: "#fee2e2", text: "text-red-600",   label: "High risk  >50%" },
              { color: "#fef3c7", text: "text-amber-600", label: "Moderate  30–50%" },
              { color: "#dcfce7", text: "text-green-600", label: "Low risk  <30%" },
            ].map((r) => (
              <span key={r.label} className="flex items-center gap-1.5 text-xs">
                <span
                  className="w-3 h-3 rounded-sm"
                  style={{ background: r.color, border: "0.5px solid #d1d5db" }}
                />
                <span className="text-gray-500">{r.label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Alert Cards */}
        <div
          className="space-y-3"
          style={{
            opacity: animatedIn ? 1 : 0,
            transform: animatedIn ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.55s ease 0.4s",
          }}
        >
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide px-1">
            Season Insights
          </h2>
          {ALERTS.map((a, i) => {
            const styles = {
              danger:  { bg: "#fef2f2", border: "#fca5a5", title: "#991b1b", body: "#7f1d1d" },
              success: { bg: "#f0fdf4", border: "#86efac", title: "#166534", body: "#14532d" },
              warning: { bg: "#fffbeb", border: "#fcd34d", title: "#92400e", body: "#78350f" },
            }[a.type];
            return (
              <div
                key={i}
                className="rounded-2xl px-4 py-3"
                style={{
                  background: styles.bg,
                  border: `0.5px solid ${styles.border}`,
                }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: styles.title }}>
                  {a.title}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: styles.body }}>
                  {a.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tip */}
        <div
          className="rounded-2xl px-4 py-3"
          style={{
            background: "#fefce8",
            border: "0.5px solid #fde68a",
            opacity: animatedIn ? 1 : 0,
            transition: "all 0.55s ease 0.5s",
          }}
        >
          <p className="text-xs text-amber-800 leading-relaxed">
            💡 <strong>Tip:</strong> Cross-check these trends with the Community
            Dashboard to see what your neighbours plan to grow this season before
            finalising your crop choice.
          </p>
        </div>

        {/* CTA */}
        <div
          className="flex gap-3"
          style={{
            opacity: animatedIn ? 1 : 0,
            transition: "all 0.55s ease 0.55s",
          }}
        >
          <button
            className="flex-1 py-3 rounded-2xl text-sm font-medium"
            style={{
              border: "1.5px solid #b8ddb5",
              background: "white",
              color: "#1a5c1a",
            }}
            onClick={() => navigate("/dashboard")}
          >
            ← Go Back
          </button>
          <button
            className="flex-1 py-3 rounded-2xl text-sm font-semibold text-white"
            style={{ background: "#2d8a2d" }}
          >
            View Community Dashboard →
          </button>
        </div>
      </div>
    </div>
  );
}