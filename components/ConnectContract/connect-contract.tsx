import Image from "next/image";

import ChipsetBlack from "../../public/chipset-black.svg";
import Chipset from "../../public/chipset.svg";
import ConnectContracts from "../../public/connect-contract.svg";
import Deploy from "../../public/deploy-app.svg";
import UploadBlack from "../../public/upload-black.svg";
import styles from "../../styles/connect-contract.module.scss";
import ArrowRight from "../Icons/arrow-right";

function ConnectContract() {
  return (
    <div className={styles.main_area}>
      <h5 className={styles.main_line}>02. Connect</h5>
      <h1 className={styles.main_head}>Connect Contract</h1>
      <h5 className={styles.desc}>
        Easily Integrate Your Smart Contract With a Frontend. Connect Metamask
        wallet to your dApp project and read data from your smart contract using
        easy Web3 API.
      </h5>
      <div className={styles.pink_bg}>
        <div className={styles.left_side}>
          <Image src={Chipset} alt="chipset" />
          <h2>Connect Smart Contract </h2>
          <p>
            Easily Integrate Your Smart Contract With a Frontend. Connect
            Metamask wallet to your dApp project and read data from your smart
            contract using easy Web3 API.
          </p>
          <button className={styles.try_button}>
            Try for Free <ArrowRight />
          </button>
        </div>
        <div className={styles.right_side}>
          <Image src={ConnectContracts} alt="ConnectContracts" />
        </div>
      </div>

      <div className={styles.bottom_area}>
        <div className={styles.deploy_box}>
          <div className={styles.left_area}>
            <Image src={UploadBlack} alt="UploadBlack" />
            <h1>Deploy your site easily</h1>
            <p>
              Deploy Your Full Stack App to the Decentralized cloud in just few
              seconds.{" "}
            </p>
          </div>
          <div className={styles.right_area}>
            <Image src={Deploy} alt="Deploy" />
          </div>
        </div>
        <div className={styles.decentralise_box}>
          <Image src={ChipsetBlack} alt="ChipsetBlack" />

          <h1>Decentralised Storage</h1>
          <p>
            Buildfy lets you easily publish your site and assets to leading
            Decentralised Storage Networks. It will work across multiple DSNs
            without the need to use multiple tokens.
          </p>
        </div>
      </div>
    </div>
  );
}
export default ConnectContract;
