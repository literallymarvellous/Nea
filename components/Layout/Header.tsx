import Link from "next/link";
import styles from "../../styles/scss/layout/Header.module.scss";
import dayjs from "dayjs";
import { FaSearch } from "react-icons/fa";
import React, { RefObject } from "react";
import { useRefContext } from "../../context/state";

const links = [
  "home",
  "headlines",
  "business",
  "entertainment",
  "politics",
  "science",
  "sports",
  "tech",
];

const Header = () => {
  const { onLink, setOnLink } = useRefContext();

  const mouseEnter = () => {
    if (!onLink) {
      setOnLink(true);
    }
  };

  const mouseLeave = () => {
    if (onLink) {
      setOnLink(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.topNav}>
        <div className={styles.location}>
          <div className="locale">World</div>
          <div className="time">{dayjs().format("DD MMM YYYY")}</div>
        </div>
        <div className="logo">NEA</div>
        <div className={styles.profile}>
          <div className="search">
            <FaSearch className="searchicon" />
          </div>
          <div className="login">Login</div>
        </div>
      </div>

      <nav className={styles.bottomNav}>
        <ul>
          {links.map((link) => {
            if (link === "home") {
              return (
                <li key={link}>
                  <Link href="/">{link}</Link>
                </li>
              );
            }
            return (
              <li
                key={link}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <Link href={`/${link}`}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
