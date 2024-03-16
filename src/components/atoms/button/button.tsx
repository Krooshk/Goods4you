import styles from "./button.module.css";

export function Button({ text, type }: { text: string; type: string }) {
  return <button className={styles[type]}>{text}</button>;
}
