import React, { useEffect, useRef } from "react";
import styles from "../../styles/scss/components/Cursor.module.scss";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const mouseMove = (e: globalThis.MouseEvent) => {
      const { clientX, clientY } = e;

      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;

      const domRect = cursorRef.current.getBoundingClientRect();

      if (
        domRect.top <= 0 ||
        domRect.left <= 0 ||
        domRect.right >= document.documentElement.clientWidth ||
        domRect.bottom >= document.documentElement.clientHeight
      ) {
        cursorRef.current.style.visibility = "hidden";
      } else {
        cursorRef.current.style.visibility = "visible";
      }
      cursorRef.current.style.transform = `translate3d(
        ${mouseX}px,
        ${mouseY}px,
        0
      )`;
    };
    if (cursorRef) {
      document.addEventListener("mousemove", mouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return <div className={styles.cursor} ref={cursorRef}></div>;
};

export default CustomCursor;
