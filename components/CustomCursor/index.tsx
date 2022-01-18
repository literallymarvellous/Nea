import { useEffect, useRef } from "react";
import styles from "../../styles/components/Cursor.module.scss";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {});

  return <div className={styles.cursor}></div>;
};

export default CustomCursor;
