import { useLocation } from "react-router-dom";
import QuizScoreQuestions from "./QuizScoreQuestions";

type QuestionType = {
  Question: string;
  "Option 1": string | number;
  "Option 2": string | number;
  "Option 3": string | number;
  "Option 4": string | number;
  "Correct Option": number;
  "Marks allocated": number;
  "Difficulty Level": string;
};
function QuizScore() {
  const location = useLocation();
  const { quizQuestions, answers } = location.state || {
    quizQuestions: [],
    answers: {},
  };

  const totalScore = quizQuestions.map((q: QuestionType, index: number) => {
    return q["Correct Option"] === answers[index];
  });

  const score = totalScore.filter(Boolean).length;

  const percentage = (score / 4) * 100;

  return (
    <>
      <div className="flex justify-between">
        <span className="text-xl"> Total Score: {score} / 4</span>

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
