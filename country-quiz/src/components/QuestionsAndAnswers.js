import { Question } from "./Question";
import classes from "./QuestionsAndAnswers.module.css";
import ImageUndrawAdventure from "../pictures/undraw_adventure_4hum_1.svg";
import { Answer } from "./Answer";
import { useState } from "react";

export const QuestionsAndAnswers = ({ questionToRead }) => {
  const [chosen, setChosen] = useState(null); // tu trzymamy wybraną odpowiedź

  if (!questionToRead) {
    return (
      <div className={classes.questionsandanswers}>
        <img className={classes.image_undraw} src={ImageUndrawAdventure} alt="" />
        <div>Ładowanie…</div>
      </div>
    );
  }

  // 3 błędne + 1 poprawna
  const allAnswers = [
    ...questionToRead.incorrect_answers,
    questionToRead.correct_answer,
  ];

  // proste tasowanie
  // const shuffled = allAnswers.sort(() => Math.random() - 0.5);
  const labels = ["A", "B", "C", "D"];

  const handleSelect = (answer) => {
    setChosen(answer);
  };

  const isCorrect = chosen && chosen === questionToRead.correct_answer;

  return (
    <div className={classes.questionsandanswers}>
      <img className={classes.image_undraw} src={ImageUndrawAdventure} alt="" />

      <Question questionToRead={questionToRead} />


        <Answer
          key={i}
          optionAbcd={labels[i]}
          answer={opt}
          onSelect={handleSelect}
          selected={chosen === opt}
        />


      /* prosty feedback po wyborze */
      {chosen && (
        <p style={{ marginTop: 12 }}>
          Wybrałaś: <strong>{chosen}</strong>{" "}
          {isCorrect ? "✅ Dobrze!" : "❌ Źle – spróbuj dalej"}
        </p>
      )}
    </div>
  );
};
