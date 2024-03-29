import Image from "next/image";

import DiscordIcon from "../../public/discord-icon.svg";
import styles from "../../styles/join-discord.module.scss";

function JoinDiscord() {
  return (
    <div
      className={styles.main_area}
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay="300"
    >
      <div className={styles.gradient_box}>
        <Image src={DiscordIcon} alt="discordicon" />
        <h1>Join us on Discord </h1>
        <p>
          We have a dedicated Discord channel to better help & support our
          users. Join us in our Discord channel to keep up with the newest news.
        </p>
        <button
          className={styles.join_button}
          onClick={() =>
            window.open("https://bit.ly/buidlfy-discord", "_blank")
          }
        >
          Join Discord
        </button>
      </div>
    </div>
  );
}
export default JoinDiscord;
