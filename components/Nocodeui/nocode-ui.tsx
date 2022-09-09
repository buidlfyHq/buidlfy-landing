// imported styles and assets
import Image from "next/image";

import styles from "../../styles/nocodeui.module.scss";

const noCodeUIData = [
  {
    icon: "decentralised.png",
    heading: "Decentralised",
    description:
      "All content on Budilfy is stored on decentralised servers, powered by the Spheron network.",
  },
  {
    icon: "monitor.png",
    heading: "No Code dApp UI Builder",
    description:
      "Ship your app much faster without the need for Front End Developers.",
  },
  {
    icon: "keyboard.png",
    heading: "Smart Contract Integration",
    description:
      "Bind your ABIs directly to Buidlfy elements seamlessly with click and bind functionality.",
  },
];

function Nocodeui() {
  return (
    <section className={`${styles.blur_bg} py-28`}>
      <h5 className={styles.preheading}>WHAT WE HAVE</h5>
      <h1 className={styles.mainhead}>No Code UI Solution</h1>
      <div className={styles.nocode_area}>
        {noCodeUIData.map((item, index) => (
          <div className={styles.nocode_item} key={index}>
            <div className={styles.designed_tile}>
              <Image
                src={require(`../../public/nocode-icons/${item.icon}`)}
                alt="icon"
              />
            </div>
            <h3 className={styles.titlehead}>{item.heading}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Nocodeui;
