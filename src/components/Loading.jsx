import React from "react";
import { Bars } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Bars type="Bars" color="#0369a1" height={550} width={60} />
    </div>
  );
};

export default Loading;
