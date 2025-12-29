import React, { useState } from 'react';
import './Flashcard.css';

export type ImportanceLevel = 'high' | 'medium' | 'normal';

export interface FlashcardData {
  id: number;
  title: string;
  frontImage?: string;
  frontText?: string;
  backTitle?: string;
  backContent: string[] | React.ReactNode;
  importance?: ImportanceLevel;
}

interface FlashcardProps {
  data: FlashcardData;
  unitTheme?: number;
}

const importanceBadges: Record<ImportanceLevel, { emoji: string; label: string; class: string }> = {
  high: { emoji: '🔴', label: 'AKTU Important', class: 'badge-high' },
  medium: { emoji: '🟡', label: 'Frequently Asked', class: 'badge-medium' },
  normal: { emoji: '🟢', label: 'Good to Know', class: 'badge-normal' },
};

const Flashcard: React.FC<FlashcardProps> = ({ data, unitTheme = 1 }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const badge = data.importance ? importanceBadges[data.importance] : null;

  return (
    <div
      className={`flashcard unit-theme-${unitTheme} ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          {badge && (
            <div className={`importance-badge ${badge.class}`}>
              <span className="badge-emoji">{badge.emoji}</span>
              <span className="badge-label">{badge.label}</span>
            </div>
          )}
          <h2>{data.title}</h2>
          {data.frontText && <p className="front-text">{data.frontText}</p>}
          {data.frontImage && (
            <img src={data.frontImage} alt={data.title} className="infographic" />
          )}
          <p className="hint">👆 Click to flip</p>
        </div>
        <div className="flashcard-back">
          <h2>{data.backTitle || "Key Points"}</h2>
          <div className="back-content">
            {Array.isArray(data.backContent) ? (
              <ul>
                {data.backContent.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              data.backContent
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
