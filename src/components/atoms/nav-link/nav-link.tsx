import styles from "./navlink.module.css";

export function NavLink({ name }: { name: string }) {
  return <li className={styles.navlink}>{name}</li>;
}
