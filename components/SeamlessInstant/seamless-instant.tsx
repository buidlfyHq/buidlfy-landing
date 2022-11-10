import Image from "next/image";

import SeamlessInstantImage from "../../public/seamless-instant.svg";
import styles from "../../styles/seamless-instant.module.scss";

function SeamlessInstant() {
  return (
    <div
      className={styles.main_area}
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay="300"
    >
      <h5 className={styles.main_line}>Ready to Use</h5>
      <h1 className={styles.main_head}>Designed to be seamless and instant.</h1>
      <h5 className={styles.desc}>
        Start from scratch or select over 100 stunning templates to create a
        stunning wesite in seconds.
      </h5>
      <div className={styles.pink_bg}>
        <Image src={SeamlessInstantImage} alt="SeamlessInstant" />
      </div>
    </div>
  );
}
export default SeamlessInstant;
