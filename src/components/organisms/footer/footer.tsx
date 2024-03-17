import { Logo } from "../../atoms/logo/logo";
import { NavBar } from "../../molecules/nav-bar/nav-bar";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <NavBar entry={false} />
    </footer>
  );
}
