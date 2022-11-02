import Image from "next/image";

import Chipset from '../../public/chipset.svg';
import ConnectContracts from '../../public/connect-contract.svg';
import styles from '../../styles/connect-contract.module.scss';
import ArrowRight from "../Icons/arrow-right";

function ConnectContract() {
    return (
        <div className={styles.main_area}>
            <h5 className={styles.main_line}>02. Connect</h5>
            <h1 className={styles.main_head}>Connect Contract</h1>
            <h5 className={styles.desc}>Easily Integrate Your Smart Contract With a Frontend. Connect Metamask wallet to your dApp project and read data from your smart contract using easy Web3 API.</h5>
            <div className={styles.pink_bg}>
                <div className={styles.left_side}>
                    <Image src={Chipset} alt="chipset" />
                    <h2>Connect Smart Contract </h2>
                    <p>Easily Integrate Your Smart Contract With a Frontend. Connect Metamask wallet to your dApp project and read data from your smart contract using easy Web3 API.</p>
                    <button className={styles.try_button}>Try for Free <ArrowRight /></button>
                </div>
                <div className={styles.right_side}>
                    <Image src={ConnectContracts} alt="ConnectContracts" />
                </div>
            </div>
        </div>
    )
}
export default ConnectContract;