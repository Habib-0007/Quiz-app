import React from "react";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";

const Result = ({ score, questions }) => {
  const { id } = useParams();

  return (
    <section className="finish">
      <Header id={id} />
      <section className="result-box">
        <div className="result-text">
          <p>Quiz Completed</p>
          <strong>You Scored...</strong>
        </div>
        <div className="result-area">
          <div className="result">
            <div>
              <img
                src={`/images/icon-${id}.svg`}
                alt={id}
                className={`${id}-bg`}
              />
              <p>{id}</p>
            </div>
            <div>
              <strong>{score}</strong>
              <p>out of {questions.length}</p>
            </div>
          </div>
          <Link to={`/`}>Play Again</Link>
        </div>
      </section>
    </section>
  );
};

export default Result;
