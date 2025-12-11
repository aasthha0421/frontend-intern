import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { quizQuestions } from './data/quizData';
import ProgressBar from './components/ProgressBar';
import QuizQuestion from './components/QuizQuestion';
import SubmitModal from './components/SubmitModal';
import ResultsScreen from './components/ResultsScreen';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const hasAnswer = answers[currentQuestion.id] !== undefined;

  const handleSelectAnswer = (answer: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: answer
    });
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowSubmitModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    quizQuestions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    const finalScore = Math.round((correctAnswers / quizQuestions.length) * 100);
    setScore(finalScore);
    setShowSubmitModal(false);
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setShowSubmitModal(false);
    setScore(0);
  };

  if (showResults) {
    return <ResultsScreen score={score} onRestart={handleRestart} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B8D4E6] via-[#C9E2F0] to-[#D4EAF7] flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#3A3A3A] to-transparent rounded-t-[50px]"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[#3A3A3A]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1200px]">
        <div className="bg-white rounded-3xl shadow-2xl p-12 pt-16 pb-24 relative">
          <div className="text-center mb-12">
            <h1 className="text-[#3B7491] text-6xl font-serif italic mb-4">
              Test Your Knowledge
            </h1>
            <p className="text-[#6B7280] text-lg">
              Answer all questions to see your results
            </p>
          </div>

          <div className="mb-12">
            <ProgressBar
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={quizQuestions.length}
            />
          </div>

          <QuizQuestion
            question={currentQuestion}
            selectedAnswer={answers[currentQuestion.id] || null}
            onSelectAnswer={handleSelectAnswer}
            showCatIllustration={isFirstQuestion}
          />

          {isLastQuestion ? (
            <div className="flex justify-end mt-12 max-w-[680px] mx-auto">
              <button
                onClick={handleNext}
                disabled={!hasAnswer}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                  !hasAnswer
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#BCE5F3] hover:bg-[#A8D8E8] text-[#2C5F7C] hover:scale-105'
                }`}
              >
                <span>Submit</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex justify-end gap-3 mt-12 max-w-[680px] mx-auto">
              <button
                onClick={handlePrevious}
                disabled={isFirstQuestion}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isFirstQuestion
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#BCE5F3] hover:bg-[#A8D8E8] text-[#2C5F7C] hover:scale-110'
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                disabled={!hasAnswer}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                  !hasAnswer
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#BCE5F3] hover:bg-[#A8D8E8] text-[#2C5F7C] hover:scale-110'
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>

      {showSubmitModal && <SubmitModal onSubmit={handleSubmit} />}
    </div>
  );
}

export default App;
