import { Routes, Route, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState, useRef } from "react";
import Quiz from "./Quiz";

function EachQuiz({
  score,
  setScore,
  questions,
  currentIndex,
  setCurrentIndex,
  setQuestions,
}) {
  const { id } = useParams();
  const { data, isPending, error } = useFetch("/data.json");
  const [clicked, setClicked] = useState(null);
  const [showSubmitBtn, SetShowSubmitBtn] = useState(true);
  const [showNextBtn, setShowNextBtn] = useState(false);

  const [disabled, setDisabled] = useState(false);

  const buttons = useRef(null);

  if (data && id == "html") {
    setQuestions(data.quizzes[0].questions);
  } else if (data && id == "css") {
    setQuestions(data.quizzes[1].questions);
  } else if (data && id == "javascript") {
    setQuestions(data.quizzes[2].questions);
  } else if (data && id == "accessibility") {
    setQuestions(data.quizzes[3].questions);
  }

  return (
    <section>
      <Routes>
        <Route
          path="/"
          element={
            <Quiz
              questions={questions}
              data={data}
              isPending={isPending}
              error={error}
              clicked={clicked}
              setClicked={setClicked}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              showSubmitBtn={showSubmitBtn}
              SetShowSubmitBtn={SetShowSubmitBtn}
              showNextBtn={showNextBtn}
              setShowNextBtn={setShowNextBtn}
              score={score}
              setScore={setScore}
              disabled={disabled}
              setDisabled={setDisabled}
              buttons={buttons}
              id={id}
            />
          }
        />
      </Routes>
    </section>
  );
}

export default EachQuiz;
