export default function HomeScreen({ onGame }) {
  return (
    <div className="home-screen">
      <div className="home-title">
        <span className="home-title-emoji">🎮</span>
        <h1>미니 게임 모음</h1>
        <p>재미있는 게임을 골라봐요!</p>
      </div>
      <div className="home-games">
        <button className="home-game-card" onClick={onGame}>
          <div className="home-game-emoji">🤔</div>
          <div className="home-game-name">이모지 퀴즈</div>
          <div className="home-game-desc">이모지를 보고 사자성어와 속담을 맞춰봐요!</div>
          <div className="home-game-badge">첫 번째 게임</div>
        </button>
        <div className="home-game-card home-game-card--soon">
          <div className="home-game-emoji">🚀</div>
          <div className="home-game-name">다음 게임</div>
          <div className="home-game-desc">곧 새로운 게임이 찾아와요!</div>
          <div className="home-game-badge home-game-badge--soon">준비 중</div>
        </div>
      </div>
    </div>
  );
}
