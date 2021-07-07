import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li className={`${styles.item} ${styles.itemDecoration}`}>
            <NavLink
              exact
              to="/"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Movie search
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
