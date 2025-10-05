import { CountryQuiz } from "./CountryQuiz";
import { QuestionsAndAnswers } from "./QuestionsAndAnswers";
import { useEffect, useState } from "react";

export const MainComponent = () => {
  const [questions, setQuestions] = useState([]); // zawsze tablica

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=22&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        const results = Array.isArray(data?.results) ? data.results : [];
        // log tylko jeśli coś jest
        if (results[0]?.question) {
          console.log(results[0].question);
        }
        setQuestions(results);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setQuestions([]); // fallback
      });
  }, []);

  // bezpieczny wybór pierwszego pytania
  const question1 = questions.length > 0 ? questions[0] : null;

  return (
    <div>
      <CountryQuiz />
      <QuestionsAndAnswers questionToRead={question1} />
    </div>
  );
};
