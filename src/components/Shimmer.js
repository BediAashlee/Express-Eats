import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="flex justify-between">
        {Array(12)
          .fill("")
          .map((e, index) => (
            <div key={index} className="w-48 px-3"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
