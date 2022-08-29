// imported modules
import type { NextPage } from 'next'
import React, { useEffect, useState } from "react";

// imported styles and assets
import styles from "../styles/landing.module.scss";
import SoftwareImage from '../public/software.png';
import Checkmark from "../public/icons/checkmark.png";
import DiscordIcon from "../public/icons/discord-icon.png";
import ScrollIcon from "../public/icons/scroll-icon.png";
import Image from "next/image";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Nocodeui from '../components/Nocodeui';
import Dragdrop from '../components/Dragdrop';
import EarlyAccess from '../components/EarlyAccess';
import Meta from '../components/Meta';

// import hooks
import useWindowDimensions from "../hooks/use-window-dimensions";


const Home: NextPage = () => {

  const { width } = useWindowDimensions();
  const [boxWidth, setBoxWidth] = useState<number>(0);
  useEffect(() => {
    setBoxWidth(width!);
  }, [width]);
  return (
    <>
      <Meta
        title="Buidlfy"
        desc="Buidlfy"
        keyword=""
        icon="/favicon.ico"
        metaImage=""
        url=""
      />{" "}
      <NavBar />
      <section className={`${styles.preregister_bg}  pt-20`}>
        <div className={styles.inner_con}>
          <div className={styles.left_area}>
            <h4 className={styles.prehead}>Coming soon</h4>
            <h1 className={styles.mainhead}>No Code UI Solution to<br /> build <span>Next Gen dApps</span></h1>
            <div className={styles.checkpoints}>
              <div className={styles.checkpoint}>
                <Image src={Checkmark} alt="check" width={26} height={27} />
                <h6>Decentralised</h6>
              </div>
              <div className={styles.checkpoint}>
                <Image src={Checkmark} alt="check" width={26} height={27} />
                <h6>Web3 UI Features</h6>
              </div>
              <div className={styles.checkpoint}>
                <Image src={Checkmark} alt="check" width={26} height={27} />
                <h6>Smart Contract Integration</h6>
              </div>
            </div>
            <div className={styles.tagline}>
              Pre-register yourself to get early access benefits!
            </div>
            <button className={styles.pre_reg_button}>Pre Register</button>
            <div className={styles.discord_area}>
              <Image src={DiscordIcon} width={boxWidth !== null && boxWidth < 767 ? 60 : 30} height={30} alt="discord-icon" />
              <div className={styles.discord_text}>Join our <span>Discord Channel</span> to learn more</div>
            </div>
            {/* <div className={styles.scrollarea}>
              <Image src={ScrollIcon} width={24} height={24} alt="scroll-icon" />
              <div className={styles.scroll_text}>Scroll to explore</div>
            </div> */}
          </div>
          <div className={styles.right_area}>
            <Image src={SoftwareImage} alt="software" />
          </div>
        </div>
      </section>
      <Nocodeui />
      <Dragdrop />
      <EarlyAccess />
      <Footer />
    </>
  )
}

export default Home
