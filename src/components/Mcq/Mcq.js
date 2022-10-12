import React from "react";
import { useLoaderData } from "react-router-dom";
import McqQues from "../McqQues/McqQues";

const Mcq = () => {
  const mcqData = useLoaderData();

  const { name, questions } = mcqData.data;
  // console.log(questions);

  return (
    <div className="text-center py-2">
      <div>
        <h2 className="text-3xl font-semibold py-3 bg-slate-300">
          Questions from {name}
        </h2>
        <div>
          {questions.map((question) => (
            <McqQues key={question.id} mcques={question}></McqQues>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mcq;
