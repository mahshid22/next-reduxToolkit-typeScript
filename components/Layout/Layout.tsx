import Footer from "../Footer";
import Header from "../Header";
import Meta from "../Meta/Meta";
import styles from "./Layout.module.css";
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <div className={styles.main}>
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
