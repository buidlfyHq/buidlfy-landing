
// imported styles and assets
import styles from "../../styles/landing.module.scss";

function EarlyAccess() {
    return (
        <section className={styles.bottom_bg}>
            <h4 className={styles.preheading}>Get Early Access and Lots of Benefits!</h4>
            <h1 className={styles.mainhead}>Get whitelisted for the early access.</h1>
            <button className={styles.pre_reg_button}>
                Pre register
            </button>
        </section>
    )
}

export default EarlyAccess;