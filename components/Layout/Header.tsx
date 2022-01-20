import Link from "next/link";
import styles from "../../styles/scss/layout/Header.module.scss";
import dayjs from "dayjs";
import { FaSearch } from "react-icons/fa";
import React from "react";

const links = [
  "Home",
  "headlines",
  "business",
  "entertainment",
  "politics",
  "science",
  "sports",
  "tech",
];

console.log(dayjs());
console.log(dayjs().format("HH:mm"));

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topNav}>
        <div className={styles.location}>
          <div className="locale">US</div>
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
              <li key={link}>
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
