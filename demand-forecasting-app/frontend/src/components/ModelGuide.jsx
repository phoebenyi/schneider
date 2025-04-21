import React from 'react';

const ModelGuide = () => {
  const rules = [
    { condition: 'Short data length (<12 months)', model: 'Holt-Winters' },
    { condition: 'Long-term trend visible', model: 'ARIMA' },
    { condition: 'Seasonality present', model: 'Holt-Winters' },
    { condition: 'No clear seasonality, just trend', model: 'ARIMA' },
    { condition: 'Rapid recent changes', model: 'ARIMA' },
    { condition: 'Data is noisy / inconsistent', model: 'Holt-Winters' },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-green-600">📘 Model Recommendation Guide</h1>
      <table className="w-full text-left border border-green-300 bg-white shadow">
        <thead className="bg-green-100">
          <tr>
            <th className="p-3 border-b border-green-300">Condition</th>
            <th className="p-3 border-b border-green-300">Recommended Model</th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule, index) => (
            <tr key={index} className="hover:bg-green-50">
              <td className="p-3 border-b border-green-200">{rule.condition}</td>
              <td className="p-3 border-b border-green-200 font-medium">{rule.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ModelGuide;
