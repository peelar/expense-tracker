import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";

export const Authenticated = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [session, loading] = useSession();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    router.push("/");
  }

  return <>{children}</>;
};
