import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./Loading-Animation.json";

export default React.memo(() => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex-grow">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
});
