import { useState } from "react";

import type { NextPage } from "next";


import BuidlfyMarketplace from "../components/BuidlfyMarketplace";
import BuildApps from "../components/BuildApps";
import BuildNextGen from "../components/BuildNextGen";
import Footer from "../components/Footer";
import ImaginationHero from "../components/ImaginationHero";
import IntroduceToClients from "../components/IntroduceToClients";
import JoinDiscord from "../components/JoinDiscord";
import Meta from "../components/Meta";
import MobileNav from "../components/MobileNav";
import NavBar from "../components/NavBar";
import SeamlessInstant from "../components/SeamlessInstant";

const Designers: NextPage = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  return (
    <>
      <Meta
        title="Buidlfy - No-code dapp builder"
        desc="Buidlfy is on the mission to provide a No-Code UI builder tool for Web3 Devs to build their landing page, apps, NFT showcase and many more without needing any Front End Knowledge."
        keyword="nocode, dapp, web, app, domain, builder, low code, web3, template, websites, website"
        icon="/favicon.ico"
        metaImage="https://buidlfy.com/metaimage.png"
        url="https://buidlfy.com"
      />{" "}
      <MobileNav showMobileNav={mobileNav} setShowMobileNav={setMobileNav} />
      <NavBar setShowMobileNav={setMobileNav} />
      <ImaginationHero />
      <BuidlfyMarketplace />
      <SeamlessInstant />
      <BuildApps />
      <IntroduceToClients />
      <BuildNextGen />
      <JoinDiscord />
      <Footer />
    </>
  );
};
export default Designers;
