import React from "react";

const CommonHeading = ({ heading, paragraph }) => {
  return (
    <div className="flex justify-center space-y-3 mt-3 items-center flex-col">
      <h1 className="text-4xl font-bold ">{heading}</h1>
      <p className="w-[95%] md:w-[75%] mx-auto text-center ">{paragraph}</p>
    </div>
  );
};

export default CommonHeading;
