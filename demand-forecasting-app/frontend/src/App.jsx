import React, { useState } from 'react';
import axios from 'axios';
import FileUpload from './components/FileUpload.jsx';
import ChartSection from './components/ChartSection.jsx';
import Insights from './components/Insights.jsx';
import ModelGuide from './components/ModelGuide.jsx';

function App() {
  const [data, setData] = useState(null);
  const [selectedModel, setSelectedModel] = useState('auto');
  const [view, setView] = useState('chart');
  const [showGuide, setShowGuide] = useState(false);

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('model', selectedModel);

    try {
      const res = await axios.post('http://localhost:8000/upload', formData);
      console.log('Backend response:', res.data);
      setData(res.data);
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full bg-gray-50 text-green-500 p-4 sm:p-6">
      <div className="w-full max-w-5xl">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">Schneider Demand Forecast</h1>
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="text-sm underline hover:text-green-700"
          >
            {showGuide ? 'Hide Guide' : 'Show Model Selection Guide'}
          </button>
        </div>

        {showGuide && (
          <div className="mb-6">
            <ModelGuide />
          </div>
        )}

        <div className="mb-4 flex flex-col sm:flex-row items-center gap-4">
          <label className="font-semibold">Select Model:</label>
          <select
            className="border border-green-500 rounded px-4 py-2 text-black"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
          >
            <option value="auto">Auto (Best Model)</option>
            <option value="arima">ARIMA</option>
            <option value="holtwinters">Holt-Winters</option>
          </select>
          <FileUpload onUpload={handleUpload} />
        </div>

        {data && (
          <>
            <div className="flex justify-between items-center mt-4 flex-wrap gap-4">
              <button
                onClick={() => setView(view === 'chart' ? 'table' : 'chart')}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Toggle View: {view === 'chart' ? 'Table' : 'Chart'}
              </button>
            </div>

            {view === 'chart' ? (
              <ChartSection forecast={data.forecast} model={data.model} />
            ) : (
              <div className="mt-6 bg-white rounded shadow p-4 overflow-x-auto">
                <h2 className="text-lg font-semibold mb-2">Forecast Table</h2>
                <table className="table-auto w-full text-left">
                  <thead>
                    <tr>
                      <th className="p-2 border">Month</th>
                      <th className="p-2 border">Forecast Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.forecast.map((val, idx) => (
                      <tr key={idx}>
                        <td className="p-2 border">+{idx + 1}M</td>
                        <td className="p-2 border">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <Insights model={data.model} mape={data.mape} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
