import React from "react";

export default React.memo(() => {
  return (
    <img
      src={require("../../assets/bg.jpg")}
      alt="Banner"
      className="w-full object-cover h-full sm:h-full md:h-96 lg:h-112 xl:h-128 2xl:h-144"
    />
  );
});
