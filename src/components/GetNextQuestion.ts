import questionsData from "../util/quiz_dataset.json";

export function GetNextQuestion(
  difficulty: string | undefined,
  studentAns: number,
  correctAns: number | undefined,
  attempedId: number[],
  prevId: number | undefined
) {
  if (prevId !== undefined) {
    attempedId.push(prevId);
  }

  if (difficulty?.toLocaleLowerCase() === "easy") {
    if (studentAns === correctAns) {
      console.log(studentAns === correctAns);

      difficulty = "medium";

      const filteredQuestion = questionsData.filter(
        (q) => !attempedId.includes(q["id"])
      );

      const nextQues = filteredQuestion.find(
        (q) => q["Difficulty Level"].toLowerCase() === difficulty?.toLowerCase()
      );

      return nextQues;
    } else {
      const filteredQuestion = questionsData.filter(
        (q) => !attempedId.includes(q["id"])
      );

      const nextQues = filteredQuestion.find(
        (q) => q["Difficulty Level"].toLowerCase() === difficulty?.toLowerCase()
      );

      return nextQues;
    }
  } else if (difficulty?.toLocaleLowerCase() === " medium") {
    if (studentAns === correctAns) {
      difficulty = "hard";

      const filteredQuestion = questionsData.filter(
        (q) => !attempedId.includes(q["id"])
      );

      const nextQues = filteredQuestion.find(
        (q) => q["Difficulty Level"].toLowerCase() === difficulty?.toLowerCase()
      );

      return nextQues;
    } else {
      difficulty = "easy";
      const filteredQuestion = questionsData.filter(
        (q) => !attempedId.includes(q["id"])
      );

      const nextQues = filteredQuestion.find(
        (q) => q["Difficulty Level"].toLowerCase() === difficulty?.toLowerCase()
      );

      return nextQues;
    }
  } else {
    if (studentAns === correctAns) {
      difficulty = "hard";

      const filteredQuestion = questionsData.filter(
        (q) => !attempedId.includes(q["id"])
      );

      const nextQues = filteredQuestion.find(
        (q) => q["Difficulty Level"].toLowerCase() === difficulty?.toLowerCase()
      );
      return nextQues;
    } else {
      difficulty = "medium";

      const filteredQuestion = questionsData.filter(
        (q) => !attempedId.includes(q["id"])
      );

      const nextQues = filteredQuestion.find(
        (q) => q["Difficulty Level"].toLowerCase() === difficulty?.toLowerCase()
      );

      return nextQues;
    }
  }
}
