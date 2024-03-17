import styles from "./question.module.css";

export function Question({
  answer,
  question,
  isActive,
  handleClick,
}: {
  answer: string;
  question: string;
  isActive: boolean;
  handleClick: (question: string) => void;
}) {
  let classNamePanel = styles.panel;
  if (isActive) {
    classNamePanel += styles.active;
  }

  return (
    <div>
      <button
        onClick={() => handleClick(question)}
        className={styles.accordion}
      >
        {question}
      </button>
      <div className={classNamePanel}>
        <p>{answer}</p>
      </div>
    </div>
  );
}
