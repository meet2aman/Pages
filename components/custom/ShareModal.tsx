"use client";

import React from "react";
import { useSelf } from "@liveblocks/react/suspense";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const ShareModal = ({
  roomId,
  currentUserType,
  creatorId,
  collaborators,
}: ShareDocumentDialogProps) => {
  const user = useSelf();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [userType, setUserType] = React.useState<UserType>("viewer");

  const shareDocumentHandler = async () => {};

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button
          className="gradient-blue flex h-9 gap-1 px-4"
          disabled={currentUserType != "editor"}
        >
          <Image
            src={"/assets/icons/share.svg"}
            alt={"share-logo"}
            height={20}
            width={20}
            className="min-h-4 md:size-5"
          />
          <p className="mr-1 hidden sm:block">Share</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog">
        <DialogHeader>
          <DialogTitle>Manage who can view this project.</DialogTitle>
          <DialogDescription>
            Select which user can view and edit this document
          </DialogDescription>
        </DialogHeader>
        <Label htmlFor={`email`} className="mt-6 text-blue-100">
          Email Address
        </Label>
        <div className="flex items-center gap-3">
          <div className="flex flex-1 rounded-[5px] bg-dark-400">
            <Input
              id="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="share-input rounded-[5px]"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
