import { type FlashcardData } from '../components/Flashcard';

export const unit2Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Solar Radiation Fundamentals",
        frontText: "Understanding Solar Irradiance",
        // frontImage: "/solar_radiation.png", // TODO: Generate
        backTitle: "Solar Radiation Basics",
        importance: "medium",
        backContent: [
            "SOLAR CONSTANT: 1367 W/m² (outside atmosphere)",
            "EARTH SURFACE: ~1000 W/m² (at sea level, clear day)",
            "TYPES: Direct (DNI), Diffuse (scattered), Global = Direct + Diffuse",
            "AIR MASS (AM): AM0 (space), AM1 (sun overhead), AM1.5 (standard test)",
            "PEAK SUN HOURS: Equivalent hours of 1000 W/m² → 4-6 hrs/day in India",
            "SOLAR INSOLATION: kWh/m²/day → Determines plant sizing"
        ]
    },
    {
        id: 2,
        title: "2. Flat Plate Collector - Components",
        frontText: "Construction & Parts",
        // frontImage: "/flat_plate_collector.png", // TODO: Generate
        backTitle: "FPC Components",
        importance: "high",
        backContent: [
            "🔲 ABSORBER PLATE: Copper/Aluminum, black coating (α > 0.9)",
            "🔄 FLOW TUBES: Risers + Headers, carry heat transfer fluid",
            "🧊 INSULATION: Mineral wool/glass fiber at back & sides",
            "🪟 GLAZING: Tempered glass (1-2 covers), τ > 0.9, reduces convection loss",
            "📦 CASING: GI/Aluminum box, weatherproof",
            "SELECTIVE COATING: High absorptance (α), low emittance (ε) → Black Chrome, TiNOx",
            "SIZE: 1m × 2m typical, 40-70 liters/day hot water per m²"
        ]
    },
    {
        id: 3,
        title: "3. Flat Plate Collector - Performance",
        frontText: "Efficiency & Heat Transfer",
        // frontImage: "/fpc_performance.png", // TODO: Generate
        backTitle: "FPC Performance",
        importance: "high",
        backContent: [
            "EFFICIENCY: η = Qu / (Ac × G) = FR[τα - UL(Ti-Ta)/G]",
            "FR: Heat Removal Factor (0.7-0.9)",
            "τα: Transmittance-Absorptance product (~0.8)",
            "UL: Overall heat loss coefficient (4-8 W/m²K)",
            "STAGNATION TEMP: 150-200°C (when no flow)",
            "OPERATING TEMP: 40-80°C (water heating)",
            "FLOW RATE: 0.01-0.02 kg/s per m² collector area"
        ]
    },
    {
        id: 4,
        title: "4. Concentrating Collectors - Types",
        frontText: "Focusing Solar Collectors",
        // frontImage: "/concentrating_collectors.png", // TODO: Generate
        backTitle: "Concentrating Collector Types",
        importance: "medium",
        backContent: [
            "CONCENTRATION RATIO (C): Aperture Area / Receiver Area",
            "PARABOLIC TROUGH: C = 30-80, Line focus, 1-axis tracking, 300-400°C",
            "PARABOLIC DISH: C = 1000-3000, Point focus, 2-axis tracking, 500-1000°C",
            "LINEAR FRESNEL: C = 10-40, Flat mirrors, cheaper, 250-300°C",
            "HELIOSTAT (Power Tower): C = 500-1500, Central receiver, 500-1000°C",
            "TRACKING: Essential for concentrators, Single-axis (E-W) or Dual-axis"
        ]
    },
    {
        id: 5,
        title: "5. Parabolic Trough vs Parabolic Dish",
        frontText: "Comparison of Concentrators",
        // frontImage: "/trough_vs_dish.png", // TODO: Generate
        backTitle: "Comparison",
        importance: "medium",
        backContent: [
            "| Feature | Parabolic Trough | Parabolic Dish |",
            "| Focus | Line focus | Point focus |",
            "| Concentration | 30-80× | 1000-3000× |",
            "| Temperature | 300-400°C | 500-1000°C |",
            "| Tracking | 1-axis | 2-axis |",
            "| Efficiency | 15-20% | 25-30% |",
            "| Application | Large power plants | Distributed generation |"
        ]
    },
    {
        id: 6,
        title: "6. Solar Thermal Power Plants",
        frontText: "CSP Technology & Types",
        // frontImage: "/solar_thermal_plant.png", // TODO: Generate
        backTitle: "Solar Thermal Plants",
        importance: "high",
        backContent: [
            "CSP: Concentrated Solar Power → Heat → Steam → Turbine → Electricity",
            "PARABOLIC TROUGH PLANT: Most mature, 80% of global CSP (e.g., SEGS, USA)",
            "POWER TOWER: Heliostat field + Central receiver (e.g., Ivanpah, USA)",
            "LINEAR FRESNEL: Cheaper alternative, simpler mirrors",
            "DISH-STIRLING: Highest efficiency ~30%, modular, standalone",
            "HEAT TRANSFER FLUID: Synthetic oil, Molten salt, Water/Steam",
            "INDIA: National Solar Mission targets 10 GW CSP by 2030"
        ]
    },
    {
        id: 7,
        title: "7. Thermal Energy Storage",
        frontText: "Storing Solar Heat",
        // frontImage: "/thermal_storage.png", // TODO: Generate
        backTitle: "TES Systems",
        importance: "medium",
        backContent: [
            "PURPOSE: Extend operation beyond daylight hours, dispatch flexibility",
            "SENSIBLE HEAT: Water tanks, Rock bed, Molten salt → ΔT × m × Cp",
            "LATENT HEAT (PCM): Phase change materials → Melting/Freezing → High density",
            "THERMOCHEMICAL: Reversible chemical reactions → Highest density",
            "MOLTEN SALT: NaNO₃-KNO₃ (60:40), 290-565°C, 6-8 hrs storage",
            "ADVANTAGES: Grid stability, Baseload capability, Higher capacity factor",
            "Example: Gemasolar (Spain) - 15 hrs storage, 24/7 operation possible"
        ]
    },
    {
        id: 8,
        title: "8. Solar Heating & Cooling",
        frontText: "Thermal Applications",
        backTitle: "Applications",
        importance: "normal",
        backContent: [
            "WATER HEATING: Residential (100-300 LPD) & Industrial (Process heat)",
            "SPACE HEATING: Passive (building design) & Active (FPC + ducts)",
            "SPACE COOLING: Absorption chiller (LiBr-H₂O or NH₃-H₂O)",
            "  → Solar heat drives absorption cycle (COP: 0.6-0.8)",
            "DRYING: Solar dryers for agricultural products (grains, fruits)",
            "COOKING: Solar cookers (Box type, Parabolic), 200-300°C",
            "DESALINATION: Solar still, Multi-effect distillation"
        ]
    },
    {
        id: 9,
        title: "9. Limitations of Solar Thermal",
        frontText: "Challenges & Drawbacks",
        backTitle: "Limitations",
        importance: "medium",
        backContent: [
            "☁️ WEATHER DEPENDENT: Clouds, dust, haze reduce performance",
            "🌙 NO NIGHT OPERATION: Without storage, plant shuts down",
            "💧 WATER INTENSIVE: Steam cycle cooling, mirror cleaning",
            "📍 SITE SPECIFIC: Needs high DNI regions (> 5 kWh/m²/day)",
            "🏗️ LARGE FOOTPRINT: 5-10 acres/MW for CSP plants",
            "💰 HIGH CAPEX: $4000-6000/kW vs $1000/kW for PV",
            "🔧 MAINTENANCE: Tracking systems, HTF degradation, mirror cleaning"
        ]
    }
];
