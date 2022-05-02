import Footer from "../Footer";
import Header from "../Header";
import Meta from "../Meta/Meta";
import styles from ".//Layout.module.css";
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
