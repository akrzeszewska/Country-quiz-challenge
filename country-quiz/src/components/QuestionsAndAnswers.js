import { useState } from "react";
import { Question } from "./Question";
import classes from "./QuestionsAndAnswers.module.css";
import ImageUndrawAdventure from "../pictures/undraw_adventure_4hum_1.svg";
import { Answer } from "./Answer";

export const QuestionsAndAnswers = ({ questionToRead }) => {
  const [chosen, setChosen] = useState(null);

  if (!questionToRead) {
    return (
      <div className={classes.questionsandanswers}>
        <img className={classes.image_undraw} src={ImageUndrawAdventure} alt="" />
        <div>Ładowanie…</div>
      </div>
    );
  }

  // Kolejność bez tasowania: najpierw 3 błędne, potem poprawna
  const allAnswers = [
    ...questionToRead.incorrect_answers,
    questionToRead.correct_answer,
  ];

  // Etykiety A–D (przytnij do długości odpowiedzi na wszelki wypadek)
  const labels = ["A", "B", "C", "D"].slice(0, allAnswers.length);

  const handleSelect = (answer) => {
    setChosen(answer);
  };

  const isCorrect = chosen && chosen === questionToRead.correct_answer;

  return (
    <div className={classes.questionsandanswers}>
      <img className={classes.image_undraw} src={ImageUndrawAdventure} alt="" />

      <Question questionToRead={questionToRead} />

      {allAnswers.map((opt, i) => (
        <Answer
          key={i}
          optionAbcd={labels[i]}
          answer={opt}
          onSelect={handleSelect}
          selected={chosen === opt}
        />
      ))}

      {/* prosty feedback po wyborze */}
      {chosen && (
        <p style={{ marginTop: 12 }}>
          Wybrałaś: <strong>{chosen}</strong>{" "}
          {isCorrect ? "✅ Dobrze!" : "❌ Spróbuj dalej"}
        </p>
      )}
    </div>
  );
};
