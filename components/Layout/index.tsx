import Header from "./Header";
import styles from "../../styles/layout/Layout.module.scss";
import CustomCursor from "../CustomCursor";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
