import Image from "next/image";

import Avatar1 from "../../public/client-avatar/1.svg";
import Avatar2 from "../../public/client-avatar/2.svg";
import Avatar3 from "../../public/client-avatar/3.svg";
import Avatar4 from "../../public/client-avatar/4.svg";
import Avatar5 from "../../public/client-avatar/5.svg";
import Avatar6 from "../../public/client-avatar/6.svg";
import styles from "../../styles/introduce-to-clients.module.scss";

function IntroduceToClients() {
  return (
    <div
      className={styles.main_area}
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay="300"
    >
      <div className={styles.inner_layer}>
        <div className={styles.left_area}>
          <Image src={Avatar1} alt="Avatar1" width={80} height={80} />
          <Image src={Avatar2} alt="Avatar2" width={50} height={50} />
          <Image src={Avatar3} alt="Avatar3" width={80} height={80} />
        </div>
        <div className={styles.center_area}>
          <h1>A better way to introduce yourself to new clients</h1>
          <p>
            Reach millions of designers with your designs right now. Publish
            your design to build your brand and get discovered by millions of
            new clients.
          </p>
          <div className={styles.button_area}>
            <button
              className={styles.discover_button}
              onClick={() => window.open("https://app.buidlfy.com", "_blank")}
            >
              Discover
            </button>
            <button
              className={styles.learn_more}
              onClick={() =>
                window.open("https://bit.ly/buidlfy-discord", "_blank")
              }
            >
              Join Community
            </button>
          </div>
        </div>
        <div className={styles.right_area}>
          <Image src={Avatar4} alt="Avatar4" width={80} height={80} />
          <Image src={Avatar5} alt="Avatar5" width={50} height={50} />
          <Image src={Avatar6} alt="Avatar6" width={80} height={80} />
        </div>
      </div>
    </div>
  );
}
export default IntroduceToClients;
