"use client";
"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  InboxNotification,
  InboxNotificationList,
  LiveblocksUIConfig,
} from "@liveblocks/react-ui";
import {
  useInboxNotifications,
  useUnreadInboxNotificationsCount,
} from "@liveblocks/react/suspense";
import Image from "next/image";
import { ReactNode } from "react";

const Notifications = () => {
 const { inboxNotifications } = useInboxNotifications();
 const { count } = useUnreadInboxNotificationsCount();
 const unreadNotifications = inboxNotifications.filter(
   (notification) => !notification.readAt,
 );
  return (
    <Popover>
      <PopoverTrigger className="relative flex size-10 items-center justify-center rounded-[8px]">
        <Image
          src={"/assets/icons/bell.svg"}
          alt="inbox"
          width={20}
          height={20}
        />
        {count > 0 && (
          <span className="relative flex size-2">
            <span className="absolute -left-2 -top-2 inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
            <span className="relative -left-2 -top-2 inline-flex size-2 rounded-full bg-sky-500" />
          </span>
        )}
      </PopoverTrigger>
      <PopoverContent className="shad-popover rounded-[8px]" align="end">
        <LiveblocksUIConfig
          overrides={{
            INBOX_NOTIFICATION_TEXT_MENTION: (user: ReactNode) => (
              <>{user} mentioned you.</>
            ),
          }}
        >
          <InboxNotificationList>
            {unreadNotifications.length <= 0 && (
              <p className="py-2 text-center text-dark-500">
                No new notifications
              </p>
            )}

            {unreadNotifications.length > 0 &&
              unreadNotifications.map((notification) => (
                <InboxNotification
                  key={notification.id}
                  inboxNotification={notification}
                  className="bg-dark-200 text-white"
                  href={`/documents/${notification.roomId}`}
                  showActions={false}
                  kinds={{
                    thread: (props) => (
                      <InboxNotification.Thread
                        {...props}
                        showActions={false}
                        showRoomName={false}
                      />
                    ),
                    textMention: (props) => (
                      <InboxNotification.TextMention
                        {...props}
                        showRoomName={false}
                      />
                    ),
                    $documentAccess: (props) => (
                      <InboxNotification.Custom
                        {...props}
                        title={props.inboxNotification.activities[0].data.title}
                        aside={
                          <InboxNotification.Icon className="bg-transparent">
                            <Image
                              src={
                                (props.inboxNotification.activities[0].data
                                  .avatar as string) || ""
                              }
                              width={36}
                              height={36}
                              alt="avatar"
                              className="rounded-full"
                            />
                          </InboxNotification.Icon>
                        }
                      >
                        {props.children}
                      </InboxNotification.Custom>
                    ),
                  }}
                />
              ))}
          </InboxNotificationList>
        </LiveblocksUIConfig>
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
