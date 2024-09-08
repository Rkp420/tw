"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

export const Actions = () => {
  const { user, isSignedIn } = useUser(); // Client-side hook to get user

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!isSignedIn && (
        <SignInButton>
          <Button size="sm" variant="primary">
            Login
          </Button>
        </SignInButton>
      )}

      {isSignedIn && user && (
        <div className="flex items-center gap-x-4">
          <Button
            size="sm"
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
            asChild
          >
            <Link href={`/u/${user.username || "profile"}`}>
              <Clapperboard className="h-5 w-5 lg:mr-2 " />
              <span className="hidden lg:block">Dashboard</span>
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </div>
  );
};
