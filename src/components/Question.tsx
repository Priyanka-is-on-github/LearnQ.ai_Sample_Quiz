
import { QuestionType } from "../util/type";
import { parseQuestion } from "../util/parse_question";



const Question = ({
  question,
  questionIndex,
  selectedOption,
  onOptionSelect,
}: {
  question: QuestionType;
  questionIndex: number;
  selectedOption: string | number;
  onOptionSelect: (quizAns: number) => void;
}) => {
 

  return (
    <>
      <div className="flex justify-between">
        <div>
          <span className="text-xl"> {`Q. ${questionIndex + 1} of 4`}</span>
          <span className=" ml-4 text-slate-500">
            Difficulty level: {question["Difficulty Level"]}
          </span>
        </div>
        <span className="text-xl"> Marks: {question["Marks allocated"]}</span>
      </div>

      <div className="my-10 text-2xl "> {parseQuestion(question.Question)}</div>

      <div className="mb-10 ">
        <div
          className={`text-xl  py-4 bg-red-200 mb-3 rounded-2xl pl-4 shadow-md hover:cursor-pointer hover:bg-red-100 ${
            selectedOption === 1 ? "bg-yellow-400 hover:bg-yellow-300" : ""
          }`}
          onClick={() => onOptionSelect(1)}
        >
          1. {parseQuestion(question["Option 1"])}
        </div>
        <div
          className={`text-xl  py-4 bg-red-200 mb-4 rounded-2xl pl-4 shadow-md hover:cursor-pointer hover:bg-red-100 ${
            selectedOption === 2 ? "bg-yellow-400 hover:bg-yellow-300" : ""
          }`}
          onClick={() => onOptionSelect(2)}
        >
          2. {parseQuestion(question["Option 2"])}
        </div>
        <div
          className={`text-xl  py-4 bg-red-200 mb-4 rounded-2xl pl-4 shadow-md hover:cursor-pointer hover:bg-red-100 ${
            selectedOption === 3 ? "bg-yellow-400 hover:bg-yellow-300" : ""
          }`}
          onClick={() => onOptionSelect(3)}
        >
          3. {parseQuestion(question["Option 3"])}
        </div>
        <div
          className={`text-xl  py-4 bg-red-200 mb-3 rounded-2xl pl-4 shadow-md hover:cursor-pointer hover:bg-red-100 ${
            selectedOption === 4 ? "bg-yellow-400 hover:bg-yellow-300" : ""
          }`}
          onClick={() => onOptionSelect(4)}
        >
          4. {parseQuestion(question["Option 4"])}
        </div>
      </div>
    </>
  );
};

export default Question;
