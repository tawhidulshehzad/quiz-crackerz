import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizName from "../components/QuizName/QuizName";

const Home = () => {
  const items = useLoaderData();
  const quizzes = items.data;
  // console.log(quizzes);

  return (
    <div>
      <h2 className="text-center text-3xl py-3">Choose your quiz</h2>
      {quizzes.map((quiz) => (
        <QuizName key={quiz.id} quiz={quiz}></QuizName>
      ))}
    </div>
  );
};

export default Home;
