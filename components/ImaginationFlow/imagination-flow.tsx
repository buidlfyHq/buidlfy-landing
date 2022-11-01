import Image from "next/image";

import Flow from '../../public/Flow.svg';
import Leaf from '../../public/leaf.svg';
import styles from "../../styles/imagination-flow.module.scss";

function ImaginationFlow() {
    return (
        <div className={styles.main_flow_area}>
            <div className={styles.inner_flow_area}>
                <h5 className={styles.main_line}>01. Design</h5>
                <h1 className={styles.main_head}>Let your imagination flow</h1>
                <h5 className={styles.desc}>Paint the future of the web in the colours of your imagination and creativity, and thereby co-create the web&apos;s future with us.</h5>
                <div className={styles.purple_bg}>
                    <div className={styles.left_side}>
                        <Image src={Flow} alt="Flow" />
                    </div>
                    <div className={styles.right_side}>
                        <Image src={Leaf} alt="leaf" />
                        <h2>Let’s build the future of the web</h2>
                        <p>With Buidlfy, you can create amazing web3 sites easily and effortlessly.</p>
                        <p>Putting magic in the hands of our users by providing them with simple drag-and-drop tools.</p>
                        <p>Let’s build your first web3 app in no time. Try Buidlfy now:</p>
                    </div>
                </div>
            </div>
            <div className={styles.feature_area}>
                <div className={styles.straight_grids}>
                    <div className={styles.indi_feature}>
                        <h3>Power is in your hands</h3>
                        <p>Description</p>
                    </div>
                    <div className={styles.indi_feature}>
                        <h3>Power is in your hands</h3>
                        <p>Description</p>
                    </div>
                </div>
                <div className={styles.straight_grids}>
                    <div className={styles.indi_feature}>
                        <h3>Power is in your hands</h3>
                        <p>Description</p>
                    </div>
                    <div className={styles.indi_feature}>
                        <h3>Power is in your hands</h3>
                        <p>Description</p>
                    </div>
                </div>
                <div className={styles.straight_grids}>
                    <div className={styles.indi_feature}>
                        <h3>Power is in your hands</h3>
                        <p>Description</p>
                    </div>
                    <div className={styles.indi_feature}>
                        <h3>Power is in your hands</h3>
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ImaginationFlow;