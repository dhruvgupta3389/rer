import { useState } from 'react'
import './App.css'
import FlashcardDeck from './components/FlashcardDeck'
import UnitSelector from './components/UnitSelector'
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

function App() {
  const [currentUnit, setCurrentUnit] = useState(1)
  const currentCards = allUnitsData[currentUnit - 1]

  return (
    <div className="App">
      <header className="app-header">
        <h1>🔋 Non-Conventional Energy Resources</h1>
        <p className="subtitle">Interactive Study Cards for AKTU Exam Preparation</p>
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
