// imported modules
import type { NextPage } from 'next'

// imported styles and assets
import styles from "../styles/landing.module.scss";
import SoftwareImage from '../public/software.png';
import Image from "next/image";



const Home: NextPage = () => {

  return (
    <section className={styles.preregister_bg}>
      <div className={styles.inner_con}>
        <div className={styles.left_area}></div>
        <div className={styles.right_area}>
          <Image src={SoftwareImage} alt="software" />
        </div>
      </div>
    </section>
  )
}

export default Home
