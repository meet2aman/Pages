"use server";

import { clerkClient, EmailAddress } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";

export const getClerkUser = async ({ userIds }: { userIds: string[] }) => {
  try {
    const { data } = await clerkClient.users.getUserList({
      emailAddress: userIds,
    });
    const users = data.map((user) => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0].emailAddress,
      avatar: user.imageUrl,
    }));
    const sortedUsers = userIds.map((email) =>
      users.find((user) => user.email === email),
    );
    return parseStringify(sortedUsers);
  } catch (error: any) {
    console.log(`Error fetching user ${error}`);
  }
};