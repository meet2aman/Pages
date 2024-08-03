import Header from "@/components/custom/Header";
import { Editor } from "@/components/editor/Editor";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const docPage = ({ params }: { params: { docId: string } }) => {
  return (
    <div>
      <Header>
        <div className="flex justify-center items-center gap-2 w-fit">
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
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Header>
      <Editor />
    </div>
  );
};

export default docPage;
