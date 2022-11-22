import styles from "../../styles/wall-of-love-hero.module.scss";

function WallOfLoveHero() {
    return (
        <>
            <div className={styles.wall_bg}>
                <div className={styles.first_ellipse}></div>
                <div className={styles.second_ellipse}></div>
                <div className={styles.third_ellipse}></div>
                <h1>Wall of Love</h1>
                <p>We are loved by startups, marketing agencies, real estate agencies, freelancers, Fortune 500 companies and many more. Our customers testimonials are the best social proof we can get!</p>
            </div>
        </>

    )
}
export default WallOfLoveHero;