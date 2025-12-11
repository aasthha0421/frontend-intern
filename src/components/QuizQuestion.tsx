import { QuizQuestion as QuizQuestionType } from '../data/quizData';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer: string | null;
  onSelectAnswer: (answer: string) => void;
  showCatIllustration?: boolean;
}

export default function QuizQuestion({
  question,
  selectedAnswer,
  onSelectAnswer,
  showCatIllustration = false
}: QuizQuestionProps) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[680px] mx-auto">
      <div className="bg-[#BCE5F3] rounded-lg py-6 px-8 text-center">
        <h2 className="text-[#2C3E50] text-lg font-medium">
          {question.id}. {question.question}
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(option)}
            className={`py-6 px-8 rounded-lg text-center text-[#2C3E50] text-lg font-medium transition-all duration-200 ${
              selectedAnswer === option
                ? 'bg-[#BCE5F3] hover:bg-[#A8D8E8]'
                : 'bg-white hover:bg-gray-50'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {showCatIllustration && (
        <div className="absolute left-8 bottom-8 flex items-end gap-3">
          <div className="bg-white rounded-2xl px-6 py-3 shadow-lg relative">
            <p className="text-[#2C3E50] text-lg font-medium whitespace-nowrap">Best of Luck !</p>
            <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white rotate-45 rounded-sm"></div>
          </div>
          <div className="w-24 h-32 relative">
            <svg viewBox="0 0 100 140" className="w-full h-full">
              <circle cx="50" cy="40" r="30" fill="#E8E8E8" />
              <ellipse cx="50" cy="80" rx="28" ry="35" fill="#FFB6C1" />

              <circle cx="35" cy="28" r="4" fill="#333" />
              <circle cx="65" cy="28" r="4" fill="#333" />
              <path d="M 40 42 Q 50 46 60 42" stroke="#333" strokeWidth="2" fill="none" />

              <g className="animate-claw-open-close origin-[50px_65px]">
                <circle cx="28" cy="95" r="6" fill="#FFB6C1" />
                <circle cx="38" cy="110" r="6" fill="#FFB6C1" />
                <circle cx="50" cy="118" r="6" fill="#FFB6C1" />
                <circle cx="62" cy="110" r="6" fill="#FFB6C1" />
                <circle cx="72" cy="95" r="6" fill="#FFB6C1" />
              </g>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
