import Link from "next/link";
import styles from "../../styles/scss/layout/Header.module.scss";
import dayjs from "dayjs";
import { FaSearch } from "react-icons/fa";
import React, { RefObject } from "react";
import { useRefContext } from "../../context/state";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { onLink, setOnLink, sections } = useRefContext();
  const { data: session } = useSession();

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

  // todo: remove links in header
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
          {session ? (
            <div className="signIn">
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          ) : (
            <div>
              <button onClick={() => signIn()}>Sign in</button>
            </div>
          )}
        </div>
      </div>

      <nav className={styles.bottomNav}>
        <ul>
          {sections.map((section) => {
            if (section === "home") {
              return (
                <li
                  key={section}
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
                >
                  <Link href="/">{section}</Link>
                </li>
              );
            }
            return (
              <li
                key={section}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <Link href={`/${section}`}>{section}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
