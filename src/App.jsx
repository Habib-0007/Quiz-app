import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EachQuiz from "./components/EachQuiz";
import NotFound from "./components/NotFound";
import Result from "./components/Result";

function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/quiz/:id/"
            element={
              <EachQuiz
                questions={questions}
                setQuestions={setQuestions}
                score={score}
                setScore={setScore}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            }
          />

          <Route
            path="/quiz/:id/result"
            element={<Result score={score} questions={questions} />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
