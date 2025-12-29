import { type FlashcardData } from '../components/Flashcard';

export const unit5Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Biomass Resources & Availability",
        frontText: "Organic Energy Sources",
        // frontImage: "/biomass_resources.png", // TODO: Generate
        backTitle: "Biomass Sources",
        importance: "medium",
        backContent: [
            "DEFINITION: Organic matter from plants/animals - stored solar energy",
            "FOREST RESIDUES: Wood chips, sawdust, bark, logging residues",
            "AGRICULTURAL: Crop residues (straw, husks), Energy crops (switchgrass)",
            "ANIMAL WASTE: Cattle dung, poultry litter → Biogas",
            "MUNICIPAL SOLID WASTE (MSW): Organic fraction, Refuse Derived Fuel",
            "INDUSTRIAL: Bagasse (sugarcane), Black liquor (paper industry)",
            "INDIA: ~750 MT/year agricultural residue, 25% power potential"
        ]
    },
    {
        id: 2,
        title: "2. Biomass Conversion Technologies",
        frontText: "Energy Conversion Methods",
        // frontImage: "/biomass_conversion.png", // TODO: Generate
        backTitle: "Conversion Methods",
        importance: "medium",
        backContent: [
            "THERMOCHEMICAL:",
            "  → Combustion: Direct burning, steam → turbine (η: 20-30%)",
            "  → Gasification: Limited O₂ → Syngas (CO + H₂), 700-1000°C",
            "  → Pyrolysis: No O₂ → Bio-oil, char, syngas, 400-600°C",
            "BIOCHEMICAL:",
            "  → Anaerobic Digestion: Microbes → Biogas (CH₄ + CO₂)",
            "  → Fermentation: Sugars → Ethanol (C₂H₅OH)",
            "PHYSICAL: Extraction (oils), Densification (pellets, briquettes)"
        ]
    },
    {
        id: 3,
        title: "3. Biogas Production",
        frontText: "Anaerobic Digestion Process",
        // frontImage: "/biogas_production.png", // TODO: Generate
        backTitle: "Biogas Details",
        importance: "medium",
        backContent: [
            "PROCESS: Organic matter + Anaerobic bacteria → CH₄ (55-70%) + CO₂ (30-45%)",
            "STAGES: Hydrolysis → Acidogenesis → Acetogenesis → Methanogenesis",
            "FEEDSTOCK: Cattle dung (best C:N ratio 25:1), Food waste, Sewage",
            "DIGESTER TYPES: Fixed dome (Deenbandhu), Floating drum (KVIC)",
            "RETENTION TIME: 40-60 days (mesophilic, 35°C)",
            "YIELD: 1 kg dung → 0.04 m³ biogas, 1 m³ biogas ≈ 0.6 L diesel",
            "SLURRY: Rich fertilizer, replaces chemical fertilizers"
        ]
    },
    {
        id: 4,
        title: "4. OTEC - Principle & Availability",
        frontText: "Ocean Thermal Energy Conversion",
        // frontImage: "/otec_system.png", // TODO: Generate
        backTitle: "OTEC Basics",
        importance: "high",
        backContent: [
            "PRINCIPLE: Temperature difference between warm surface & cold deep water",
            "REQUIREMENT: ΔT ≥ 20°C between surface (25-28°C) and 1000m depth (4-5°C)",
            "LOCATIONS: Tropical oceans between 20°N and 20°N latitude",
            "POTENTIAL SITES: India (Lakshadweep, Andaman), Hawaii, Caribbean",
            "ENERGY DENSITY: Low (Carnot efficiency limited to ~3-4%)",
            "ADVANTAGES: Continuous (24/7), Predictable, Huge resource base",
            "DEEP WATER: Pumped from 800-1000m through CWP (Cold Water Pipe)"
        ]
    },
    {
        id: 5,
        title: "5. OTEC System Types",
        frontText: "Open, Closed & Hybrid Cycles",
        // frontImage: "/otec_system.png", // TODO: Generate
        backTitle: "OTEC Cycles",
        importance: "high",
        backContent: [
            "CLOSED CYCLE OTEC:",
            "  → Working fluid: Ammonia (NH₃), Low boiling point (-33°C)",
            "  → Warm water heats NH₃ → Vapor → Turbine → Cold water condenses",
            "  → Higher efficiency, no vacuum needed",
            "OPEN CYCLE OTEC:",
            "  → Working fluid: Seawater itself",
            "  → Warm water flash evaporates in vacuum → Turbine → Condenser",
            "  → Produces desalinated water as byproduct",
            "HYBRID: Combines both, flash + heat exchanger"
        ]
    },
    {
        id: 6,
        title: "6. OTEC Performance & Limitations",
        frontText: "Efficiency & Challenges",
        backTitle: "OTEC Analysis",
        importance: "medium",
        backContent: [
            "GROSS EFFICIENCY: ~3-5% (limited by small ΔT)",
            "NET EFFICIENCY: 1-3% (parasitic loads for pumps)",
            "❌ LIMITATIONS:",
            "  → Low temperature difference → Large heat exchangers",
            "  → Cold Water Pipe: Engineering challenge (1km+, 10m diameter)",
            "  → High capital cost: $15,000-20,000/kW",
            "  → Biofouling: Marine growth on heat exchangers",
            "  → Distance from shore: Need underwater cables/platforms"
        ]
    },
    {
        id: 7,
        title: "7. Wave Energy Principle",
        frontText: "Harnessing Ocean Waves",
        // frontImage: "/wave_tidal_energy.png", // TODO: Generate
        backTitle: "Wave Energy Basics",
        importance: "normal",
        backContent: [
            "ORIGIN: Wind → Water surface → Waves (stored wind energy)",
            "ENERGY: P = 0.5 × ρg²H²T / 4π (kW/m of wavefront)",
            "  → H: wave height, T: period",
            "GLOBAL RESOURCE: ~2 TW theoretical, concentrated at 30-60° latitude",
            "DEVICE TYPES:",
            "  → Point Absorber: Floating buoy, heave motion",
            "  → Attenuator: Long floating structure, flexing",
            "  → Oscillating Water Column (OWC): Air compression in chamber"
        ]
    },
    {
        id: 8,
        title: "8. Wave Energy Devices",
        frontText: "Conversion Technologies",
        // frontImage: "/wave_devices.png", // TODO: Generate
        backTitle: "Wave Devices",
        importance: "normal",
        backContent: [
            "OWC (Oscillating Water Column):",
            "  → Chamber open below waterline, Wells turbine on top",
            "  → Wave enters → Air compressed/expanded → Turbine rotates",
            "PELAMIS (Attenuator):",
            "  → Sea snake segments, hinged joints with hydraulic rams",
            "POINT ABSORBER (Buoy):",
            "  → Heaving buoy drives linear generator or hydraulic pump",
            "OVERTOPPING: Wave flows into elevated reservoir → Conventional turbine",
            "STATUS: Demonstration stage, 25+ MW total globally"
        ]
    },
    {
        id: 9,
        title: "9. Tidal Energy Principle",
        frontText: "Harnessing Tides",
        // frontImage: "/wave_tidal_energy.png", // TODO: Generate
        backTitle: "Tidal Energy Basics",
        importance: "normal",
        backContent: [
            "ORIGIN: Gravitational pull of Moon (and Sun) on oceans",
            "TIDAL RANGE: Difference between high and low tide",
            "  → Spring tides: Max range (Full/New moon)",
            "  → Neap tides: Min range (Quarter moons)",
            "REQUIREMENT: Tidal range > 5m for economic viability",
            "HIGH RANGE SITES: Bay of Fundy (16m), Gulf of Cambay (11m), Bristol Channel",
            "PREDICTABILITY: 100% predictable (unlike wind/solar) - major advantage"
        ]
    },
    {
        id: 10,
        title: "10. Tidal Energy Systems",
        frontText: "Barrage & Stream Technologies",
        // frontImage: "/tidal_systems.png", // TODO: Generate
        backTitle: "Tidal Systems",
        importance: "normal",
        backContent: [
            "TIDAL BARRAGE:",
            "  → Dam across estuary, sluice gates + bulb turbines",
            "  → Ebb generation: Basin fills → Empties through turbines",
            "  → Example: La Rance (France) 240 MW, Lake Sihwa (Korea) 254 MW",
            "TIDAL STREAM (In-stream):",
            "  → Underwater turbines in tidal currents (like underwater wind farm)",
            "  → No barrage needed, lower environmental impact",
            "TIDAL LAGOON: Artificial enclosure, lower impact than barrage",
            "LIMITATIONS: High cost, environmental (fish, sediment), limited sites"
        ]
    },
    {
        id: 11,
        title: "11. Waste Recycling & Energy Recovery",
        frontText: "Waste to Energy Technologies",
        // frontImage: "/waste_to_energy.png", // TODO: Generate
        backTitle: "Waste Management",
        importance: "medium",
        backContent: [
            "MSW COMPOSITION: Organic (40-50%), Paper (10-15%), Plastic (8-12%)",
            "INCINERATION: Direct combustion, mass burn or RDF, 600-1000°C",
            "  → 2500 kcal/kg → ~0.5-0.7 kWh electricity per kg",
            "GASIFICATION: Syngas production, cleaner than incineration",
            "LANDFILL GAS: CH₄ from decomposition, capture and burn",
            "PYROLYSIS: Converts plastic to fuel oil",
            "CIRCULAR ECONOMY: Reduce → Reuse → Recycle → Energy recovery → Landfill"
        ]
    }
];
