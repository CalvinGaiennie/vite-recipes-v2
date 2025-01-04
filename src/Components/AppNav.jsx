import { Link } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">Recipe Display</Link>
      <Link to="/recipeinput">Recipe Input</Link>
    </nav>
  );
}

export default AppNav;
