interface ResultsScreenProps {
  score: number;
  onRestart: () => void;
}

export default function ResultsScreen({ score, onRestart }: ResultsScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B8D4E6] via-[#C9E2F0] to-[#D4EAF7] flex items-center justify-center p-8">
      <div className="text-center space-y-8 animate-fade-in">
        <p className="text-[#6B7280] text-lg font-medium">Keep Learning!</p>

        <div className="space-y-4">
          <h1 className="text-[#3B7491] text-5xl font-serif italic">
            Your Final score is
          </h1>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-[#3B7491] text-9xl font-serif font-bold leading-none">
              {score}
            </span>
            <span className="text-[#3B7491] text-6xl font-serif font-bold">%</span>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="bg-[#BCE5F3] hover:bg-[#A8D8E8] text-[#2C3E50] text-lg font-medium px-12 py-4 rounded-lg transition-all duration-200 hover:scale-105"
        >
          Start Again
        </button>
      </div>
    </div>
  );
}
