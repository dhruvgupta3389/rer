import { type FlashcardData } from '../components/Flashcard';

export const dwmUnit1Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Data Warehouse - Definition",
        frontText: "What is a Data Warehouse?",
        backTitle: "DW Characteristics",
        importance: "high",
        backContent: [
            "📦 DEFINITION: Subject-oriented, integrated, time-variant, non-volatile collection of data.",
            "🎯 PURPOSE: Decision support, analysis, and reporting.",
            "📊 SUBJECT-ORIENTED: Organized around subjects (Sales, Customer).",
            "🔗 INTEGRATED: Data from multiple sources unified.",
            "⏰ TIME-VARIANT: Historical data with timestamps.",
            "🔒 NON-VOLATILE: Read-only, no frequent updates.",
            "⚡ AKTU Very Important: Define DW with 4 characteristics"
        ]
    },
    {
        id: 2,
        title: "2. Data Warehouse Components",
        frontText: "Building blocks of a DW",
        backTitle: "DW Architecture",
        importance: "high",
        backContent: [
            "📥 DATA SOURCES: Operational DBs, legacy systems, external data.",
            "🔄 ETL (Extract, Transform, Load): Core process!",
            "  • Extract: Pull from sources",
            "  • Transform: Clean, validate, convert",
            "  • Load: Insert into DW",
            "📦 STAGING AREA: Temporary storage for ETL.",
            "🗄️ DW DATABASE: Central repository.",
            "📋 METADATA REPOSITORY: Data about data.",
            "📊 OLAP / FRONT-END TOOLS: Query & analysis.",
            "⚡ AKTU: Draw DW architecture, explain ETL"
        ]
    },
    {
        id: 3,
        title: "3. Building a Data Warehouse",
        frontText: "Steps to create a DW",
        backTitle: "Implementation Steps",
        importance: "medium",
        backContent: [
            "1️⃣ Requirement Analysis: Business needs.",
            "2️⃣ Data Modeling: Design schemas.",
            "3️⃣ ETL Design: Define extraction & transformation.",
            "4️⃣ Warehouse Loading: Populate DW.",
            "5️⃣ Testing & Deployment: Validate & go live.",
            "⚡ AKTU: List steps to build DW"
        ]
    },
    {
        id: 4,
        title: "4. Warehouse Database",
        frontText: "Storage characteristics",
        backTitle: "DW Database Features",
        importance: "medium",
        backContent: [
            "📚 Stores HISTORICAL data (years of records).",
            "🔓 Uses DENORMALIZED schemas (faster reads).",
            "🔍 Supports COMPLEX analytical queries.",
            "📈 Optimized for READ-INTENSIVE operations.",
            "🚫 NOT for daily transactions (OLTP).",
            "⚡ AKTU: Why denormalized in DW?"
        ]
    },
    {
        id: 5,
        title: "5. Multiprocessor Architecture",
        frontText: "Mapping DW to parallel systems",
        backTitle: "Parallel Processing",
        importance: "medium",
        backContent: [
            "⚡ Uses PARALLEL PROCESSING for speed.",
            "🖥️ SHARED MEMORY (SMP): Single memory, multiple CPUs.",
            "💾 SHARED DISK: Separate memory, shared storage.",
            "🔗 SHARED NOTHING (MPP): Independent nodes.",
            "📈 BENEFITS: Handles large queries efficiently.",
            "⚡ AKTU: Types of parallel architectures"
        ]
    },
    {
        id: 6,
        title: "6. DBMS vs Data Warehouse",
        frontText: "Key Differences",
        backTitle: "Comparison Table",
        importance: "high",
        backContent: [
            "📊 DBMS (OLTP) | Data Warehouse (OLAP)",
            "• Current data | Historical data",
            "• Normalized | Denormalized",
            "• Frequent updates | Read-only",
            "• Transaction processing | Analytical queries",
            "• Simple queries | Complex aggregations",
            "• GB size | TB/PB size",
            "⚡ AKTU Very Important: Compare OLTP vs OLAP"
        ]
    },
    {
        id: 7,
        title: "7. Multidimensional Data Model",
        frontText: "Viewing data as cubes",
        backTitle: "Dimensions & Measures",
        importance: "high",
        backContent: [
            "🧊 Views data as DATA CUBES.",
            "📐 DIMENSIONS: Perspectives (Time, Location, Product).",
            "📏 MEASURES: Numeric values (Sales, Profit, Quantity).",
            "🎯 FACTS: Measurable events (transactions, orders).",
            "📊 Example: Sales by Region by Quarter.",
            "⚡ AKTU: Define Dimensions vs Measures"
        ]
    },
    {
        id: 8,
        title: "8. Data Cubes & OLAP Operations",
        frontText: "Multidimensional analysis",
        backTitle: "Cube Operations",
        importance: "high",
        backContent: [
            "🧊 DATA CUBE: n-dimensional array of data.",
            "⬆️ ROLL-UP: Aggregate (City → State → Country).",
            "⬇️ DRILL-DOWN: Disaggregate (Year → Quarter → Month).",
            "🔪 SLICE: Select single dimension value (Year=2024).",
            "🎲 DICE: Select range on multiple dimensions.",
            "🔄 PIVOT: Rotate cube for different view.",
            "⚡ AKTU Very Important: Explain all 5 OLAP operations"
        ]
    },
    {
        id: 9,
        title: "9. Schema Types",
        frontText: "Star, Snowflake, Fact Constellation",
        backTitle: "Schema Comparison",
        importance: "high",
        backContent: [
            "⭐ STAR SCHEMA:",
            "  • Central fact table + denormalized dimensions",
            "  • Simple, fast queries, some redundancy",
            "❄️ SNOWFLAKE SCHEMA:",
            "  • Normalized dimensions (sub-dimensions)",
            "  • Less redundancy, more joins",
            "🌌 FACT CONSTELLATION (Galaxy):",
            "  • Multiple fact tables sharing dimensions",
            "  • Complex, for multiple business processes",
            "⚡ AKTU Very Important: Draw & compare all 3 schemas"
        ]
    }
];
