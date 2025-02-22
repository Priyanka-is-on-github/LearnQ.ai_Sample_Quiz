import { useLocation } from "react-router-dom";
import QuizScoreQuestions from "./QuizScoreQuestions";
import { QuestionType } from "../util/type";


function QuizScore() {
  const location = useLocation();
  const { quizQuestions, answers } = location.state || {
    quizQuestions: [],
    answers: [],
  };

 
let length = quizQuestions.length;
  const totalScore = quizQuestions.map((q: QuestionType, index: number) => {
    return q["Correct Option"] === answers[index];
  });

  const score = totalScore.filter(Boolean).length;

  const percentage = length > 0 ? ((score / length) * 100).toFixed(2) : "0";

  return (
    <>
      <div className="flex justify-between">
        <span className="text-xl"> Total Score: {score} / {length}</span>

        <span className="text-xl"> Percentage: {percentage}%</span>
      </div>

      <div>
        {quizQuestions.map((q: QuestionType, index: number) => {
          return (
            <QuizScoreQuestions
              key={index}
              question={q.Question}
              option1={q["Option 1"]}
              option2={q["Option 2"]}
              option3={q["Option 3"]}
              option4={q["Option 4"]}
              difficulty={q["Difficulty Level"]}
              correctOption={q["Correct Option"]}
              selectedOption={answers[index]}
            />
          );
        })}
      </div>
    </>
  );
}

export default QuizScore;
