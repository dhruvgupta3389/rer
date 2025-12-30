import { useState } from 'react'
import './App.css'
import FlashcardDeck from './components/FlashcardDeck'
import UnitSelector from './components/UnitSelector'
import { dbmsUnit1Data } from './data/dbmsUnit1Data'
import { dbmsUnit2Data } from './data/dbmsUnit2Data'
import { dbmsUnit3Data } from './data/dbmsUnit3Data'
import { dbmsUnit4Data } from './data/dbmsUnit4Data'
import { dbmsUnit5Data } from './data/dbmsUnit5Data'

const unitNames = [
    'Introduction & ER Model',
    'Relational Model & SQL',
    'Database Design & Normalization',
    'Transaction Processing',
    'Concurrency Control'
]

const allUnitsData = [dbmsUnit1Data, dbmsUnit2Data, dbmsUnit3Data, dbmsUnit4Data, dbmsUnit5Data]

interface DBMSAppProps {
    onSwitchCourse: () => void;
}

function DBMSApp({ onSwitchCourse }: DBMSAppProps) {
    const [currentUnit, setCurrentUnit] = useState(1)
    const currentCards = allUnitsData[currentUnit - 1]

    return (
        <div className="App dbms-theme">
            <header className="app-header">
                <h1>💾 Database Management System</h1>
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
                <p className="copyright">Made for B.Tech students • DBMS (KCS-501)</p>
            </footer>
        </div>
    )
}

export default DBMSApp
