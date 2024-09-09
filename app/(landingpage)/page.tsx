import { Medal } from "lucide-react";
import React from "react";

function LandingPage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-centre p-3 shadow-sm border bg-violet-200 text-violet-700 rounded-full">
          <Medal className="h-6 w-6 mr-2" />
          No. 1 Task Manager
        </div>
        <h1 className="lg:text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          KanFlow helps teams move
        </h1>
        <div className="lg:text-3xl md:text-6xl bg-gradient-to-r to-violet-600 from-blue-600 text-white w-fit  px-4 p-2 rounded-md pb-4">
          work to production.
        </div>
      </div>
      <div>Collaborate, track, and manage your work with KanFlow, from high rises to the home </div>
    </div>
  );
}

export default LandingPage;
