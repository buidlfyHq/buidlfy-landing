import Image from "next/image";

import Template from "../../public/templates-new.svg";
import Tickmark from "../../public/tick-mark.svg";
import styles from "../../styles/ship-site.module.scss";
import ArrowRight from "../Icons/arrow-right";

function ShipSite() {
  return (
    <div
      className={styles.main_area}
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay="300"
    >
      <div className={styles.inner_layer}>
        <h5 className={styles.main_line}>03. Ship</h5>
        <h1 className={styles.main_head}>Ship site to your users</h1>
        <h5 className={styles.desc}>
          Ship your site to your users with a single click and scale your dApp
          infinitely powered by Spheron Network.
        </h5>
        <div className={styles.blue_bg}>
          <div className={`${styles.left_side} hidden lg:block`}>
            <Image src={Tickmark} alt="Tickmark" />
            <h2>Ship sites and Scale</h2>
            <p>
              Build you dapp using the no-code tool and ship it to your users
              with a single click.
            </p>
            <p>
              Buidlfy and Spheron works together to deliver the best performance
              for your end users, while using cutting-edge serverless technology
              to help you build your next dapp with ease.
            </p>
            <button
              className={styles.try_button}
              onClick={() => window.open("https://app.buidlfy.com", "_blank")}
            >
              Try for Free <ArrowRight />
            </button>
          </div>
          <div className={styles.right_side}>
            <Image src={Template} alt="Template" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShipSite;
