"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceDot,
} from "recharts";
import { useState } from "react";

type Range = "7D" | "30D";

const data7D = [
  { day: "Mon", value: 42000 },
  { day: "Tue", value: 43500 },
  { day: "Wed", value: 42800 },
  { day: "Thu", value: 45200 },
  { day: "Fri", value: 47000 },
  { day: "Sat", value: 46200 },
  { day: "Sun", value: 48300 },
];

const data30D = [
  { day: "Week 1", value: 41000 },
  { day: "Week 2", value: 43800 },
  { day: "Week 3", value: 45500 },
  { day: "Week 4", value: 48300 },
];

export default function MarketChart() {
  const [range, setRange] = useState<Range>("7D");

  const data = range === "7D" ? data7D : data30D;

  const lastPoint = data[data.length - 1];

  return (
    <div className="w-full space-y-4">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">BTC / USD</p>
          <h2 className="text-xl font-semibold">
            ${lastPoint.value.toLocaleString()}
          </h2>
        </div>

        {/* RANGE SWITCH */}
        <div className="flex gap-2">
          {(["7D", "30D"] as Range[]).map((item) => (
            <button
              key={item}
              onClick={() => setRange(item)}
              className={`px-3 py-1 text-xs rounded-lg border transition ${
                range === item
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* CHART */}
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>

            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />

            {/* CLEAN TOOLTIP */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #1f2937",
                borderRadius: "10px",
                color: "#fff",
              }}
              cursor={{ stroke: "#10b981", strokeWidth: 1 }}
            />

            {/* MAIN LINE */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />

            {/* LAST VALUE MARKER */}
            <ReferenceDot
              x={lastPoint.day}
              y={lastPoint.value}
              r={6}
              fill="#10b981"
              stroke="white"
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}