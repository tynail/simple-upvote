import { NextUIProvider } from "@nextui-org/react";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
