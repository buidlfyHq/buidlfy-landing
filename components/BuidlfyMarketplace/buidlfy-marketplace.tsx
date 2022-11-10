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
      <h1 className={styles.main_head}>Earn with Buidlfy&apos;s Marketplace</h1>
      <h5 className={styles.desc}>
        Own and sell your creations on Polygon and earn a passive income. Build
        a community around your creations and earn from your community.
      </h5>
      <div className={styles.blue_bg}>
        <Image src={BuidlfyMarketPlace} alt="BuidlfyMarketPlace" />
      </div>
      <div className={styles.bottom_area}>
        <div
          className={styles.deploy_box}
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <div className={styles.inner_layer}>
            <Image src={GreySpark} alt="GreySpark" />
            <h1>Connect wallet & NFT</h1>
            <p>
              You can attach lot of wallets to mint your creation into a NFT and
              list it on our marketplace.
            </p>
          </div>

          <div className={styles.img_box}>
            <Image src={MarketPlaceWallet} alt="MarketPlaceWallet" />
          </div>
        </div>
        <div
          className={styles.decentralise_box}
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <div className={styles.inner_layer}>
            <Image src={GreyChipset} alt="GreyChipset" />

            <h1>List Template on Marketplace</h1>
            <p>
              Buildfy lets creators easily create website into NFT and sell them
              on Buidlfy Marketplace to earn passive income.
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
