import Image from "next/image";
import React, { useState } from "react";
import UserTypeSelector from "./UserTypeSelector";
import { setUser } from "@sentry/nextjs";
import { Button } from "../ui/button";
import {
  removeCollaborators,
  updateDocument,
  updateDocumentAccesses,
} from "@/lib/actions/room.actions";

const Collaborators = ({
  collaborator,
  roomId,
  creatorId,
  user,
  email,
}: CollaboratorProps) => {
  const [userType, setUserType] = useState(collaborator.userType || "viewer");
  const [isLoading, setIsLoading] = useState(false);
  console.log(creatorId, collaborator.id);

  const shareDocumentHandler = async (type: string) => {
    setIsLoading(true);
    await updateDocumentAccesses({
      roomId,
      email,
      userType: type as UserType,
      updatedBy: user,
    });
    setIsLoading(false);
  };
  const removeCollaboratorHandler = async (email: string) => {
    setIsLoading(true);
    await removeCollaborators({ email, roomId });
    setIsLoading(false);
  };

  return (
    <li className="flex items-center justify-between gap-2 py-3">
      <div className="flex gap-2">
        <Image
          src={collaborator.avatar}
          width={36}
          alt={collaborator.name}
          height={36}
          className="size-none rounded-[100%]"
        />
        <div>
          <p className="line-clamp-1 text-sm font-semibold leading-4 text-white">
            {collaborator.name}
            <span className="text-10-regular pl-2 text-blue-100">
              {isLoading && "updating..."}
            </span>
          </p>
          <p className="text-sm font-light text-blue-100">
            {collaborator.email}
          </p>
        </div>
      </div>
      {creatorId === collaborator.id ? (
        <p className="text-sm text-blue-100">Owner</p>
      ) : (
        <>
          <div className="flex items-center">
            <UserTypeSelector
              userType={userType as UserType}
              setUserType={setUserType || "viewer"}
              onClickHandler={shareDocumentHandler}
            />
            <Button
              type="button"
              onClick={() => removeCollaboratorHandler(collaborator.email)}
            >
              Remove
            </Button>
          </div>
        </>
      )}
    </li>
  );
};

export default Collaborators;
