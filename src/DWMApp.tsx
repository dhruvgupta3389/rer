import { useState } from 'react'
import './App.css'
import FlashcardDeck from './components/FlashcardDeck'
import UnitSelector from './components/UnitSelector'
import { dwmUnit1Data } from './data/dwmUnit1Data'
import { dwmUnit2Data } from './data/dwmUnit2Data'
import { dwmUnit3Data } from './data/dwmUnit3Data'
import { dwmUnit4Data } from './data/dwmUnit4Data'
import { dwmUnit5Data } from './data/dwmUnit5Data'

const unitNames = [
    'Data Warehousing Fundamentals',
    'DW Process & Technology',
    'Data Mining & Pre-Processing',
    'Classification, Clustering & Association',
    'OLAP, Visualization & Trends'
]

const allUnitsData = [dwmUnit1Data, dwmUnit2Data, dwmUnit3Data, dwmUnit4Data, dwmUnit5Data]

interface DWMAppProps {
    onSwitchCourse: () => void;
}

function DWMApp({ onSwitchCourse }: DWMAppProps) {
    const [currentUnit, setCurrentUnit] = useState(1)
    const currentCards = allUnitsData[currentUnit - 1]

    return (
        <div className="App dwm-theme">
            <header className="app-header">
                <h1>📊 Data Warehousing & Mining</h1>
                <p className="subtitle">Interactive Study Cards for AKTU Exam Preparation</p>
                <button className="course-switch-btn" onClick={onSwitchCourse}>
                    🔙 Return to Course Selection
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
                <p className="copyright">Made for B.Tech students • DWM (BCS-058/KOE-093)</p>
            </footer>
        </div>
    )
}

export default DWMApp
