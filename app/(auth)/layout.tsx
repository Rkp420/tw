import React from "react";
import { Logo } from "./_components/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full flex flex-col space-y-4 justify-center items-center">
      <Logo></Logo>
      {children}
    </div>
  );
}
