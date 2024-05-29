import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Toggle from "./Toggle";

function EachQuiz() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch("/data.json");
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

  var currentIndex = 0;
  var questionNum = 1;

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
            <em className="question-no">Question 1 of {questions.length}</em>
            <section className="question-box">
              <section className="question-top">
                <strong className="question">
                  {questions[currentIndex].question}
                </strong>
                <progress></progress>
              </section>
              <section className="buttons">
                {questions[currentIndex].options.map((opt, index) => (
                  <button className="options" key={index}>
                    {opt}
                  </button>
                ))}
                <input type="button" value="Submit" />
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
