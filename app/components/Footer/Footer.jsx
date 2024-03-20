'use client'
import { usePathname } from "next/navigation";

import Styles from "./Footer.module.css";

import Link from 'next/link';



export const Footer = () => {

  const pathname = usePathname();


  return (
    <footer className={Styles["footer"]}>
      <Link href="/"
        className={Styles['logo']}
        style={{ pointerEvents: pathname === "/" ? "none" : "auto" }}
        aria-disabled={pathname === "/"}
        tabIndex={pathname === "/" ? -1 : undefined}
      >
        <span className={Styles["logo-name"]}>pindie</span>
        <span className={Styles["logo-copy"]}>, XXI век</span>
      </Link>
      <ul className={Styles["social-list"]}>
        <li className={Styles["social-list__item"]}>
          <a href="" className={Styles["social-list__link"]}>
            YT
          </a>
        </li>
        <li className={Styles["social-list__item"]}>
          <a href="" className={Styles["social-list__link"]}>
            ВК
          </a>
        </li>
        <li className={Styles["social-list__item"]}>
          <a href="" className={Styles["social-list__link"]}>
            TG
          </a>
        </li>
      </ul>
    </footer >
  );
};
