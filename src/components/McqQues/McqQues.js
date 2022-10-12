import React from "react";
import { toast } from "react-toastify";

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
      toast("Correct answer");
    } else {
      toast("Wrong answer");
    }
  };

  const eyeClick = () => {
    toast(realAnswer);
  };

  return (
    <div>
      <h3 className="bg-slate-200 py-2">Quiz : {question}</h3>
      {options.map((option) => (
        <div className="flex justify-center px-3">
          <p
            onClick={() => checkAnswer(option)}
            className="cursor-pointer p-1 rounded-lg hover:bg-slate-200 "
          >
            {option}
          </p>
        </div>
      ))}
      <div className="flex justify-center">
        <img
          onClick={() => eyeClick()}
          className="w-5"
          src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default McqQues;
