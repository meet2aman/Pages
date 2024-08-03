"use client";
import React from "react";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import Loader from "./Loader";
import Header from "@/components/custom/Header";
import { Editor } from "@/components/editor/Editor";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room">
          <Header>
            <div className="flex w-fit items-center justify-center gap-2">
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
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
