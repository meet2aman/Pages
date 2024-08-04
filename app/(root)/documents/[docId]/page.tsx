import CollaborativeRoom from "@/components/custom/CollaborativeRoom";
import Header from "@/components/custom/Header";
import { Editor } from "@/components/editor/Editor";
import { getDocument } from "@/lib/actions/room.actions";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const docPage = async ({ params }: { params: { docId: string } }) => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");
  const room = await getDocument({
    roomId: params.docId,
    userId: clerkUser.emailAddresses[0].emailAddress,
  });
  if (!room) redirect("/");
  //TODO: Access the permissions of the user to access the document
  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom roomId={params.docId} roomMetadata={room.metadata} users={[]} currentUserType={"creator"} />
    </main>
  );
};

export default docPage;
