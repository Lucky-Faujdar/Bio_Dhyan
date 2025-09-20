import { useState } from "react";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Tool Multi Language",
      "None of the above",
    ],
    answer: "Hyper Text Markup Language",
  },
];

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleNext = () => {
    if (selectedOption === quizData[currentIndex].answer) {
      setScore(score + 1);
    }

    setSelectedOption("");

    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Quiz
        </h1>

        {showScore ? (
          <div className="text-center text-gray-700">
            <p className="text-lg">You scored:</p>
            <p className="text-3xl font-bold mt-2">
              {score} / {quizData.length}
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-4 text-gray-700 font-medium">
              <p>
                Question {currentIndex + 1} of {quizData.length}:
              </p>
              <p className="mt-2">{quizData[currentIndex].question}</p>
            </div>

            <div className="flex flex-col gap-3 mb-4">
              {quizData[currentIndex].options.map((option, idx) => (
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
              {currentIndex + 1 === quizData.length ? "Finish" : "Next"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
