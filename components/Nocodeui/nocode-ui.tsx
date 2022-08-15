// imported styles and assets
import styles from "../../styles/nocodeui.module.scss";
import Image from "next/image";

const noCodeUIData = [
    { icon: 'decentralised.png', heading: 'Decentralised', description: 'All content on Budilfy is stored on decentralised servers, powered by the Spheron network.' },
    { icon: 'monitor.png', heading: 'No Code UI', description: 'Learn how to go further and faster with valuable customer insights and product performance reports.' },
    { icon: 'keyboard.png', heading: 'Smart Contract Integration', description: 'Offer your customers beautiful invoices that can be generated at any time with just a few clicks.' }
];

function Nocodeui() {
    return (
        <section className={styles.blur_bg}>
            <h5 className={styles.preheading}>WHAT WE HAVE</h5>
            <h1 className={styles.mainhead}>No Code UI Solution</h1>
            <div className={styles.nocode_area}>
                {noCodeUIData.map((item, index) => (
                    <div className={styles.nocode_item} key={index}>
                        <div className={styles.designed_tile}>
                            <Image src={require(`../../public/nocode-icons/${item.icon}`)} alt="icon" />
                        </div>
                        <h3 className={styles.titlehead}>{item.heading}</h3>
                        <p className={styles.description}>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Nocodeui;