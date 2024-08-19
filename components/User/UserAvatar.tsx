import * as React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { AvatarProps } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/Icons";

interface UserAvatarProps extends AvatarProps {
  // user: Pick<User, "image" | "name">;
  user: any;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar.Root
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-md",
        "h-8 w-8"
      )}
      // user={{ name: user.name, image: user.image }}
      {...props}
    >
      {user.image ? (
        <Avatar.Image
          alt="Picture"
          className={cn("aspect-square h-full w-full")}
          src={user.image}
        />
      ) : (
        <Avatar.Fallback
          className={cn(
            "flex h-full w-full items-center justify-center rounded-md bg-muted"
          )}
        >
          <span className="sr-only">{user.name || 'user'}</span>
          <Icons.user className="h-4 w-4" />
        </Avatar.Fallback>
      )}
    </Avatar.Root>
  );
}
