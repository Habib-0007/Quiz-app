import { Routes, Route, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState, useRef } from "react";
import Result from "./Result";
import Quiz from "./Quiz";

function EachQuiz() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch("/data.json");
  const [clicked, setClicked] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSubmitBtn, SetShowSubmitBtn] = useState(true);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const buttons = useRef(null);

  var questions = "";
  if (data && id == "html") {
    questions = data.quizzes[0].questions;
  } else if (data && id == "css") {
    questions = data.quizzes[1].questions;
  } else if (data && id == "javascript") {
    questions = data.quizzes[2].questions;
  } else if (data && id == "accessibility") {
    questions = data.quizzes[3].questions;
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
              setscore={setScore}
              disabled={disabled}
              setDisabled={setDisabled}
              buttons={buttons}
              id={id}
            />
          }
        />
      </Routes>
      <Routes>
        <Route path="/result" element={<Result id={id} />} />
      </Routes>
    </section>
  );
}

export default EachQuiz;
