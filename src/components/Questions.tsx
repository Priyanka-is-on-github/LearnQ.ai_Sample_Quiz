import { useEffect, useState } from "react";

import questionsData from "../util/quiz_dataset.json";
import Question from "./Question";
import { useNavigate, useParams } from "react-router-dom";
import { QuestionType } from "../util/type";

type AnswerType = {
  [key: number]: string | number;
};

function Questions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [answers, setAnswers] = useState<AnswerType>({});
  const [quizQuestion, setQuizQuestion] = useState<QuestionType[]>([]);

  const navigate = useNavigate();

  const { id } = useParams();
  const difficulty = id;

  const nextQuestion = () => {
    if (currentIndex < quizQuestion.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const submitQuiz = () => {
    navigate("/quizscore", {
      state: {
        quizQuestions: quizQuestion,
        answers: answers,
      },
    });
  };

  const handleOptionSelect = (quizAns: number) => {
    setAnswers({
      ...answers,
      [currentIndex]: quizAns,
    });
  };

  useEffect(() => {
    (() => {
      let filteredQuestions = questionsData;

      // filter questions based on difficuty

      if (difficulty !== "any") {
        filteredQuestions = questionsData.filter(
          (q) =>
            q["Difficulty Level"].toLowerCase() === difficulty?.toLowerCase()
        );
      }

      // randomly pick 4 questions based on difficulty

      const shuffled = filteredQuestions.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 4);
      setQuizQuestion(selected);
    })();
  }, [id]);

  if (quizQuestion.length === 0) {
    return (
      <div className="text-center text-xl mt-10">Loading questions...</div>
    );
  }

  return (
    <>
      <div>
        <Question
          question={quizQuestion[currentIndex]}
          questionIndex={currentIndex}
          selectedOption={answers[currentIndex]}
          onOptionSelect={handleOptionSelect}
        />

        <div className=" flex justify-center">
          <div className="  w-[30%] flex justify-between ">
            <button
              onClick={prevQuestion}
              disabled={currentIndex === 0}
              className="bg-blue-400 py-2 px-4 font-semibold rounded-xl w-[40%] shadow-xl hover:cursor-pointer hover:bg-blue-500"
            >
              Previous
            </button>

            <span className="text-xl text-slate-600 w-[40%]  text-center">
              {` ${currentIndex + 1} of 4`}
            </span>
            {currentIndex < quizQuestion.length - 1 ? (
              <button
                onClick={nextQuestion}
                className="bg-blue-400 py-2 px-4 font-semibold rounded-xl w-[40%] shadow-xl  hover:cursor-pointer hover:bg-blue-500"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => {
                  submitQuiz();
                }}
                className="bg-green-400 py-2 px-4 font-semibold rounded-xl  shadow-xl  w-[40%] hover:cursor-pointer hover:bg-green-500"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Questions;
