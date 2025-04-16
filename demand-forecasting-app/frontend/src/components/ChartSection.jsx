import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartSection = ({ forecast }) => {
  const data = forecast.map((qty, idx) => ({
    month: `+${idx + 1}M`,
    quantity: qty,
  }));

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Forecast Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="quantity" stroke="#00b140" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSection;
