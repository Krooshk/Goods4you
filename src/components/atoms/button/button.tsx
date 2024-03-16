import styles from "./button.module.css";

export function Button({
  text,
  type,
  handleClick,
}: {
  text: string;
  type: string;
  handleClick: () => void;
}) {
  return (
    <button className={styles[type]} onClick={handleClick}>
      {text}
    </button>
  );
}
