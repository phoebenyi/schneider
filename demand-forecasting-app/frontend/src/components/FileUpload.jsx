import React from 'react';

const FileUpload = ({ onUpload }) => {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="mb-4">
      <input type="file" accept=".xlsx" onChange={handleFile} />
    </div>
  );
};

export default FileUpload;
