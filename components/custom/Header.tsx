import Image from "next/image";
import Link from "next/link";
import React from "react";



const Header = ({ children }: HeaderProps) => {
  return (
    <div className="header">
      <Link href={"/"} className="flex justify-center items-center gap-1">
        <Image
          src={"/pages.svg"}
          alt="logo"
          width={33}
          height={33}
          className="object-cover"
        />

        <h2 className="text-xl font-bold hidden md:block">Pages</h2>
      </Link>
      {children}
      
    </div>
  );
};

export default Header;
