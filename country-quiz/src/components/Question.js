import classes from "./Question.module.css";

export const Question = ({questionToRead}) => {

    return (
        <div className={classes.question}>{questionToRead}
        </div>
    )
}