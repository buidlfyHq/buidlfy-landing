import styles from "../../styles/build-next-gen.module.scss";
import ArrowRight from "../Icons/arrow-right";

function BuildNextGen() {
  return (
    <div className={styles.main_area}>
      <h1>Ready to build your next gen app?</h1>
      <p>
        Buidlfy is incredible to build your next generation app - no code - no
        boundaries.
      </p>
      <button className={styles.gradient_button}>
        Try Buidlfy now
        <ArrowRight />
      </button>
    </div>
  );
}
export default BuildNextGen;
