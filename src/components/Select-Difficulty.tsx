import { useNavigate } from "react-router-dom";

function SelectDifficulty() {
  const navigate = useNavigate();

  const handleDifficulty = (difficulty: string) => {
    navigate(`/${difficulty}/question`);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-red-800 mt-6  text-center">
        Select your Difficulty level
      </h1>

      <div className=" mt-6 py-6 text-2xl font-bold justify-items-center text-center">
        <div
          className="  py-3 my-4 bg-red-400 w-[60%] rounded-xl hover:cursor-pointer hover:bg-red-300 shadow-lg "
          onClick={() => {
            handleDifficulty("easy");
          }}
        >
          1. Easy
        </div>

        <div
          className=" py-3 my-4 bg-red-400 w-[60%] rounded-xl hover:cursor-pointer hover:bg-red-300 shadow-lg"
          onClick={() => {
            handleDifficulty("medium");
          }}
        >
          2. Medium
        </div>
        <div
          className=" py-3 my-4 bg-red-400 w-[60%] rounded-xl hover:cursor-pointer hover:bg-red-300 shadow-lg"
          onClick={() => {
            handleDifficulty("hard");
          }}
        >
          3. Hard
        </div>
        <div
          className=" py-3 my-4 bg-red-400 w-[60%] rounded-xl hover:cursor-pointer hover:bg-red-300 shadow-lg"
          onClick={() => {
            handleDifficulty("any");
          }}
        >
          4. Any
        </div>
      </div>
    </>
  );
}

export default SelectDifficulty;
