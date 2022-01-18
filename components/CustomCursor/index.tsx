import { MouseEvent, useEffect, useRef } from "react";
import styles from "../../styles/components/Cursor.module.scss";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    console.log(cursorRef);

    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(
        ${mouseX}px,
        ${mouseY}px,
        0
      )`;
    });
  }, []);

  return <div className={styles.cursor} ref={cursorRef}></div>;
};

export default CustomCursor;
