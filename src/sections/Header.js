import React from "react";
import Name from "../components/Name";
import Description from "../components/Description";
import DateTime from "../components/DateTime";

const Header = () => {
  return (
    <div className=" h-[70vh] sm:pt-8 pt-0">
      <div className="flex flex-col-reverse sm:flex-row w-full h-auto justify-between items-center sm:pb-2 pb-0">
        <Name />
        <DateTime />
      </div>
      <Description />
    </div>
  );
};

export default Header;
