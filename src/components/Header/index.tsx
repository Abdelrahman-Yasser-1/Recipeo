import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { BsInfoSquare } from "react-icons/bs";

export default React.memo(() => {
  return (
    <nav className="mb-2">
      <div className=" flex flex-wrap items-center justify-between py-4">
        <a href="/" className="flex items-center space-x-3">
          <GiKnifeFork size={25} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Recipeo
          </span>
        </a>
        <a href="/about">
          <BsInfoSquare size={25} />
        </a>
      </div>
      <hr></hr>
    </nav>
  );
});
