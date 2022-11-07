import Image from "next/image";

import Mainapp from "../../public/main-app.svg";
import styles from "../../styles/design-connect-ship.module.scss";
import ArrowRight from "../Icons/arrow-right";

function DesignConnectShip() {
  return (
    <div className={styles.main_area}>
      <h5 className={styles.main_line}>BUILD YOUR DAPP WITH NO UI DEVS</h5>
      <h1 className={styles.main_head}>Design, Connect & Ship</h1>
      <h5 className={styles.desc}>
        Buidlfy is a blazingly fast, totally extendable launcher. It lets you
        complete tasks, calculate, share common links, and much more.
      </h5>
      <button className={styles.gradient_button}>
        Try Buidlfy now
        <ArrowRight />
      </button>
      <Image src={Mainapp} alt="Mainapp" />
    </div>
  );
}
export default DesignConnectShip;
