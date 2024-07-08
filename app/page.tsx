import { UserButton } from "@clerk/nextjs";
import React from "react";
export default function Home() {
  return (
    <>
      <div className="flex justify-between p-4">
        <h1>Dashboard</h1>
        <UserButton afterSignOutUrl="/"></UserButton>
      </div>
    </>
  );
}
