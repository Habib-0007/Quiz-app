import { Link } from "react-router-dom";
import Header from "./Header";

const Quiz = ({
  questions,
  data,
  isPending,
  error,
  clicked,
  setClicked,
  currentIndex,
  setCurrentIndex,
  showSubmitBtn,
  SetShowSubmitBtn,
  showNextBtn,
  setShowNextBtn,
  score,
  setScore,
  disabled,
  setDisabled,
  buttons,
  id,
}) => {
  return (
    <section>
      {isPending && <p>Loading...</p>}
      {data && (
        <section className="quiz">
          <Header id={id} />
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
              <section className="buttons" ref={buttons}>
                {questions[currentIndex].options.map((opt, index) => (
                  <button
                    className={`options ${clicked === opt ? "clicked" : ""}`}
                    key={index}
                    disabled={disabled}
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
                  disabled={clicked === null ? true : false}
                  className={`${showSubmitBtn ? "" : "none"} ${
                    currentIndex + 1 === questions.length ? "none" : ""
                  }`}
                  onClick={() => {
                    if (questions[currentIndex].answer === clicked) {
                      setScore(score + 1);
                    }

                    if (clicked !== null) {
                      setShowNextBtn(true);
                      SetShowSubmitBtn(false);
                    }

                    var btns = buttons.current.querySelectorAll("button");

                    btns.forEach((btn) => {
                      if (btn.textContent == questions[currentIndex].answer) {
                        btn.classList.add("correct");
                      } else {
                        btn.classList.add("wrong");
                      }
                    });

                    setDisabled(true);
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

                    var btns = buttons.current.querySelectorAll("button");

                    btns.forEach((btn) => {
                      btn.classList.remove("correct");
                      btn.classList.remove("wrong");
                    });

                    setDisabled(false);
                    setClicked(null);
                  }}
                />
                <Link
                  to={`/quiz/${id}/result`}
                  className={`
                    ${
                      currentIndex + 1 === questions.length ? "" : "none"
                    } finish-btn
                  `}
                >
                  Finish
                </Link>
              </section>
            </section>
          </div>
        </section>
      )}
      {error && <p>{error}</p>}
    </section>
  );
};

export default Quiz;
