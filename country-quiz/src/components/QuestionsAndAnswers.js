import { Question } from "./Question";
import classes from "./QuestionsAndAnswers.module.css";
import ImageUndrawAdventure from "../pictures/undraw_adventure_4hum_1.svg";
import { Answer } from "./Answer";

export const QuestionsAndAnswers = ({ questionToRead }) => {
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

  // proste tasowanie (OK na start)
  const shuffled = allAnswers.sort(() => Math.random() - 0.5);
  const labels = ["A", "B", "C", "D"];

  return (
    <div className={classes.questionsandanswers}>
      <img className={classes.image_undraw} src={ImageUndrawAdventure} alt="" />
      <Question questionToRead={questionToRead} />
      {shuffled.map((opt, i) => (
        <Answer key={i} optionAbcd={labels[i]} answer={opt} />
      ))}
    </div>
  );
};
