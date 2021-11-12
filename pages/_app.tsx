import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";

import { MainLayout } from "../src/layouts/Main";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
