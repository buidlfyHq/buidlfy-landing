import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import LogoIcon from "../../public/logo.svg";
import styles from "../../styles/navbar.module.scss";

function NavBar() {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <div className={`${styles.inner_nav} px-5 py-8`}>
        <a href="https://buidlfy.com" className={styles.logo}>
          <Image src={LogoIcon} alt="Logo" height={60} width={124} />
        </a>
        <button
          className={styles.pre_reg_button}
          onClick={() =>
            window.open("https://bit.ly/buidlfyjoinwaitlist", "_blank")
          }
        >
          Join Waitlist
        </button>
      </div>
    </div>
  );
}

export default NavBar;
