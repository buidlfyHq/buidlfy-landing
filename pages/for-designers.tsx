import type { NextPage } from "next";

import BuidlfyMarketplace from "../components/BuidlfyMarketplace";
import BuildNextGen from "../components/BuildNextGen";
import Footer from "../components/Footer";
import ImaginationHero from "../components/ImaginationHero";
import JoinDiscord from "../components/JoinDiscord";
import Meta from "../components/Meta";
import NavBar from "../components/NavBar";
import SeamlessInstant from "../components/SeamlessInstant";

const Designers: NextPage = () => {
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
            <NavBar />
            <ImaginationHero />
            <BuidlfyMarketplace />
            <SeamlessInstant />
            <BuildNextGen />
            <JoinDiscord />
            <Footer />
        </>)
};
export default Designers;
