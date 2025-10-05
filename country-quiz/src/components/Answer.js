import classes from "./Answer.module.css";

export const Answer = ({ answer, optionAbcd, onSelect, selected }) => {
  // selected = true/false – czy ta odpowiedź jest wybrana

  return (
    <button
      type="button"
      className={`${classes.answer} ${selected ? classes.selected : ""}`}
      onClick={() => onSelect?.(answer)}
      aria-pressed={selected}
    >
      <div className={classes.abcd}>{optionAbcd}</div>
      <div className={classes.country}>{answer}</div>
    </button>
  );
};
