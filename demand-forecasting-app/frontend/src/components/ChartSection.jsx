import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const ChartSection = ({ forecast, model }) => {
  const data = forecast.map((qty, idx) => ({
    month: `+${idx + 1}M`,
    forecast: qty,
  }));

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Forecast Trend ({model.toUpperCase()})</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="forecast" stroke="#00b140" strokeWidth={2} name="Forecast Qty" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSection;