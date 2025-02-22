import  { useEffect, useState } from "react";
import { parseQuestion } from "../util/parse_question";
import questionsData from "../util/quiz_dataset.json";
import { QuestionType } from "../util/type";
import { useNavigate,  } from "react-router-dom";
import { GetNextQuestion } from "./GetNextQuestion";



function AnyQuestion() {
  const [selectedOption, setSelectedOption] = useState(0);
  const [anyQuestion, setAnyQuestion] = useState<QuestionType>();
  const [count, setCount] = useState(1);

  const navigate = useNavigate();
  const [attemptedId] = useState<number[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);

  const onOptionSelect = (quizAns: number) => {
    setSelectedOption(quizAns);
    setAnswers([...answers, quizAns]);
  };

  const nextOfAnyQues = () => {
    if (selectedOption === 0) {
      alert("First choose the answer of the question");
    } else {
      const length = attemptedId.length;

      if (length < 6) {
     

        const nextQuestion = GetNextQuestion(
          anyQuestion?.["Difficulty Level"],
          selectedOption,
          anyQuestion?.["Correct Option"],
          attemptedId,
          anyQuestion?.id
        );

        console.log('nextq=', nextQuestion)
        setSelectedOption(0);
        setAnyQuestion(nextQuestion);
      } else {
       let prevId = anyQuestion?.id
     
       if (prevId !== undefined) {
        attemptedId.push(prevId);
    }

        const quizQuestion = questionsData.filter((q) => {
          return attemptedId.includes(q["id"]);
        });

        navigate("/quizscore", {
          state: {
            quizQuestions: quizQuestion,
            answers: answers,
          },
        });
      }
    }

    setCount(count + 1);
  };

  useEffect(() => {
    (() => {
      let difficulty = "easy";
      const easyQues = questionsData.find(
        (q) => q["Difficulty Level"].toLowerCase() === difficulty
      );
      setAnyQuestion(easyQues);
    })();
  }, []);

  if (anyQuestion === undefined) {
    return (
      <div className="text-center text-xl mt-10">Loading questions...</div>
    );
  }
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-2 sm:gap-0">
        <div className="text-center sm:text-left">
          <span className="text-lg sm:text-xl">{`Q. ${count} of 7`}</span>
          <span className="ml-2 sm:ml-4 text-sm sm:text-base text-slate-500 block sm:inline">
            Difficulty level: {anyQuestion?.["Difficulty Level"]}
          </span>
        </div>

        <span className="text-lg sm:text-xl">
          Marks: {anyQuestion?.["Marks allocated"]}
        </span>
      </div>

      <div className="my-6 sm:my-10 text-lg sm:text-2xl text-center sm:text-left">
        {parseQuestion(anyQuestion?.Question)}
      </div>

      <div className="mb-10 ">
        <div
          className={`text-xl  py-4 bg-red-200 mb-3 rounded-2xl pl-4 shadow-md hover:cursor-pointer hover:bg-red-100 ${
            selectedOption === 1 ? "bg-yellow-400 hover:bg-yellow-300" : ""
          }`}
          onClick={() => onOptionSelect(1)}
        >
          1. {parseQuestion(anyQuestion?.["Option 1"])}
        </div>
        <div
          className={`text-xl  py-4 bg-red-200 mb-4 rounded-2xl pl-4 shadow-md hover:cursor-pointer hover:bg-red-100 ${
            selectedOption === 2 ? "bg-yellow-400 hover:bg-yellow-300" : ""
          }`}
          onClick={() => onOptionSelect(2)}
        >
          2. {parseQuestion(anyQuestion?.["Option 2"])}
        </div>
        <div
          className={`text-xl  py-4 bg-red-200 mb-4 rounded-2xl pl-4 shadow-md hover:cursor-pointer hover:bg-red-100 ${
            selectedOption === 3 ? "bg-yellow-400 hover:bg-yellow-300" : ""
          }`}
          onClick={() => onOptionSelect(3)}
        >
          3. {parseQuestion(anyQuestion?.["Option 3"])}
        </div>
        <div
          className={`text-xl  py-4 bg-red-200 mb-3 rounded-2xl pl-4 shadow-md hover:cursor-pointer hover:bg-red-100 ${
            selectedOption === 4 ? "bg-yellow-400 hover:bg-yellow-300" : ""
          }`}
          onClick={() => onOptionSelect(4)}
        >
          4. {parseQuestion(anyQuestion?.["Option 4"])}
        </div>

        <div className=" flex justify-center mt-8">
          <button
            onClick={nextOfAnyQues}
            className="bg-blue-400 py-2 px-4 font-semibold rounded-xl w-full sm:w-[40%] shadow-xl hover:cursor-pointer hover:bg-blue-500"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default AnyQuestion;
