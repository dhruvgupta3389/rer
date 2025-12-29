import { type FlashcardData } from '../components/Flashcard';

export const unit4Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Thermoelectric Conversion",
        frontText: "Seebeck Effect & Applications",
        // frontImage: "/thermoelectric_diagram.png", // TODO: Generate
        backTitle: "Thermoelectric Basics",
        importance: "medium",
        backContent: [
            "SEEBECK EFFECT: Temperature difference → EMF (discovered 1821)",
            "EMF = α × ΔT, where α = Seebeck coefficient (μV/K)",
            "MATERIALS: Bi₂Te₃ (low T), PbTe (medium T), SiGe (high T)",
            "FIGURE OF MERIT: ZT = α²σT/κ (higher = better)",
            "  → α: Seebeck coeff, σ: electrical conductivity, κ: thermal conductivity",
            "EFFICIENCY: 5-10% (lower than mechanical heat engines)",
            "APPLICATIONS: RTG (space), Waste heat recovery, Portable coolers"
        ]
    },
    {
        id: 2,
        title: "2. Thermionic Conversion",
        frontText: "Direct Heat to Electricity",
        // frontImage: "/thermionic_diagram.png", // TODO: Generate
        backTitle: "Thermionic Basics",
        importance: "medium",
        backContent: [
            "PRINCIPLE: Hot cathode emits electrons → Collected at cold anode",
            "WORK FUNCTION (φ): Energy to remove electron from surface",
            "RICHARDSON-DUSHMAN: J = AT²exp(-φ/kT) (current density)",
            "CATHODE: Tungsten, Molybdenum, Tantalum (2000-2500 K)",
            "ANODE: Lower work function, cooled (600-1000 K)",
            "EFFICIENCY: 10-20%, limited by space charge effect",
            "APPLICATIONS: Nuclear/solar heat sources, compact power"
        ]
    },
    {
        id: 3,
        title: "3. Thermoelectric/Thermionic Comparison",
        frontText: "Direct Conversion Methods",
        backTitle: "Comparison",
        importance: "normal",
        backContent: [
            "| Parameter | Thermoelectric | Thermionic |",
            "| Principle | Seebeck effect | Electron emission |",
            "| Temperature | 200-600°C | 1500-2500°C |",
            "| Efficiency | 5-10% | 10-20% |",
            "| Moving parts | None | None |",
            "| Reliability | Very high | High |",
            "| Power level | mW to kW | kW to MW |",
            "COMMON: Both are direct conversion, no moving parts, quiet, reliable"
        ]
    },
    {
        id: 4,
        title: "4. Wind Power Fundamentals",
        frontText: "Understanding Wind Energy",
        // frontImage: "/wind_power_basics.png", // TODO: Generate
        backTitle: "Wind Energy Basics",
        importance: "high",
        backContent: [
            "POWER: P = ½ρAV³, where ρ = air density, A = swept area, V = velocity",
            "POWER ∝ V³ → Double wind speed = 8× power!",
            "WIND ORIGIN: Solar heating → Pressure differences → Air movement",
            "GLOBAL PATTERNS: Trade winds, Westerlies, Monsoons",
            "LOCAL EFFECTS: Sea breeze, Mountain-valley winds, Urban heat island",
            "WIND CLASSES: Class 1 (poor) to Class 7 (excellent)",
            "CUT-IN: 3-4 m/s, RATED: 12-15 m/s, CUT-OUT: 25 m/s"
        ]
    },
    {
        id: 5,
        title: "5. Site Selection Criteria",
        frontText: "Where to Install Wind Turbines",
        backTitle: "Site Selection",
        importance: "medium",
        backContent: [
            "🌬️ WIND RESOURCE: Average speed > 6 m/s at hub height",
            "📊 WIND DATA: At least 1 year measurement, Wind rose analysis",
            "🏔️ TERRAIN: Flat/gentle slope, Ridge tops, Coastal areas preferred",
            "🔌 GRID ACCESS: Proximity to transmission lines, Substation",
            "🛤️ ACCESSIBILITY: Roads for heavy equipment transport",
            "🏠 SETBACK: Distance from habitations (noise, shadow flicker)",
            "🦅 ENVIRONMENTAL: Bird migration paths, Protected areas"
        ]
    },
    {
        id: 6,
        title: "6. Momentum Theory (Betz Limit)",
        frontText: "Theoretical Maximum Efficiency",
        // frontImage: "/betz_limit_diagram.png", // TODO: Generate
        backTitle: "Betz Limit",
        importance: "high",
        backContent: [
            "ACTUATOR DISK MODEL: Wind turbine as ideal energy extractor",
            "UPSTREAM: V∞ (freestream), DOWNSTREAM: wake velocity V₂",
            "AXIAL INDUCTION FACTOR: a = (V∞ - V₁)/V∞",
            "POWER COEFFICIENT: Cp = 4a(1-a)²",
            "BETZ LIMIT: Maximum Cp = 16/27 = 0.593 (59.3%) when a = 1/3",
            "PHYSICAL MEANING: Cannot extract 100% - air must exit!",
            "PRACTICAL: Modern turbines achieve Cp = 0.45-0.50"
        ]
    },
    {
        id: 7,
        title: "7. Wind Turbine Classification",
        frontText: "HAWT vs VAWT",
        // frontImage: "/wind_turbine_types.png", // TODO: Generate
        backTitle: "Rotor Types",
        importance: "high",
        backContent: [
            "HAWT (Horizontal Axis Wind Turbine):",
            "  → Rotor axis parallel to ground, faces wind",
            "  → 2 or 3 blades, higher efficiency (40-50%)",
            "  → Dominant type (95%+ of installations)",
            "VAWT (Vertical Axis Wind Turbine):",
            "  → Rotor axis perpendicular to ground",
            "  → Savonius (drag-based): Simple, low efficiency",
            "  → Darrieus (lift-based): Eggbeater shape, self-starting issues"
        ]
    },
    {
        id: 8,
        title: "8. HAWT Components",
        frontText: "Wind Turbine Anatomy",
        // frontImage: "/hawt_components.png", // TODO: Generate
        backTitle: "Components",
        importance: "high",
        backContent: [
            "🔄 ROTOR: Blades + Hub, captures wind energy",
            "⚙️ GEARBOX: Steps up rotation (15-20 rpm → 1500+ rpm)",
            "⚡ GENERATOR: Converts mechanical to electrical (Induction/Synchronous)",
            "🎯 YAW SYSTEM: Rotates nacelle to face wind",
            "⬆️ PITCH SYSTEM: Adjusts blade angle for power control",
            "🏗️ TOWER: Steel tubular, 80-150m height",
            "🔌 POWER ELECTRONICS: Converter, transformer, grid connection"
        ]
    },
    {
        id: 9,
        title: "9. Wind Augmentation & Concentrators",
        frontText: "Enhancing Wind Power",
        backTitle: "Augmentation Methods",
        importance: "normal",
        backContent: [
            "DIFFUSER AUGMENTED: Shroud around rotor → Accelerates flow",
            "CONCENTRATORS: Funneling structures → Increase velocity",
            "VENTURI EFFECT: Constriction → Higher local velocity",
            "BUILDING INTEGRATED: Tall buildings channel wind → BAWT",
            "THEORETICAL: Can exceed Betz limit for rotor area (not total)",
            "CHALLENGES: Added cost, structural loads, limited scaling",
            "PRACTICAL USE: Small-scale urban applications mainly"
        ]
    },
    {
        id: 10,
        title: "10. Wind Energy Performance & Limits",
        frontText: "Capacity Factor & Challenges",
        backTitle: "Performance Analysis",
        importance: "medium",
        backContent: [
            "CAPACITY FACTOR: Actual output / Rated output × 100",
            "  → Onshore: 25-35%, Offshore: 35-50%",
            "❌ LIMITATIONS:",
            "  → Intermittency: Variable wind → Grid balancing needed",
            "  → Visual impact: 'NIMBY' (Not In My Backyard)",
            "  → Noise: Mechanical + Aerodynamic (blade swish)",
            "  → Bird/Bat mortality: Especially at migration routes",
            "  → High capital cost: $1200-1700/kW installed"
        ]
    }
];
