import React from 'react';

const FileUpload = ({ onUpload }) => {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="relative inline-block">
      <label className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded shadow transition duration-200">
        📁 Choose Excel File
        <input
          type="file"
          accept=".xlsx"
          onChange={handleFile}
          className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
        />
      </label>
    </div>
  );
};

export default FileUpload;
