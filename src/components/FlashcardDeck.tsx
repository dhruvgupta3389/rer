import React, { useState, useEffect, useCallback } from 'react';
import Flashcard, { type FlashcardData } from './Flashcard';
import './FlashcardDeck.css';

interface FlashcardDeckProps {
    cards: FlashcardData[];
    unitNumber: number;
}

const FlashcardDeck: React.FC<FlashcardDeckProps> = ({ cards, unitNumber }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Reset to first card when unit changes
    useEffect(() => {
        setCurrentIndex(0);
    }, [unitNumber]);

    const nextCard = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, [cards.length]);

    const prevCard = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, [cards.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === 'd') {
                nextCard();
            } else if (e.key === 'ArrowLeft' || e.key === 'a') {
                prevCard();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextCard, prevCard]);

    if (cards.length === 0) {
        return <div className="no-cards">No cards available for this unit</div>;
    }

    return (
        <div className="deck-container">
            <div className="progress-container">
                <div className="progress-bar">
                    <div
                        className={`progress-fill unit-${unitNumber}`}
                        style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
                    />
                </div>
                <span className="progress-text">
                    Card {currentIndex + 1} of {cards.length}
                </span>
            </div>

            <Flashcard data={cards[currentIndex]} unitTheme={unitNumber} />

            <div className="controls">
                <button onClick={prevCard} className={`nav-btn unit-${unitNumber}`}>
                    <span className="btn-icon">←</span>
                    <span className="btn-text">Previous</span>
                </button>

                <div className="card-dots">
                    {cards.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''} unit-${unitNumber}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to card ${index + 1}`}
                        />
                    ))}
                </div>

                <button onClick={nextCard} className={`nav-btn unit-${unitNumber}`}>
                    <span className="btn-text">Next</span>
                    <span className="btn-icon">→</span>
                </button>
            </div>

            <p className="keyboard-hint">💡 Use Arrow Keys or A/D to navigate</p>
        </div>
    );
};

export default FlashcardDeck;
