import { Logo } from "../../atoms/logo/logo";
import { NavBar } from "../../molecules/nav-bar/nav-bar";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <header className={styles.footer}>
      <Logo />
      <NavBar entry={false} />
    </header>
  );
}
