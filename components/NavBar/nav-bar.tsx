import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/navbar.module.scss";

function NavBar() {
    const router = useRouter();


    return (
        <div className={styles.navbar}>
            <div className={`${styles.inner_nav} px-5 py-7`}>
                <a href="#home" className={styles.logo}>Buidlfy</a>
                <button className={styles.pre_reg_button}>Pre Register</button>
            </div>
        </div>
    );
}

export default NavBar; 