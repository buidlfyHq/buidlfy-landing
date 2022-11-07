// imported styles and assets
import Image from "next/image";

import LogoIcon from "../../public/logo.svg";
import styles from "../../styles/footer.module.scss";

const socialData = [
  { icon: "twitter.svg", link: "https://bit.ly/buidlfytwitter" },
  { icon: "discord.svg", link: "https://bit.ly/buidlfydiscord" },
  { icon: "instagram.svg", link: "https://bit.ly/buidlfytwitter" },
];

function Footer() {
  return (
    <footer className={`${styles.footer_outer} pt-10 pb-5`}>
      <div className={styles.main_area}>
        <div className={styles.left_area}>
          <a href="https://buidlfy.com" className={styles.logo}>
            <Image src={LogoIcon} alt="Logo" height={60} width={120} />
          </a>
          <p className={styles.subscribe_text}>
            Subscribe to our newsletter to get updated!
          </p>
          <div className={styles.text_containter}>
            <input placeholder="Enter email" />
            <button className={styles.subscribe_button}>Subscribe</button>
          </div>
          <div className={styles.social_area}>
            {socialData.map((item, index) => (
              <div
                className={styles.social_circle}
                key={index}
                onClick={() => window.open(item.link, "_blank")}
              >
                <Image
                  src={require(`../../public/social/${item.icon}`)}
                  width={17}
                  height={17}
                  alt="icon"
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right_area}>
          <div className={styles.footer_list}>
            <h1>Pages</h1>
            <p>For Designers</p>
            <p>For Developers</p>
            <p>Marketplace</p>
          </div>
          <div className={styles.footer_list}>
            <h1>Company</h1>
            <p>Community</p>
            <p>Careers</p>
            <p>Newsletter</p>
          </div>
          <div className={styles.footer_list}>
            <h1>Help</h1>
            <p>FAQs</p>
            <p>Docs</p>
            <p>Learn</p>
          </div>
        </div>
      </div>

      <h6 className={styles.copyright_text}>
        © 2022 Buidlfy. All rights reserved.
      </h6>
    </footer>
  );
}
export default Footer;
