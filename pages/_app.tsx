import "tailwindcss/tailwind.css";

import React from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";

import { MainLayout } from "../src/layouts/Main";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <Component {...pageProps} />
          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                minWidth: "240px",
                padding: "10px",
                fontSize: "1.5rem",
              },
            }}
          />
        </MainLayout>
      </QueryClientProvider>
    </Provider>
  );
}
