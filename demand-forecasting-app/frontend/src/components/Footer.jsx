import React from "react";

const Footer = () => {
  return (
    <footer className="text-green-500 py-4 mt-auto">
      <div className="container mx-auto text-center text-lg">
        &copy; {new Date().getFullYear()} Phoebe Neo. All rights reserved.
      </div>
      <div className="text-green-700 container mx-auto text-center text-sm">
      ⚠️ This is a personal exploration project hosted publicly for educational and demonstration purposes. <b>No confidential Schneider Electric data is used, shared, or exposed. All input samples are synthetic and randomly generated.</b> The model is not intended for production use and should not be relied upon for any business decisions. ⚠️
      </div>
    </footer>
  );
};

export default Footer;
