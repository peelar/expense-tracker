import React from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/client";

import { Button } from "../src/components/Button";

export default function Home() {
  const router = useRouter();
  const [session] = useSession();

  React.useEffect(() => {
    if (session) {
      router.push("/expenses");
    }
  }, [session, router]);

  return (
    <main className="flex justify-center items-center h-full">
      {!session && (
        <>
          <Button className="px-6 py-6 w-36" onClick={() => signIn()}>
            Sign In
          </Button>
        </>
      )}
    </main>
  );
}
