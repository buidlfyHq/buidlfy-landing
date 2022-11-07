import React from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import LogoIcon from "../../public/logo.svg";
import styles from "../../styles/navbar.module.scss";

function NavBar() {
  const router = useRouter();
  let path = router.pathname;

  return (
    <header className={styles.navbar}>
      <div className={`${styles.inner_nav} px-5 py-2`}>
        <a href="https://buidlfy.com" className={styles.logo}>
          <Image src={LogoIcon} alt="Logo" height={60} width={124} />
        </a>
        <div className={styles.center_nav}>
          <a>About us</a>
          <a>
            Templates<span>New</span>
          </a>
          <Link href="/for-designers">
            <a className={`${path === "/for-designers" ? "grad_nav_tab" : ""}`}>
              For Designers
            </a>
          </Link>
          <a>For Developers</a>
        </div>
        <div className={styles.right_nav}>
          <a className={styles.learn_tag}>Learn More</a>
          <button
            className={`${styles.pre_reg_button} mt-4`}
            onClick={() =>
              window.open("https://bit.ly/buidlfyjoinwaitlist", "_blank")
            }
          >
            Try for Free
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
