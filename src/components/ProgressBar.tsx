interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

export default function ProgressBar({ currentQuestion, totalQuestions }: ProgressBarProps) {
  return (
    <div className="flex gap-2 w-full max-w-[680px] mx-auto">
      {Array.from({ length: totalQuestions }, (_, index) => (
        <div
          key={index}
          className={`h-1 flex-1 rounded-full transition-all duration-300 ${
            index < currentQuestion
              ? 'bg-[#2C5F7C]'
              : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}
