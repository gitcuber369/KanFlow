import React from "react";
import Header from "./_components/header";
import Footer from "./_components/footer";

function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <main className="pt-40 pb-20">{children}</main>
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
