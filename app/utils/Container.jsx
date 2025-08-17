import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full lg:max-w-7xl max-w-xl mx-auto px-4">{children}</div>
  );
};

export default Container;
