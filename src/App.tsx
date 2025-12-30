import { useState } from 'react'
import './App.css'
import FlashcardDeck from './components/FlashcardDeck'
import UnitSelector from './components/UnitSelector'
import DeepLearningApp from './DeepLearningApp'
import DBMSApp from './DBMSApp'
import { unit1Data } from './data/unit1Data'
import { unit2Data } from './data/unit2Data'
import { unit3Data } from './data/unit3Data'
import { unit4Data } from './data/unit4Data'
import { unit5Data } from './data/unit5Data'

const unitNames = [
  'Introduction & Solar Cells',
  'Solar Thermal Energy',
  'Geothermal, MHD & Fuel Cells',
  'Thermoelectric & Wind Energy',
  'Biomass, OTEC & Tidal'
]

const allUnitsData = [unit1Data, unit2Data, unit3Data, unit4Data, unit5Data]

type Course = 'energy' | 'deeplearning' | 'dbms' | 'menu';

function App() {
  const [currentCourse, setCurrentCourse] = useState<Course>('menu')
  const [currentUnit, setCurrentUnit] = useState(1)
  const currentCards = allUnitsData[currentUnit - 1]

  // Show Deep Learning course
  if (currentCourse === 'deeplearning') {
    return <DeepLearningApp onSwitchCourse={() => setCurrentCourse('menu')} />
  }

  // Show DBMS course
  if (currentCourse === 'dbms') {
    return <DBMSApp onSwitchCourse={() => setCurrentCourse('menu')} />
  }

  // Show Main Menu if course is 'menu'
  if (currentCourse === 'menu') {
    return (
      <div className="App menu-screen">
        <header className="app-header">
          <h1>🎓 Exam Prep Master</h1>
          <p className="subtitle">Select your course to start studying</p>
        </header>
        <div className="course-menu">
          <button className="course-card energy" onClick={() => setCurrentCourse('energy')}>
            <span className="icon">🔋</span>
            <h3>Energy Resources</h3>
            <p>Non-Conventional Energy</p>
          </button>

          <button className="course-card ml" onClick={() => setCurrentCourse('deeplearning')}>
            <span className="icon">🧠</span>
            <h3>Deep Learning</h3>
            <p>Neural Networks & AI</p>
          </button>

          <button className="course-card dbms" onClick={() => setCurrentCourse('dbms')}>
            <span className="icon">💾</span>
            <h3>DBMS</h3>
            <p>Database Management</p>
          </button>
        </div>
        <footer className="app-footer">
          <p className="copyright">Select a subject to view flashcards</p>
        </footer>
      </div>
    )
  }

  // Show Energy Resources course (Default view if 'energy')
  return (
    <div className="App">
      <header className="app-header">
        <h1>🔋 Non-Conventional Energy Resources</h1>
        <p className="subtitle">Interactive Study Cards for AKTU Exam Preparation</p>
        <button className="course-switch-btn" onClick={() => setCurrentCourse('menu')}>
          🔙 Back to Menu
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
        <p className="copyright">Made for B.Tech students • BOE074/KOE074</p>
      </footer>
    </div>
  )
}

export default App
