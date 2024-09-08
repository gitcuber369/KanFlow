import React from "react";

function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="pt-40 pb-20">{children}</main>
    </div>
  );
}

export default LandingPageLayout;
