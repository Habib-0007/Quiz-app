import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Toggle from "./Toggle";
import { useState } from "react";

function EachQuiz() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch("/data.json");
  const [clicked, setClicked] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSubmitBtn, SetShowSubmitBtn] = useState(true);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(null);

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
      {isPending && <p>Loading...</p>}
      {data && (
        <section className="quiz">
          <div className="quiz-header">
            <div>
              <img
                src={`/images/icon-${id}.svg`}
                alt={id}
                className={`${id}-bg`}
              />
              <p>{id}</p>
            </div>
            <Toggle />
          </div>
          <div>
            <em className="question-no">
              Question {currentIndex + 1} of {questions.length}
            </em>
            <section className="question-box">
              <section className="question-top">
                <strong className="question">
                  {questions[currentIndex].question}
                </strong>
                <progress min={1} value={currentIndex + 1} max={10}></progress>
              </section>
              <section className="buttons">
                {questions[currentIndex].options.map((opt, index) => (
                  <button
                    className={`options ${clicked === opt ? "clicked" : ""} ${
                      clicked === questions[currentIndex].answer
                        ? "correct"
                        : clicked === opt
                        ? "wrong"
                        : ""
                    }`}
                    key={index}
                    onClick={(event) => {
                      setClicked(event.target.textContent);
                    }}
                  >
                    {opt}
                  </button>
                ))}
                <input
                  type="button"
                  value="Submit"
                  className={`${showSubmitBtn ? "" : "none"}`}
                  onClick={() => {
                    if (questions[currentIndex].answer === clicked) {
                      setScore(score + 1);
                    }

                    if (clicked !== null) {
                      setShowNextBtn(true);
                      SetShowSubmitBtn(false);
                    }

                    setClicked(null);
                  }}
                />
                <input
                  type="button"
                  value="Next"
                  className={`${
                    questions.length - 1 === currentIndex ? "none" : ""
                  } ${showNextBtn ? "" : "none"}`}
                  onClick={() => {
                    setCurrentIndex(currentIndex + 1);
                    SetShowSubmitBtn(true);
                    setShowNextBtn(false);
                  }}
                />
              </section>
            </section>
          </div>
        </section>
      )}
      {error && <p>{error}</p>}
    </section>
  );
}

export default EachQuiz;
