import Image from "next/image";

import Click from "../../public/build-apps/click.svg";
import styles from "../../styles/build-apps.module.scss";

function BuildApps() {
  const featureList = [
    {
      heading: "Power is in your hands",
      description:
        "Giving users the power to design quickly and effectively. You can add any design element just by clicking on it.",
    },
    {
      heading: "Color Styles",
      description:
        "Fill in the colours of your imagination in your designs with our simple tools.",
    },
    {
      heading: "Add Media & Files",
      description: "Add your files and media to make beautiful web pages.",
    },
    {
      heading: "Beautiful Text Styles",
      description:
        "Choose an attractive typeface that will leave a lasting impression on the hearts of readers.",
    },
    {
      heading: "Design Elements",
      description:
        "Create web pages quickly with your pre-made UI design elements such as buttons, inputs, forms, and so on...",
    },
    {
      heading: "Ready to use templates",
      description:
        "You can always choose the best template for your needs from the dozens of available styles. ",
    },
  ];
  return (
    <div className={styles.main_area}>
      <h5 className={styles.main_line}>Best Tool</h5>
      <h1 className={styles.main_head}>
        The most user friendly tools to build your dApp
      </h1>
      <div className={styles.feature_list}>
        {featureList.map((item, index) => (
          <div className={styles.individual_feature} key={index}>
            <Image src={Click} alt="Click" />
            <h1>{item.heading}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BuildApps;
