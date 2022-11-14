import { useState } from "react";

import type { NextPage } from "next";

import BuildNextGen from "../components/BuildNextGen";
import ConnectContract from "../components/ConnectContract";
import DesignConnectShip from "../components/DesignConnectShip";
import Footer from "../components/Footer";
import ImaginationFlow from "../components/ImaginationFlow";
import JoinDiscord from "../components/JoinDiscord";
import Meta from "../components/Meta";
import MobileNav from "../components/MobileNav";
import NavBar from "../components/NavBar";
import ShipSite from "../components/ShipSite";

const Home: NextPage = () => {
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
      <DesignConnectShip />
      <ImaginationFlow />
      <ConnectContract />
      <ShipSite />
      <BuildNextGen />
      <JoinDiscord />
      <Footer />
    </>
  );
};
export default Home;
