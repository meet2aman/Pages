import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-20 py-4">
      <div className="flex justify-center items-center gap-1">
        <div className="">
          <Image
            src={"/pages.svg"}
            alt="logo"
            width={30}
            height={30}
            className="object-cover"
          />
        </div>
        <h2 className="text-xl font-bold ">Pages</h2>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Image
          src={"/assets/icons/search.svg"}
          alt="search-icon"
          height={20}
          width={20}
        />
        <Image
          src={"/assets/icons/bell.svg"}
          alt="search-icon"
          height={20}
          width={20}
        />
      </div>
    </div>
  );
};

export default Navbar;
