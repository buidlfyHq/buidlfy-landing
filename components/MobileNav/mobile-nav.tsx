import React, { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import useOnClickOutside from "../../hooks/use-on-click-outside";
import CloseBtn from "../../public/close-button.svg";
import Logo from "../../public/logo.svg";
import styles from "../../styles/navbar.module.scss";

interface IProps {
  showMobileNav: boolean;
  setShowMobileNav: (value: boolean) => void;
}

function MobileNav({ showMobileNav, setShowMobileNav }: IProps) {
  const router = useRouter();
  const squareBoxRef = useRef<HTMLDivElement>(null);
  const [dropDown, setDropDown] = useState(false);
  const clickOutsidehandler = (event: Event) => {
    event.stopPropagation();
    setDropDown(false);
  };
  useOnClickOutside(squareBoxRef, clickOutsidehandler);

  return (
    <div
      className={styles.mobile__menu}
      style={{ display: showMobileNav ? "block" : "none" }}
    >
      <div className={styles.mobile__menu__top}>
        <div className={styles.mobile__logo}>
          <Image src={Logo} alt="logo" />
        </div>
        <div className={styles.close__button}>
          <Image
            src={CloseBtn}
            alt="close-btn"
            onClick={() => {
              setShowMobileNav(false);
            }}
          />
        </div>
      </div>
      <div className={styles.mobile__menu__bottom} ref={squareBoxRef}>
        <ul>
          <li>
            <a
              href="https://github.com/buidlfyHq/buidlfy/wiki"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.learn_tag}
            >
              <span>Docs</span>
            </a>
          </li>
          <li>
            <Link href="https://discord.com/invite/vaHA8EnWND">
              <a>
                <span>Join Community</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/for-designers">
              <a>
                <span>For Designers</span>
              </a>
            </Link>
          </li>
          <li>
            <button className={styles.cta_button}>Try for free</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
