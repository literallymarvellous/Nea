import Header from "./Header";
import styles from "../../styles/scss/layout/Layout.module.scss";
import CustomCursor from "../CustomCursor";
import ScrollBar from "../CustomScrollBar";

interface LayoutProps {
  children: React.ReactNode;
}

//TODO: add custom layout page

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className={styles.main}>{children}</main>
      <ScrollBar />
    </>
  );
};

export default Layout;
