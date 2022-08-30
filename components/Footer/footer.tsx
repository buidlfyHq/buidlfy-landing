
// imported styles and assets
import styles from "../../styles/footer.module.scss";
import Image from "next/image";

const socialData = [
    { icon: 'discord-footer-icn.svg', link: '' },
    { icon: 'twitter-brands.svg', link: "" }
]

function Footer() {
    return (
        <footer className={`${styles.footer_outer} pt-10 pb-5`}>
            <h2 className={styles.footer_heading}>Buidlfy</h2>
            <p className={styles.footer_text}>Buidlfy is a simple design tool to design and manage your dApp with #nocode. You can  publish, manage, and organize content at scale right in Buidlyfy&apos;s no-code site builder. It&apos;s so simple and convenient, that all you ever want to do is design & deploy!</p>
            <div className={styles.social_area}>
                {socialData.map((item, index) => (
                    <div className={styles.social_circle} key={index}>
                        <Image src={require(`../../public/social-icons/${item.icon}`)} width={20} height={20} alt="icon" />
                    </div>
                ))}
            </div>
            <h6 className={styles.copyright_text}>© 2022 Buidlfy. All rights reserved.</h6>
        </footer>
    );
}
export default Footer;
