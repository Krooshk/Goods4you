import { Question } from "../../atoms/queston/question";
import styles from "./faq.module.css";
import { useState } from "react";

export function FAQ() {
  const [currentQuestion, setCurrentQuestion] = useState("");

  function handleClick(question: string) {
    if (question === currentQuestion) {
      setCurrentQuestion("");
    } else {
      setCurrentQuestion(question);
    }
  }

  return (
    <div className={styles.faq}>
      <h2>FAQ</h2>
      <div className={styles.border}>
        <Question
          answer="Long answer to the first question"
          question="Question 1"
          isActive={currentQuestion === "Question 1"}
          handleClick={handleClick}
        />
        <Question
          answer="Long answer to the second question"
          question="Question 2"
          isActive={currentQuestion === "Question 2"}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}
