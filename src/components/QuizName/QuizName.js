import React from "react";
import { Link } from "react-router-dom";
import "./QuizName.css";

const QuizName = ({ quiz }) => {
  const { name, logo, id } = quiz;
  
  return (
    <div className="quizzes">
      <div className="quizzes-card">
        <img src={logo} alt="" />
        <div className="flex justify-around bg-red-400">
          <h3 className="bg-slate-100 p-2  rounded-lg">{name}</h3>
          <p className="bg-slate-100 p-2  rounded-lg">
            {" "}
            <Link to={`/home/${id}`}>Start Quiz</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizName;
