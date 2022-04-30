import Footer from "../Footer";
import Header from "../Header";
import styles from ".//Layout.module.css";
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
