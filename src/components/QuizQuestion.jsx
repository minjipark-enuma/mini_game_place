import QuizHint from './QuizHint';

export default function QuizQuestion({
  question,
  options,
  onAnswer,
  onContinue,
  showHint,
  onToggleHint,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  isAnswered,
}) {
  const isCorrect = selectedAnswer === question.answer;


  const getButtonClass = (opt) => {
    if (!isAnswered) return 'quiz-option-btn';
    if (opt === question.answer) return 'quiz-option-btn quiz-option-btn--correct';
    if (opt === selectedAnswer) return 'quiz-option-btn quiz-option-btn--wrong';
    return 'quiz-option-btn quiz-option-btn--dim';
  };

  return (
    <div className="quiz-question">
      <div className="quiz-progress">
        {questionIndex + 1} / {totalQuestions}
      </div>

      <div className="quiz-emoji-display">
        <span className="quiz-emoji-text">{question.emoji}</span>
      </div>

      <div className="quiz-options">
        {options.map((opt) => (
          <button
            key={opt}
            className={getButtonClass(opt)}
            onClick={() => !isAnswered && onAnswer(opt)}
            disabled={isAnswered}
          >
            {opt}
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className={`quiz-inline-feedback quiz-inline-feedback--${isCorrect ? 'correct' : 'wrong'}`}>
          <span className="quiz-inline-feedback-icon">{isCorrect ? '🎉' : '😢'}</span>
          <div className="quiz-inline-feedback-text">
            <div className="quiz-inline-feedback-title">
              {isCorrect ? '정답이에요!' : `정답: ${question.answer}`}
            </div>
            <div className="quiz-inline-feedback-meaning">{question.meaning}</div>
          </div>
          <button className="quiz-inline-next-btn" onClick={onContinue}>
            다음 →
          </button>
        </div>
      )}

      {!isAnswered && (
        <>
          <button className="quiz-hint-toggle" onClick={onToggleHint}>
            {showHint ? '힌트 숨기기 🙈' : '힌트 보기 💡'}
          </button>
          {showHint && <QuizHint hint={question.hint} />}
        </>
      )}
    </div>
  );
}
