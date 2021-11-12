import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/client";

import LogoutIcon from "../../public/icons/logout.svg";
import { Button } from "./Button";

export const Nav = () => {
  const [session] = useSession();
  return (
    <header className="bg-white px-4 py-8 w-full flex items-center justify-around shadow-md">
      <h1 className="text-xl font-bold text-green-600 underline tracking-wide">
        <Link href="/" passHref>
          <a>Expense Tracker 💰</a>
        </Link>
      </h1>
      {session && (
        <Button
          className="w-28 py-2 px-2 flex items-center gap-2"
          variant="outline"
          onClick={() => signOut()}
        >
          Logout
          <LogoutIcon />
        </Button>
      )}
    </header>
  );
};
