import classes from "./Question.module.css";

export const Question = ({ questionToRead }) => {
  if (!questionToRead) return null; // jeszcze się ładuje

  return (
    <div className={classes.question}>
      {(questionToRead.question)}
    </div>
  );
};
