import { useEffect, useRef, useState } from "react";
import { CountryQuiz } from "./CountryQuiz";
import { QuestionsAndAnswers } from "./QuestionsAndAnswers";

export const MainComponent = () => {
  const [questions, setQuestions] = useState([]);     // zawsze tablica
  const [loading, setLoading] = useState(true);       // stan ładowania
  const [error, setError] = useState(null);           // komunikat błędu (string)
  const didFetch = useRef(false);                     // strażnik przed 2x fetch w Strict Mode

  // pojedynczy fetch z prostym retry (np. na 429)
  async function fetchOnce() {
    const res = await fetch("https://opentdb.com/api.php?amount=10&category=22&type=multiple");
    if (!res.ok) {
      const err = new Error(`HTTP ${res.status}`);
      err.status = res.status;
      throw err;
    }
    const data = await res.json();
    return Array.isArray(data?.results) ? data.results : [];
  }

  async function fetchWithRetry(retries = 2, delayMs = 800) {
    try {
      return await fetchOnce();
    } catch (e) {
      // przy 429 (Too Many Requests) lub chwilowych problemach spróbuj ponownie
      if (retries > 0 && (e.status === 429 || e.name === "TypeError")) {
        await new Promise(r => setTimeout(r, delayMs));
        return fetchWithRetry(retries - 1, delayMs * 2);
      }
      throw e;
    }
  }

  useEffect(() => {
    if (didFetch.current) return;   // blokada podwójnego wywołania w dev
    didFetch.current = true;

    setLoading(true);
    setError(null);

    fetchWithRetry()
      .then((results) => {
        if (results[0]?.question) console.log(results[0].question);
        setQuestions(results);
      })
      .catch((e) => {
        console.error("Fetch error:", e);
        setError(e.message || "Błąd pobierania danych");
        setQuestions([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const question1 = questions.length > 0 ? questions[0] : null;

  return (
    <div>
      <CountryQuiz />

      {loading && <div>Ładowanie…</div>}

      {error && (
        <div style={{ color: "crimson", marginTop: 12 }}>
          Problem z API: {error}. Odśwież stronę lub spróbuj za chwilę.
        </div>
      )}

      {!loading && !error && <QuestionsAndAnswers questionToRead={question1} />}
    </div>
  );
};
