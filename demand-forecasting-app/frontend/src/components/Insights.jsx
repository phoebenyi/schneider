import React from 'react';

const Insights = ({ model, mape }) => {
  return (
    <div className="mt-4 p-4 border border-green-500 rounded bg-white shadow text-black">
      <h3 className="text-lg font-bold text-green-500">Forecast Model Used: {model}</h3>
      <p>MAPE: {(mape * 100).toFixed(2)}%</p>
      <p>This model was selected based on the lowest AIC and highest recent accuracy.</p>
    </div>
  );
};

export default Insights;
