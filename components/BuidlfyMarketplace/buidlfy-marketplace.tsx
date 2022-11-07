import Image from "next/image";

import GreyChipset from "../../public/grey-chipset.svg";
import GreySpark from "../../public/grey-spark.svg";
import BuidlfyMarketPlace from "../../public/marketplace-template.svg";
import BuidlfyMarketPlace2 from "../../public/marketplace-template2.svg";
import MarketPlaceWallet from "../../public/marketplace-wallet.svg";
import styles from "../../styles/buidlfy-marketplace.module.scss";

function BuidlfyMarketplace() {
  return (
    <div className={styles.main_area}>
      <h5 className={styles.main_line}>Buildfy Marketplace</h5>
      <h1 className={styles.main_head}>Earn with Buidlfy’s Marketplace</h1>
      <h5 className={styles.desc}>
        Own and sell your creations to millions of buyers, or to promote other
        artists on the Buidlfy marketplace.
      </h5>
      <div className={styles.blue_bg}>
        <Image src={BuidlfyMarketPlace} alt="BuidlfyMarketPlace" />
      </div>
      <div className={styles.bottom_area}>
        <div className={styles.deploy_box}>
          <div className={styles.inner_layer}>
            <Image src={GreySpark} alt="GreySpark" />
            <h1>Connect your wallet easily</h1>
            <p>
              You can connect your wallet easily to buy and sell designs easily.{" "}
            </p>
          </div>

          <div className={styles.img_box}>
            <Image src={MarketPlaceWallet} alt="MarketPlaceWallet" />
          </div>
        </div>
        <div className={styles.decentralise_box}>
          <div className={styles.inner_layer}>
            <Image src={GreyChipset} alt="GreyChipset" />

            <h1>Decentralised Storage</h1>
            <p>
              Buildfy lets you easily publish your site and assets to leading
              Decentralised Storage Networks. It will work across multiple DSNs
              without the need to use multiple tokens.
            </p>
          </div>
          <div className={styles.img_box}>
            <Image src={BuidlfyMarketPlace2} alt="BuidlfyMarketPlace2" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BuidlfyMarketplace;
