import { Question } from "./Question";
import classes from "./QuestionsAndAnswers.module.css";
import ImageUndrawAdventure from "../pictures/undraw_adventure_4hum_1.svg";
import { Answer } from "./Answer";
import { useState } from "react";

export const QuestionsAndAnswers = ({questionToRead}) => {
    const [answer, setAnswer] = useState("");
    const [optionAbcd, setOptionAbcd] = useState("");

    return (
        <div className={classes.questionsandanswers}>
            <img className={classes.image_undraw} src={ImageUndrawAdventure} />
            <Question questionToRead={questionToRead} />
            <Answer optionAbcd='A' answer='Poland' />
            <Answer optionAbcd='B' answer='Germany' />
            <Answer optionAbcd='C' answer='Italy' />
            <Answer optionAbcd='D' answer='England' />

        </div>
    )
}