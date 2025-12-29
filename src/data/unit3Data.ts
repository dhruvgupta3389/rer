import { type FlashcardData } from '../components/Flashcard';

export const unit3Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Geothermal Energy Resources",
        frontText: "Earth's Thermal Energy",
        frontImage: "/geothermal_systems_diagram.png",
        backTitle: "Geothermal Basics",
        importance: "medium",
        backContent: [
            "DEFINITION: Heat energy from Earth's interior (radioactive decay + primordial heat)",
            "TEMPERATURE GRADIENT: 25-30°C per km depth (normal) → 80-100°C/km (hotspots)",
            "HYDROTHERMAL: Hot water/steam reservoirs (> 150°C) - Most exploited",
            "GEOPRESSURED: High-pressure deep brines with dissolved methane",
            "HOT DRY ROCK (HDR): Requires EGS - Inject water, fracture rock, extract heat",
            "MAGMA: Molten rock at 700-1200°C - Future potential",
            "GLOBAL CAPACITY: ~16 GW (Iceland, USA, Philippines, Indonesia)"
        ]
    },
    {
        id: 2,
        title: "2. Geothermal Power Systems",
        frontText: "Electricity Generation Methods",
        frontImage: "/geothermal_systems_diagram.png",
        backTitle: "Power Plant Types",
        importance: "high",
        backContent: [
            "DRY STEAM: Direct steam from reservoir → Turbine → Condenser",
            "  → Simplest, 180-350°C, Larderello (Italy), The Geysers (USA)",
            "FLASH STEAM: High-pressure water 'flashes' at surface → Steam",
            "  → Most common, > 180°C, Single/Double/Triple flash",
            "BINARY CYCLE: Low-temp water heats secondary fluid (isobutane, n-pentane)",
            "  → 100-180°C, Lower efficiency but wider applicability",
            "EGS: Enhanced Geothermal Systems → Artificial reservoirs in HDR"
        ]
    },
    {
        id: 3,
        title: "3. Geothermal Energy Conversion",
        frontText: "Thermodynamics & Efficiency",
        backTitle: "Conversion Details",
        importance: "medium",
        backContent: [
            "ELECTRICAL CONVERSION: η = 10-23% (limited by low source temp)",
            "CARNOT EFFICIENCY: ηc = 1 - Tc/Th → Theoretical maximum",
            "EXERGY EFFICIENCY: Actual/Available work → Better metric for geo",
            "CAPACITY FACTOR: 90%+ (Base-load, 24/7 unlike solar/wind)",
            "NON-ELECTRICAL: Direct use → District heating, greenhouses, spas",
            "HEAT PUMPS: Ground-source HP for heating/cooling buildings",
            "EMISSIONS: Low CO₂ (15-55 g/kWh) vs Coal (820 g/kWh)"
        ]
    },
    {
        id: 4,
        title: "4. MHD - Principle of Working",
        frontText: "Magnetohydrodynamics Power Generation",
        frontImage: "/mhd_systems_diagram.png",
        backTitle: "MHD Principle",
        importance: "high",
        backContent: [
            "FARADAY'S LAW: Moving conductor in magnetic field → EMF induced",
            "MHD: Hot ionized gas (plasma) replaces solid conductor",
            "PROCESS: High-velocity plasma → Strong magnetic field → Direct DC",
            "TEMPERATURE: 2500-3000 K required for ionization",
            "SEEDING: K₂CO₃ or Cs added to improve conductivity",
            "EMF: E = u × B × L (velocity × field × length)",
            "ADVANTAGE: No moving parts at high temp, Direct conversion"
        ]
    },
    {
        id: 5,
        title: "5. MHD Generator Types",
        frontText: "Open Cycle vs Closed Cycle",
        frontImage: "/mhd_systems_diagram.png",
        backTitle: "MHD Types",
        importance: "high",
        backContent: [
            "OPEN CYCLE MHD:",
            "  → Fossil fuel combustion → Seeded exhaust gas → MHD → Stack",
            "  → Exhaust heat → Steam turbine (bottoming cycle) → Combined 60%+",
            "CLOSED CYCLE MHD:",
            "  → Inert gas (He, Ar) seeded with Cs → MHD → Heat exchanger → Recirculate",
            "  → Nuclear or solar heat source",
            "COMPARISON: Open cycle - simpler, pollution; Closed - complex, cleaner"
        ]
    },
    {
        id: 6,
        title: "6. MHD Performance & Limitations",
        frontText: "Efficiency & Challenges",
        backTitle: "MHD Analysis",
        importance: "medium",
        backContent: [
            "EFFICIENCY: MHD alone: 20-25%, Combined with steam: 55-60%",
            "⚡ ADVANTAGES: High efficiency, Direct conversion, No turbine blades",
            "❌ LIMITATIONS:",
            "  → Extremely high temperatures required (2500+ K)",
            "  → Electrode erosion and material degradation",
            "  → Seed recovery complexity and cost",
            "  → Superconducting magnets for stronger fields → Expensive",
            "  → Still experimental, not commercially viable"
        ]
    },
    {
        id: 7,
        title: "7. Fuel Cell - Principle & Types",
        frontText: "Electrochemical Energy Conversion",
        frontImage: "/fuel_cell_reaction_diagram.png",
        backTitle: "Fuel Cell Basics",
        importance: "high",
        backContent: [
            "PRINCIPLE: H₂ + ½O₂ → H₂O + Electricity + Heat (Reverse electrolysis)",
            "ANODE: H₂ → 2H⁺ + 2e⁻ (Oxidation)",
            "CATHODE: ½O₂ + 2H⁺ + 2e⁻ → H₂O (Reduction)",
            "TYPES BY ELECTROLYTE:",
            "  AFC (Alkaline): KOH electrolyte, 60-90°C, Space missions",
            "  PEMFC (Proton Exchange): Polymer membrane, 60-80°C, Vehicles",
            "  PAFC (Phosphoric Acid): H₃PO₄, 150-200°C, Stationary power"
        ]
    },
    {
        id: 8,
        title: "8. Fuel Cell Types (Continued)",
        frontText: "High Temperature Fuel Cells",
        frontImage: "/fuel_cell_reaction_diagram.png",
        backTitle: "HT Fuel Cell Types",
        importance: "high",
        backContent: [
            "MCFC (Molten Carbonate Fuel Cell):",
            "  → Electrolyte: Li₂CO₃-K₂CO₃ at 650°C",
            "  → Can use CO as fuel, internal reforming",
            "  → Applications: Large stationary power (MW scale)",
            "SOFC (Solid Oxide Fuel Cell):",
            "  → Electrolyte: Yttria-stabilized Zirconia (YSZ) at 800-1000°C",
            "  → Highest efficiency 60%+, can use natural gas directly",
            "  → Applications: APU, Combined heat & power, Grid power"
        ]
    },
    {
        id: 9,
        title: "9. Fuel Cell vs Battery",
        frontText: "Energy Conversion vs Storage",
        frontImage: "/comparison_fc_vs_battery.png",
        backTitle: "Comparison",
        importance: "medium",
        backContent: [
            "| Parameter | Fuel Cell | Battery |",
            "| System | OPEN (continuous fuel) | CLOSED (stored) |",
            "| Recharging | Refuel (fast) | Electrical (slow) |",
            "| Capacity | Fuel tank size | Electrode mass |",
            "| Efficiency | 40-60% | 80-90% (round-trip) |",
            "| Life | Longer (10,000+ hrs) | Cycle degradation |",
            "| Energy Density | Higher (Wh/kg) | Lower |"
        ]
    },
    {
        id: 10,
        title: "10. Fuel Cell Limitations",
        frontText: "Challenges & Future",
        backTitle: "Limitations",
        importance: "medium",
        backContent: [
            "💰 HIGH COST: Platinum catalyst ($30-50/g), ~$500/kW vs $50/kW for ICE",
            "💧 HYDROGEN INFRASTRUCTURE: Production, storage, distribution lacking",
            "⚡ HYDROGEN PRODUCTION: 95% from fossil fuels (grey H₂), Green H₂ expensive",
            "🌡️ OPERATING TEMP: PEM needs pure H₂, HT cells have startup time",
            "⏱️ DURABILITY: Membrane/electrode degradation, 5000-10000 hr life",
            "📦 STORAGE: H₂ tanks heavy (350-700 bar) or cryogenic",
            "FUTURE: Green hydrogen economy, Cost reduction through scale"
        ]
    }
];
