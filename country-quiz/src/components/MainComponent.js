import { CountryQuiz } from "./CountryQuiz";
import { QuestionsAndAnswers } from "./QuestionsAndAnswers";
import { useEffect, useState } from "react";

export const MainComponent = () => {
    const [questions, setQuestions] = useState([]);


    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&category=22&type=multiple")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data.results[0].question);
            setQuestions(data.results);
          });
      }, []);

      let question1 = questions[0];
    //   question1;
    //   console.log(myQuestion[0].question);

    return (
        <div>
            <CountryQuiz />
            <QuestionsAndAnswers questionToRead={question1} />
        </div>
    )
}
