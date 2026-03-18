export default function QuizResult({ answers, questions, onRetry, onHome }) {
  const correctCount = answers.filter((a) => a === 'correct').length;
  const total = questions.length;

  const getMessage = () => {
    if (correctCount === 5) return '완벽해요! 천재인걸요? 🏆';
    if (correctCount === 4) return '대단해요! 거의 다 맞았어요! 🌟';
    if (correctCount === 3) return '잘했어요! 조금만 더 해봐요! 😊';
    if (correctCount === 2) return '괜찮아요! 다시 하면 더 잘할 수 있어요! 💪';
    return '다음엔 꼭 더 잘할 수 있어요! 화이팅! 🌈';
  };

  return (
    <div className="quiz-result">
      <div className="quiz-result-title">결과 발표!</div>

      <div className="quiz-result-score">
        <span className="quiz-result-score-num">{correctCount}</span>
        <span className="quiz-result-score-sep"> / </span>
        <span className="quiz-result-score-total">{total}</span>
      </div>

      <div className="quiz-result-stamps">
        {answers.map((a, i) => (
          <span key={i} className="quiz-result-stamp">
            {a === 'correct' ? '⭐' : '💔'}
          </span>
        ))}
      </div>

      <div className="quiz-result-message">{getMessage()}</div>

      <div className="quiz-result-review">
        {questions.map((q, i) => (
          <div key={q.id} className={`quiz-result-item ${answers[i] === 'correct' ? 'quiz-result-item--correct' : 'quiz-result-item--wrong'}`}>
            <span className="quiz-result-item-emoji">{q.emoji}</span>
            <span className="quiz-result-item-arrow">→</span>
            <span className="quiz-result-item-answer">{q.answer}</span>
            <span className="quiz-result-item-stamp">{answers[i] === 'correct' ? '⭐' : '💔'}</span>
          </div>
        ))}
      </div>

      <div className="quiz-result-btns">
        <button className="quiz-result-btn quiz-result-btn--retry" onClick={onRetry}>
          다시 하기 🔄
        </button>
        <button className="quiz-result-btn quiz-result-btn--home" onClick={onHome}>
          홈으로 🏠
        </button>
      </div>
    </div>
  );
}
