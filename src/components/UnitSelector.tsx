import React from 'react';
import './UnitSelector.css';

interface UnitSelectorProps {
    currentUnit: number;
    onUnitChange: (unit: number) => void;
}

const unitInfo = [
    { id: 1, name: 'Introduction & Solar Cells', shortName: 'Unit 1', icon: '☀️' },
    { id: 2, name: 'Solar Thermal Energy', shortName: 'Unit 2', icon: '🔥' },
    { id: 3, name: 'Geothermal, MHD & Fuel Cells', shortName: 'Unit 3', icon: '🌍' },
    { id: 4, name: 'Thermoelectric & Wind Energy', shortName: 'Unit 4', icon: '💨' },
    { id: 5, name: 'Biomass, OTEC & Tidal', shortName: 'Unit 5', icon: '🌊' },
];

const UnitSelector: React.FC<UnitSelectorProps> = ({ currentUnit, onUnitChange }) => {
    return (
        <div className="unit-selector">
            <div className="unit-tabs">
                {unitInfo.map((unit) => (
                    <button
                        key={unit.id}
                        className={`unit-tab unit-${unit.id} ${currentUnit === unit.id ? 'active' : ''}`}
                        onClick={() => onUnitChange(unit.id)}
                        title={unit.name}
                    >
                        <span className="unit-icon">{unit.icon}</span>
                        <span className="unit-short-name">{unit.shortName}</span>
                        <span className="unit-full-name">{unit.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default UnitSelector;
