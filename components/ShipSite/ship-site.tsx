import Image from "next/image";

import Template from "../../public/Templates.svg";
import Tickmark from "../../public/Tickmark.svg";
import styles from "../../styles/ship-site.module.scss";
import ArrowRight from "../Icons/arrow-right";

function ShipSite() {
  return (
    <div className={styles.main_area}>
      <h5 className={styles.main_line}>03. Ship</h5>
      <h1 className={styles.main_head}>Ship site to your users</h1>
      <h5 className={styles.desc}>
        Own & Sell your designs and reach millions of buyers or promote other
        artists on the Buidlfy’s marketplace.
      </h5>
      <div className={styles.blue_bg}>
        <div className={styles.left_side}>
          <Image src={Tickmark} alt="Tickmark" />
          <h2>Ship sites to your users</h2>
          <p>
            Own & Sell your designs and reach millions of buyers or promote
            other artists on the Buidlfy’s marketplace.{" "}
          </p>
          <p>
            What your team needs to get done, we offer an fabulously rich
            builder to do it swiftly, and at ease with your whole organization
            in harmony.
          </p>
          <button className={styles.try_button}>
            Try for Free <ArrowRight />
          </button>
        </div>
        <div className={styles.right_side}>
          <Image src={Template} alt="Template" />
        </div>
      </div>
    </div>
  );
}
export default ShipSite;
