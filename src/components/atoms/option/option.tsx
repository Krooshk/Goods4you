import styles from "./option.module.css";

export function Option({
  name,
  value,
  id,
  checked,
  handleChange,
}: {
  name: string;
  value: string;
  id: string;
  checked: boolean;
  handleChange: (id: string) => void;
}) {
  return (
    <div className={styles.option}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={() => handleChange(id)}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
}
