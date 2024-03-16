import styles from "./paragraph.module.css";

export function Paragraph({ text }: { text: string }) {
  return <p className={styles.introduce}>{text}</p>;
}
