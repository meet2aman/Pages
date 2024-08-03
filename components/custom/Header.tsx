import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn(className, "header")}>
      <Link href={"/"} className="flex items-center justify-center gap-1">
        <Image
          src={"/pages.svg"}
          alt="logo"
          width={33}
          height={33}
          className="object-cover"
        />

        <h2 className="hidden text-xl font-bold md:block">Pages</h2>
      </Link>
      {children}
    </div>
  );
};

export default Header;
