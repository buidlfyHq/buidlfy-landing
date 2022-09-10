import { useEffect } from "react";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import "../styles/globals.scss";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const AnyComponent = Component as any;

  return <AnyComponent {...pageProps} />;
}

export default MyApp;
