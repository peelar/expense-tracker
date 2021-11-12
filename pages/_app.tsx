import "tailwindcss/tailwind.css";

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
        </MainLayout>
      </QueryClientProvider>
    </Provider>
  );
}
