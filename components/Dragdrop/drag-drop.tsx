
// imported styles and assets
import styles from "../../styles/dragdrop.module.scss";
import Image from "next/image";


const dragDropData = [
    { icon: 'grid.png', heading: (<>Thousand of<br />template</>) },
    { icon: 'click.png', heading: (<>Easy to use<br />software</>) },
    { icon: 'high-resolution.png', heading: (<>High<br />resolution</>) },
    { icon: 'stock-image.png', heading: (<>Thousand<br />stock Image</>) },
    { icon: 'swipe-left.png', heading: (<>Everything in<br />your hand</>) },
    { icon: 'easy-text.png', heading: (<>Easy Text<br />Customization</>) },
    { icon: 'laptop-phone.svg', heading: (<>Responsive<br />support</>) },
    { icon: 'drag-drop.png', heading: (<>Easy Drag &<br /> Drop Features</>) }
];

function Dragdrop() {
    return (
        <section className={`${styles.bottom_blur_bg} pb-20`}>
            <h1 className={styles.mainhead}>Easy Drag & Drop Tools to build your dApps</h1>
            <p className={styles.description}>Our feature that make us different from another ad toll creator</p>
            <div className={styles.dragdrop_area}>
                {dragDropData.map((item, index) => (
                    <div className={styles.feature_tile} key={index}>
                        <div className={styles.icon_area}>
                            <div className={styles.purple_tile}></div>
                            <Image src={require(`../../public/dragdrop-icons/${item.icon}`)} width={50} height={50} alt="icon" />
                        </div>
                        <h3 className={styles.titlehead}>{item.heading}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Dragdrop;