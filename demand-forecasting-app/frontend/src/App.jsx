import React, { useState } from 'react';
import axios from 'axios';
import FileUpload from './components/FileUpload.jsx';
import ChartSection from './components/ChartSection.jsx';
import Insights from './components/Insights.jsx';

function App() {
  const [data, setData] = useState(null);

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:8000/upload', formData);
      console.log('Backend response:', res.data);
      setData(res.data);
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full bg-gray-50 text-green-500 p-6">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Schneider Demand Forecast</h1>
        <FileUpload onUpload={handleUpload} />
        {data && (
          <>
            <ChartSection forecast={data.forecast} />
            <Insights model={data.model} mape={data.mape} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
