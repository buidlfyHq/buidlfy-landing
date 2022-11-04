import styles from "../../styles/imagination-hero.module.scss";
import ArrowRight from "../Icons/arrow-right";

function ImaginationHero() {
    return (
        <>
            <div className={styles.main_area}>
                <h5 className={styles.main_line}>Let’s Paint the future of the web</h5>
                <h1 className={styles.main_head}>Let your imagination flow</h1>
                <h5 className={styles.desc}>Paint the future of the web in the colours of your imagination and creativity, and thereby co-create the web&apos;s future with us.</h5>
                <button className={styles.gradient_button}>Try Buidlfy now
                    <ArrowRight />
                </button>
            </div>
        </>
    )
}
export default ImaginationHero;