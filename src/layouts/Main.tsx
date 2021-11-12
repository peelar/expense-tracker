import React from "react";

import { Nav } from "../components/Nav";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-4 h-screen w-full">
        {children}
      </div>
    </>
  );
};
