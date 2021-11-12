import React from "react";

import { Nav } from "../components/Nav";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-50 h-screen flex flex-col">
      <Nav />
      <main className="container mx-auto px-4 py-4 w-full h-full">
        {children}
      </main>
    </div>
  );
};
