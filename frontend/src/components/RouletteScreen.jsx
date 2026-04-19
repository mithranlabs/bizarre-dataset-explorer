import { useEffect, useRef } from 'react';
import './RouletteScreen.css';

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const FINAL_TEXT = '> SPIN_DATASET.EXE';

const scramble = (element, duration = 1600) => {
  let frame = 0;
  const totalFrames = Math.floor(duration / 30);

  const interval = setInterval(() => {
    const progress = frame / totalFrames;
    const resolvedChars = Math.floor(progress * FINAL_TEXT.length);

    element.textContent = FINAL_TEXT.split('').map((char, i) => {
      if (char === ' ') return ' ';
      if (i < resolvedChars) return char;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    }).join('');

    frame++;
    if (frame >= totalFrames) {
      clearInterval(interval);
      element.textContent = FINAL_TEXT;
    }
  }, 30);
};

const RouletteScreen = ({ onSpin, loading }) => {
  const btnTextRef = useRef(null);

  const handleClick = () => {
    if (loading) return;
    onSpin();
    if (btnTextRef.current) {
      scramble(btnTextRef.current, 1600);
    }
  };

  return (
    <div className="roulette-screen">
      <div className="terminal-prompt">
        <span className="prompt-path">~/bizarre-datasets</span>
        <span className="prompt-symbol"> $ </span>
        <span className="prompt-cursor">{loading ? 'fetching random entry...' : 'awaiting input_'}</span>
      </div>

      <button
        className={`spin-btn ${loading ? 'loading' : ''}`}
        onClick={handleClick}
        disabled={loading}
      >
        <span ref={btnTextRef}>&gt; SPIN_DATASET.EXE</span>
      </button>

      {loading && (
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
          <span className="loading-label">QUERYING DATABASE...</span>
        </div>
      )}
    </div>
  );
};

export default RouletteScreen;