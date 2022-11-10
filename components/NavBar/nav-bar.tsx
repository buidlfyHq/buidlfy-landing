import React from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import LogoIcon from "../../public/logo.svg";
import styles from "../../styles/navbar.module.scss";

function NavBar() {
  const router = useRouter();
  let path = router.pathname;
  console.log(path);

  return (
    <header className={styles.navbar}>
      <div className={`${styles.inner_nav} px-5 py-2`}>
        <Link href="/">
          <a className={styles.logo}>
            <Image src={LogoIcon} alt="Logo" height={60} width={124} />
          </a>
        </Link>
        <div className={styles.center_nav}>
          {/* <a>About us</a> */}
          {/* <a>
            Templates<span>New</span>
          </a> */}
          {/* <Link href="/for-designers">
            <a className={`${path === "/for-designers" ? "grad_nav_tab" : ""}`}>
              For Designers
            </a>
          </Link> */}
          {/* <a>For Developers</a> */}
        </div>
        <div className={styles.right_nav}>
          <a
            href="https://bit.ly/buidlfy-discord"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.learn_tag}
          >
            Join Community
          </a>
          {path === "/for-designers" ? (
            <Link href="/">
              <a className={styles.learn_tag}>For Developers</a>
            </Link>
          ) : (
            <Link href="/for-designers">
              <a className={styles.learn_tag}>For Designers</a>
            </Link>
          )}
          <button
            className={`${styles.pre_reg_button} mt-4`}
            onClick={() => window.open("https://app.buidlfy.com", "_blank")}
          >
            Try for Free
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
