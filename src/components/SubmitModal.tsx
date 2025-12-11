interface SubmitModalProps {
  onSubmit: () => void;
}

export default function SubmitModal({ onSubmit }: SubmitModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-2xl p-12 text-center space-y-8 max-w-md mx-4 animate-scale-in shadow-2xl">
        <p className="text-[#6B7280] text-base font-medium">Keep Learning!</p>

        <div className="space-y-4">
          <h2 className="text-[#3B7491] text-4xl font-serif italic">
            Your Final score is
          </h2>
          <div className="text-[#A8C5D6] text-8xl font-serif font-bold leading-none">
            0
          </div>
        </div>

        <button
          onClick={onSubmit}
          className="bg-[#BCE5F3] hover:bg-[#A8D8E8] text-[#2C3E50] text-lg font-medium px-12 py-4 rounded-lg transition-all duration-200 hover:scale-105"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
