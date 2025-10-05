import classes from "./Question.module.css";

function decodeHtml(s) {
  if (!s) return "";
  return s
    .replaceAll("&quot;", '"')
    .replaceAll("&#039;", "'")
    .replaceAll("&amp;", "&")
    .replaceAll("&eacute;", "é")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

export const Question = ({ questionToRead }) => {
  if (!questionToRead) return null; // jeszcze się ładuje

  return (
    <div className={classes.question}>
      {decodeHtml(questionToRead.question)}
    </div>
  );
};
