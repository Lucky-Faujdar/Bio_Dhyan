import { useState } from "react";

const gamifiedData = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
    points: 10,
  },
  {
    question: "Which is a programming language?",
    options: ["HTML", "CSS", "Python", "Photoshop"],
    answer: "Python",
    points: 15,
  },
  {
    question: "React is a ____ library?",
    options: ["Database", "Framework", "UI", "Server"],
    answer: "UI",
    points: 20,
  },
];

export default function GamifiedLearning() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [showScore, setShowScore] = useState(false);

  const handleNext = () => {
    if (selectedOption === gamifiedData[currentIndex].answer) {
      setScore(score + gamifiedData[currentIndex].points);
    }

    setSelectedOption("");

    if (currentIndex + 1 < gamifiedData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowScore(true);
    }

    // Level up every 30 points
    if ((score + gamifiedData[currentIndex].points) % 30 === 0) {
      setLevel(level + 1);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Gamified Learning
        </h1>

        <div className="flex justify-between mb-4">
          <p className="text-gray-700 font-medium">Score: {score}</p>
          <p className="text-gray-700 font-medium">Level: {level}</p>
        </div>

        {showScore ? (
          <div className="text-center text-gray-700">
            <p className="text-lg">You completed the game!</p>
            <p className="text-3xl font-bold mt-2">Final Score: {score}</p>
            <p className="text-xl mt-2">You reached Level {level}</p>
          </div>
        ) : (
          <div>
            <div className="mb-4 text-gray-700 font-medium">
              <p>
                Question {currentIndex + 1} of {gamifiedData.length}:
              </p>
              <p className="mt-2">{gamifiedData[currentIndex].question}</p>
            </div>

            <div className="flex flex-col gap-3 mb-4">
              {gamifiedData[currentIndex].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                  className={`px-4 py-2 rounded-xl border transition text-left ${
                    selectedOption === option
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-gray-100 border-gray-300 hover:bg-gray-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className={`w-full py-2 rounded-xl text-white font-medium transition ${
                selectedOption
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              {currentIndex + 1 === gamifiedData.length ? "Finish" : "Next"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
