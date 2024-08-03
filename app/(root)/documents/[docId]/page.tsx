import CollaborativeRoom from "@/components/custom/CollaborativeRoom";
import Header from "@/components/custom/Header";
import { Editor } from "@/components/editor/Editor";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const docPage = ({ params }: { params: { docId: string } }) => {
  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom />
    </main>
  );
};

export default docPage;
