import classes from "./Answer.module.css";

export const Answer = (props) => {
    const {answer, optionAbcd} = props;

    return(
        <div className={classes.answer}>
            <div className={classes.abcd}>{optionAbcd}</div>
            <div className={classes.country}>{answer}</div>
        </div>
    )
}

// addEventListener