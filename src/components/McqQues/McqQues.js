import React from "react";

const McqQues = (props) => {
  // console.log(props);
  const { question, options, correctAnswer } = props.mcques;
  // console.log(options);
  const realAnswer = correctAnswer;
  // console.log(realAnswer)
  const checkAnswer = (option) => {
    // console.log(option)
    if (option === realAnswer) {
      console.log("Answer is correct");
    } else {
      console.log("Wrong answer");
    }
  };
  return (
    <div>
      <h3 className="bg-slate-200 py-2">Quiz : {question}</h3>
      {options.map((option) => (
        <div className="flex justify-center px-3">
          <p
            onClick={() => checkAnswer(option)}
            className="p-1 rounded-lg hover:bg-slate-200 "
          >
            {option}
          </p>
        </div>
      ))}
    </div>
  );
};

export default McqQues;
