import { useEffect } from "react";

import AOS from "aos";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import "../styles/globals.scss";
import * as gtag from "../lib/gtag";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 1000);
  }, []);

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
