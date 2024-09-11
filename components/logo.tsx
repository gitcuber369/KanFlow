import Image from "next/image";
import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/font/font.woff2",
});

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.svg" alt="logo" height={30} width={30} />
        <p className={cn("text-lg text-neutral-700", headingFont.className)}>
          KanFlow
        </p>
      </div>
    </Link>
  );
};
