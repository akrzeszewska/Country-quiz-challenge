import classes from "./Answer.module.css";

export const Answer = ({ answer, optionAbcd, onSelect, selected }) => {
  const handleSelect = () => onSelect?.(answer);

  return (
    <div
      className={`${classes.answer} ${selected ? classes.selected : ""}`}
      role="button"
      tabIndex={0}
      onClick={handleSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleSelect();
      }}
    >
      <div className={classes.abcd}>{optionAbcd}</div>
      <div className={classes.country}>{answer}</div>
    </div>
  );
};
