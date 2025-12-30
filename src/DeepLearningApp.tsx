import { useState } from 'react'
import './App.css'
import FlashcardDeck from './components/FlashcardDeck'
import UnitSelector from './components/UnitSelector'
import { dlUnit1Data } from './data/dlUnit1Data'
import { dlUnit2Data } from './data/dlUnit2Data'
import { dlUnit3Data } from './data/dlUnit3Data'
import { dlUnit4Data } from './data/dlUnit4Data'
import { dlUnit5Data } from './data/dlUnit5Data'

const unitNames = [
    'Introduction to ML',
    'Deep Networks',
    'Dimensionality Reduction',
    'Optimization & Generalization',
    'Case Studies & Applications'
]

const allUnitsData = [dlUnit1Data, dlUnit2Data, dlUnit3Data, dlUnit4Data, dlUnit5Data]

interface DeepLearningAppProps {
    onSwitchCourse: () => void;
}

function DeepLearningApp({ onSwitchCourse }: DeepLearningAppProps) {
    const [currentUnit, setCurrentUnit] = useState(1)
    const currentCards = allUnitsData[currentUnit - 1]

    return (
        <div className="App deep-learning-theme">
            <header className="app-header">
                <h1>🧠 Deep Learning</h1>
                <p className="subtitle">Interactive Study Cards for AKTU Exam Preparation</p>
                <button className="course-switch-btn" onClick={onSwitchCourse}>
                    🔋 Switch to Energy Resources
                </button>
            </header>

            <UnitSelector currentUnit={currentUnit} onUnitChange={setCurrentUnit} />

            <div className="unit-title">
                <h2>Unit {currentUnit}: {unitNames[currentUnit - 1]}</h2>
            </div>

            <FlashcardDeck cards={currentCards} unitNumber={currentUnit} />

            <footer className="app-footer">
                <p>
                    <span className="badge-legend">
                        <span className="legend-item"><span className="dot high"></span> AKTU Important</span>
                        <span className="legend-item"><span className="dot medium"></span> Frequently Asked</span>
                        <span className="legend-item"><span className="dot normal"></span> Good to Know</span>
                    </span>
                </p>
                <p className="copyright">Made for B.Tech students • Deep Learning (KCS-078/BAI701)</p>
            </footer>
        </div>
    )
}

export default DeepLearningApp
