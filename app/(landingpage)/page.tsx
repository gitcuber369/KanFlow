import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/font/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function LandingPage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-centre p-3 shadow-sm border bg-violet-200 text-violet-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No. 1 Task Manager
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          KanFlow helps teams move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r to-violet-600 from-blue-600 text-white w-fit  px-4 p-2 rounded-md pb-4">
          work to production.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 max-w-xs md:max-w-2xl text-center mx-auto mt-4",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks track,
        and manage your work with KanFlow, from high rises to the home office,
        the way your team works is unique - accomplish it all with KanFlow.
      </div>
      <Button className="mt-6" asChild>
        <Link href={"/"}>Get KanFlow for free 🎉</Link>
      </Button>
    </div>
  );
}

export default LandingPage;
