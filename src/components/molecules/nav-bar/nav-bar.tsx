import { NavLink } from "../../atoms/nav-link/nav-link";
import styles from "./navbar.module.css";

export function NavBar({ entry }: { entry: boolean }) {
  return (
    <ul className={styles.navbar}>
      <NavLink name="Catalog" />
      <NavLink name="About us" />
      <NavLink name="Product selection" />
      <NavLink name="Our team" />
      <NavLink name="FAQ" />
      {entry && <NavLink name="For staff" />}
    </ul>
  );
}
