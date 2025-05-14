import { Link } from "@tanstack/react-router";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Lumen
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>
            Фільми
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
