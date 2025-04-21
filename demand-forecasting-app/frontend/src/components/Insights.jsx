import React from 'react';

const Insights = ({ model, mape }) => {
  const explanation = {
    arima: "ARIMA is best for longer time series with clear trends.",
    holtwinters: "Holt-Winters is great for short-term series with seasonality or consistent trends."
  };

  return (
    <div className="mt-4 p-4 border border-green-500 rounded bg-white shadow text-black">
      <h3 className="text-lg font-bold text-green-500 mb-2">Forecast Model Used: {model.toUpperCase()}</h3>
      <p><strong>MAPE:</strong> {(mape * 100).toFixed(2)}%</p>
      <p className="mt-2 text-sm">{explanation[model]}</p>
    </div>
  );
};

export default Insights;
