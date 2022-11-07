import Image from "next/image";

import SeamlessInstantImage from "../../public/SeamlessInstant.svg";
import styles from "../../styles/seamless-instant.module.scss";

function SeamlessInstant() {
  return (
    <div className={styles.main_area}>
      <h5 className={styles.main_line}>Ready to Use</h5>
      <h1 className={styles.main_head}>Designed to be seamless and instant.</h1>
      <h5 className={styles.desc}>
        Start from scratch or select over 100 stunning templates to create a
        stunning wesite and create a stunning website in sectonds.
      </h5>
      <div className={styles.pink_bg}>
        <Image src={SeamlessInstantImage} alt="SeamlessInstant" />
      </div>
    </div>
  );
}
export default SeamlessInstant;
