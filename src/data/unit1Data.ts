import { type FlashcardData } from '../components/Flashcard';

export const unit1Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Conventional vs Non-Conventional Energy",
        frontText: "Understanding the Energy Classification",
        // frontImage: "/unit1_energy_classification.png", // TODO: Generate
        backTitle: "Key Differences",
        importance: "medium",
        backContent: [
            "Conventional: Fossil fuels (coal, oil, gas) - Non-renewable, high pollution, established technology",
            "Non-Conventional: Solar, Wind, Hydro, Biomass - Renewable, eco-friendly, developing tech",
            "Global Shift: Paris Agreement targets → Net Zero by 2050",
            "India Target: 500 GW renewable capacity by 2030",
            "Key drivers: Climate change, energy security, depleting fossil reserves"
        ]
    },
    {
        id: 2,
        title: "2. Classification of Renewable Energy",
        frontText: "Types of Non-Conventional Energy Sources",
        // frontImage: "/unit1_renewable_types.png", // TODO: Generate
        backTitle: "Classification",
        importance: "medium",
        backContent: [
            "SOLAR: Photovoltaic (PV) & Thermal → Direct sunlight conversion",
            "WIND: Kinetic energy of air → Mechanical → Electrical",
            "HYDRO: Flowing water → Turbine → Generator (Small/Micro/Mini)",
            "BIOMASS: Organic matter → Biogas, Biofuel, Direct combustion",
            "GEOTHERMAL: Earth's internal heat → Steam → Electricity",
            "OCEAN: Tidal, Wave, OTEC → Ocean's kinetic/thermal energy"
        ]
    },
    {
        id: 3,
        title: "3. Merits & Demerits Comparison",
        frontText: "Advantages & Disadvantages",
        backTitle: "Comparison Table",
        importance: "high",
        backContent: [
            "✅ MERITS: Renewable/Inexhaustible, Low pollution, Low running cost, Decentralized, Energy security",
            "❌ DEMERITS: High initial cost, Intermittent (sun/wind), Large land area, Storage challenges",
            "⚡ AKTU FOCUS: Compare any two sources (Solar vs Wind, Conventional vs Non-conventional)",
            "📊 Capacity Factor: Solar ~20%, Wind ~35%, Geothermal ~90%"
        ]
    },
    {
        id: 4,
        title: "4. Solar Cell Theory (P-N Junction)",
        frontText: "Photovoltaic Effect & Working Principle",
        // frontImage: "/solar_cell_pn_junction.png", // TODO: Generate
        backTitle: "Working Principle",
        importance: "high",
        backContent: [
            "Photovoltaic Effect: Light → Electron-Hole pairs → EMF",
            "P-N Junction: n-type (excess electrons) + p-type (holes) = Depletion region",
            "Photon Absorption: E = hν ≥ Eg (bandgap energy)",
            "Electron Flow: Light creates e-h pairs → Drift across junction → Current",
            "Open Circuit Voltage (Voc): ~0.5-0.7V per cell (Silicon)",
            "Efficiency: Theoretical max ~33% (Shockley-Queisser limit)"
        ]
    },
    {
        id: 5,
        title: "5. Solar Cell Materials",
        frontText: "Types of Semiconductor Materials",
        // frontImage: "/solar_cell_materials.png", // TODO: Generate
        backTitle: "Material Types",
        importance: "high",
        backContent: [
            "SILICON (Si): Most common, 95% market share",
            "  • Monocrystalline: 20-22% efficiency, expensive, uniform",
            "  • Polycrystalline: 15-17% efficiency, cheaper, blue appearance",
            "  • Amorphous: 6-8% efficiency, thin film, flexible",
            "THIN FILM: CdTe (Cadmium Telluride), CIGS, lower efficiency but cheaper",
            "III-V COMPOUNDS: GaAs (Gallium Arsenide) - 40%+ efficiency, space applications",
            "PEROVSKITES: Emerging tech, 25%+ efficiency, low cost potential"
        ]
    },
    {
        id: 6,
        title: "6. Solar Cell Array Configuration",
        frontText: "Series & Parallel Connections",
        // frontImage: "/solar_cell_array.png", // TODO: Generate
        backTitle: "Array Design",
        importance: "high",
        backContent: [
            "CELL → MODULE → PANEL → ARRAY → POWER PLANT",
            "SERIES Connection: Voltages ADD, Current same → V = V1 + V2 + ...",
            "PARALLEL Connection: Currents ADD, Voltage same → I = I1 + I2 + ...",
            "Example: 60 cells × 0.5V = 30V module, 72 cells = 36V",
            "Bypass Diodes: Protect shaded cells from reverse current",
            "Blocking Diodes: Prevent backflow from battery at night"
        ]
    },
    {
        id: 7,
        title: "7. Solar Cell Power Plant",
        frontText: "Complete System Components",
        // frontImage: "/solar_power_plant.png", // TODO: Generate
        backTitle: "Power Plant Components",
        importance: "high",
        backContent: [
            "PV ARRAY: Multiple panels in series-parallel → DC output",
            "INVERTER: DC to AC conversion (Grid-tie or Off-grid)",
            "CHARGE CONTROLLER: MPPT or PWM, protects battery",
            "BATTERY BANK: Lead-acid, Li-ion → Storage for night/cloudy",
            "TRANSFORMER: Step-up for grid connection",
            "TRACKING SYSTEM: Single-axis or Dual-axis → 20-30% more output",
            "India's largest: Bhadla Solar Park (2,245 MW), Rajasthan"
        ]
    },
    {
        id: 8,
        title: "8. Limitations of Solar Cells",
        frontText: "Challenges & Drawbacks",
        backTitle: "Limitations",
        importance: "medium",
        backContent: [
            "☁️ INTERMITTENCY: No generation at night, reduced on cloudy days",
            "💰 HIGH INITIAL COST: ₹35,000-50,000 per kW installation",
            "📍 LAND REQUIREMENT: 4-5 acres per MW (crystalline Si)",
            "🔋 STORAGE COST: Battery adds 30-40% to system cost",
            "🌡️ TEMPERATURE EFFECT: Efficiency drops ~0.4%/°C above 25°C",
            "📉 DEGRADATION: 0.5-1% efficiency loss per year",
            "♻️ DISPOSAL: Silicon cells contain toxic materials (Pb, Cd)"
        ]
    }
];
