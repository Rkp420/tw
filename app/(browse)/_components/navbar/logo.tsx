import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600", "200", "400", "300", "500", "800", "700"],
});

export const Logo = function () {
  return (
    <>
      <Link href='/'>
        <div className="flex items-center gap-x-4 hover:opacity-75 transition">
            <div className="bg-white rounded-full p-1 mr-12 shrink-0 lg:shrink lg:mr-0">
                <Image src="/Unicorn logo.svg" alt="GameHub" width="32" height="32"></Image>
            </div>
            <div className={cn("hidden lg:block",font.className)}>
                <p className="text-lg font-semibold">GameHub</p>
                <p className="text-xs text-muted-foreground">Let's Play</p>
            </div>
        </div>
      </Link>
    </>
  );
};
