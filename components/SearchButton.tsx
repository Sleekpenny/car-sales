"use client";

import React from "react";
import Image from "next/image";

const SearchButton = ({ otherclasses }: any) => {
  return (
    <button
      type="submit"
      className={`-ml-3 z-10 cursor-pointer ${otherclasses}`}
    >
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

export default SearchButton;
