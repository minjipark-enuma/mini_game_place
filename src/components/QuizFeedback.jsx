import { useEffect } from 'react';

export default function QuizFeedback({ isCorrect, correctAnswer, meaning, onContinue }) {
  useEffect(() => {
    if (isCorrect) {
      const timer = setTimeout(onContinue, 1600);
      return () => clearTimeout(timer);
    }
  }, [isCorrect, onContinue]);

  return (
    <div className="quiz-feedback-overlay">
      <div className={`quiz-feedback-card ${isCorrect ? 'quiz-feedback-card--correct' : 'quiz-feedback-card--wrong'}`}>
        <div className="quiz-feedback-emoji">
          {isCorrect ? '🎉' : '😢'}
        </div>
        <div className="quiz-feedback-title">
          {isCorrect ? '정답이에요!' : '아쉬워요!'}
        </div>
        <div className="quiz-feedback-answer">
          {!isCorrect && (
            <div className="quiz-feedback-correct-label">정답은</div>
          )}
          <div className="quiz-feedback-answer-text">{correctAnswer}</div>
        </div>
        <div className="quiz-feedback-meaning">{meaning}</div>
        {!isCorrect && (
          <button className="quiz-feedback-btn" onClick={onContinue}>
            다음 문제 →
          </button>
        )}
      </div>
    </div>
  );
}
