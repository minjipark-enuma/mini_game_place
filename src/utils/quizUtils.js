export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function pickQuestions(pool, n) {
  return shuffle([...pool]).slice(0, n);
}

export function buildOptions(question) {
  const wrong = shuffle([...question.wrongOptions]).slice(0, 3);
  return shuffle([question.answer, ...wrong]);
}
