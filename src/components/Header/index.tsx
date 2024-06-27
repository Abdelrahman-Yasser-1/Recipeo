import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import Input from "../Input";

export default React.memo(() => {
  return (
    <nav className="bg-gray-100 border-gray-200 mb-2">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <GiKnifeFork size={25} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Recipeo
          </span>
        </a>

        <Input label="Search" type="text" placeholder=" " />
      </div>
    </nav>
  );
});
