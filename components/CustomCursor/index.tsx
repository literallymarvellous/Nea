import React, { useEffect, useRef } from "react";
import styles from "../../styles/scss/components/Cursor.module.scss";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    console.log(cursorRef);

    const mouseMove = (e: globalThis.MouseEvent) => {
      const { clientX, clientY } = e;

      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;

      cursorRef.current.style.transform = `translate3d(
        ${mouseX}px,
        ${mouseY}px,
        0
      )`;
    };

    document.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return <div className={styles.cursor} ref={cursorRef}></div>;
};

export default CustomCursor;
