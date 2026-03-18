import { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import EmojiQuiz from './components/EmojiQuiz';

export default function App() {
  const [screen, setScreen] = useState('home');

  return (
    <div className="app">
      {screen === 'home' && (
        <HomeScreen onGame={() => setScreen('game')} />
      )}
      {screen === 'game' && (
        <EmojiQuiz onExit={() => setScreen('home')} />
      )}
    </div>
  );
}
