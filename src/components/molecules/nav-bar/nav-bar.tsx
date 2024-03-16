import { NavLink } from "../../atoms/nav-link/nav-link";
import styles from "./navbar.module.css";

export function NavBar() {
  return (
    <ul className={styles.navbar}>
      <NavLink name="Catalog" />
      <NavLink name="About us" />
      <NavLink name="Product selection" />
      <NavLink name="Our team" />
      <NavLink name="FAQ" />
      <NavLink name="For staff" />
    </ul>
  );
}
