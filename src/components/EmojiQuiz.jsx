import { useState, useCallback } from 'react';
import { allQuestions } from '../data/quizData';
import { pickQuestions, buildOptions } from '../utils/quizUtils';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';

const TOTAL = 5;

function initSession() {
  const questions = pickQuestions(allQuestions, TOTAL);
  return {
    questions,
    options: questions.map((q) => buildOptions(q)),
  };
}

export default function EmojiQuiz({ onExit }) {
  const [{ questions, options }, setSession] = useState(initSession);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState('question'); // 'question' | 'answered' | 'result'
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showHint, setShowHint] = useState(false);

  const correctCount = answers.filter((a) => a === 'correct').length;

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[currentIndex].answer;
    setSelectedAnswer(answer);
    setAnswers((prev) => [...prev, isCorrect ? 'correct' : 'wrong']);
    setPhase('answered');
  };

  const handleContinue = useCallback(() => {
    if (currentIndex + 1 >= TOTAL) {
      setPhase('result');
    } else {
      setCurrentIndex((i) => i + 1);
      setPhase('question');
      setSelectedAnswer(null);
      setShowHint(false);
    }
  }, [currentIndex]);

  const handleRetry = () => {
    setSession(initSession());
    setCurrentIndex(0);
    setPhase('question');
    setSelectedAnswer(null);
    setAnswers([]);
    setShowHint(false);
  };

  if (phase === 'result') {
    return (
      <div className="quiz-wrapper">
        <QuizResult
          answers={answers}
          questions={questions}
          onRetry={handleRetry}
          onHome={onExit}
        />
      </div>
    );
  }

  return (
    <div className="quiz-wrapper">
      <div className="quiz-score-badge">
        ✅ {correctCount} / {answers.length}
      </div>

      <button className="quiz-back-btn" onClick={onExit}>← 홈</button>

      <QuizQuestion
        question={questions[currentIndex]}
        options={options[currentIndex]}
        onAnswer={handleAnswer}
        onContinue={handleContinue}
        showHint={showHint}
        onToggleHint={() => setShowHint((v) => !v)}
        questionIndex={currentIndex}
        totalQuestions={TOTAL}
        selectedAnswer={selectedAnswer}
        isAnswered={phase === 'answered'}
      />
    </div>
  );
}
