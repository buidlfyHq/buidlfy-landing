import styles from "../../styles/opensource.module.scss";
import GithubLogo from "../Icons/github";

function OpensourceSection() {
  return (
    <div
      className={styles.main_area}
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay="300"
    >
      <h5>Opensource</h5>
      <h1>Buidlfy is Open Source</h1>
      <p>
        There are lots of opportunities for designers, developers, and
        enthusiasts to contribute to the Buidlfy ecosystem.
      </p>
      <button
        className={styles.gradient_button}
        onClick={() =>
          window.open("https://github.com/buidlfyHq/buidlfy/", "_blank")
        }
      >
        <span>Explore Code</span>
        <GithubLogo />
      </button>
    </div>
  );
}
export default OpensourceSection;
