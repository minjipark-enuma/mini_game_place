export default function QuizHint({ hint }) {
  return (
    <div className="quiz-hint-box">
      <span className="quiz-hint-icon">💡</span>
      <span className="quiz-hint-text">{hint}</span>
    </div>
  );
}
