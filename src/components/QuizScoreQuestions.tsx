import { MathJax } from "better-react-mathjax";

type QuestionType = {
  question: string;
  option1: string | number;
  option2: string | number;
  option3: string | number;
  option4: string | number;
  correctOption: number;
  difficulty: string;
  selectedOption: number;
};

function QuizScoreQuestions({
  question,
  option1,
  option2,
  option3,
  option4,
  difficulty,
  correctOption,
  selectedOption,
}: QuestionType) {
  const parseQuestion = (questionText: string | number) => {
    const text = questionText.toString(); // Ensure it's a string

    const regex = /([\d+\-*/^()]+)/g;

    return text.split(regex).map((part, index) => {
      const trimmedPart = part.trim();

      if (regex.test(trimmedPart)) {
        // Format math expression without extra dots
        const formattedMath = trimmedPart.replace(
          /(?<=\d)\s*\.\s*(?=[a-zA-Z])|(?<=[a-zA-Z])\s*\.\s*(?=[a-zA-Z])/g,
          ""
        );

        return (
          <MathJax key={index} inline>
            {`\\(${formattedMath}\\)`}
          </MathJax>
        );
      }

      // Keep normal "x" as text, not inside MathJax
      return (
        <span key={index} style={{ marginRight: "5px" }}>
          {trimmedPart}
        </span>
      );
    });
  };

  return (
    <>
      <div className="flex justify-between my-4">
        <div>
          <span className="text-xl"> Q.</span>
          <span className="text-xl "> {parseQuestion(question)}</span>
        </div>

        <span className=" ml-4 text-slate-500">
          Difficulty level: {difficulty}
        </span>
      </div>

      <div className="gap-x-12 flex  p-4">
        <div className="w-[50%] ">
          <div
            className={`text-xl  py-4 bg-gray-200 mb-3 rounded-2xl pl-4 shadow-md ${
              correctOption === 1 ? "bg-green-400" : ""
            }  ${
              selectedOption === 1 && selectedOption !== correctOption
                ? "bg-red-400"
                : ""
            }`}
          >
            1. {parseQuestion(option1)}
          </div>
          <div
            className={`text-xl  py-4 bg-gray-200 mb-3 rounded-2xl pl-4 shadow-md  ${
              correctOption === 2 ? "bg-green-400" : ""
            } ${
              selectedOption === 2 && selectedOption !== correctOption
                ? "bg-red-400"
                : ""
            }`}
          >
            2. {parseQuestion(option2)}
          </div>
        </div>

        <div className="w-[50%] ">
          <div
            className={`text-xl  py-4 bg-gray-200 mb-3 rounded-2xl pl-4 shadow-md  ${
              correctOption === 3 ? "bg-green-400" : ""
            } ${
              selectedOption === 3 && selectedOption !== correctOption
                ? "bg-red-400"
                : ""
            }`}
          >
            3. {parseQuestion(option3)}
          </div>
          <div
            className={`text-xl  py-4 bg-gray-200 mb-3 rounded-2xl pl-4 shadow-md  ${
              correctOption === 4 ? "bg-green-400" : ""
            } ${
              selectedOption === 4 && selectedOption !== correctOption
                ? "bg-red-400"
                : ""
            }`}
          >
            4. {parseQuestion(option4)}
          </div>
        </div>
      </div>

      <div className="flex justify-end font-semibold">
        {selectedOption === undefined ? "Not attempted" : ""}
      </div>
      <div className=" font-bold text-green-500">Answer: {correctOption}</div>
    </>
  );
}

export default QuizScoreQuestions;
