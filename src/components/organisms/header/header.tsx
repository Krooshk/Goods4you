import { Logo } from "../../atoms/logo/logo";
import { NavBar } from "../../molecules/nav-bar/nav-bar";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <NavBar entry={true} />
    </header>
  );
}
