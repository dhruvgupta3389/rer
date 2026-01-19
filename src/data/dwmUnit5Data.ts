import { type FlashcardData } from '../components/Flashcard';

export const dwmUnit5Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Data Visualization",
        frontText: "Presenting data graphically",
        backTitle: "Visualization Types",
        importance: "medium",
        backContent: [
            "📊 PURPOSE: Convert data to visual format for insights.",
            "📈 TYPES:",
            "  • Bar charts, Pie charts, Line graphs",
            "  • Histograms, Scatter plots",
            "  • Heatmaps, Tree maps",
            "  • Dashboards (interactive)",
            "🎯 BENEFITS: Pattern recognition, quick understanding.",
            "⚡ AKTU: Role of visualization in DW"
        ]
    },
    {
        id: 2,
        title: "2. OLAP Functions & Tools",
        frontText: "Analytical operations",
        frontImage: "/dwm/olap_cube_operations.png",
        backTitle: "OLAP Operations",
        importance: "high",
        backContent: [
            "⬆️ ROLL-UP: Aggregate data (City → Country).",
            "⬇️ DRILL-DOWN: Decompose data (Year → Month).",
            "🔪 SLICE: Fix one dimension (Region = 'North').",
            "🎲 DICE: Select subset on multiple dimensions.",
            "🔄 PIVOT: Rotate data cube axes.",
            "🔀 DRILL-ACROSS: Query across multiple fact tables.",
            "⚡ AKTU Very Important: Explain all OLAP operations"
        ]
    },
    {
        id: 3,
        title: "3. OLAP Servers - ROLAP",
        frontText: "Relational OLAP",
        frontImage: "/dwm/rolap_molap_holap.png",
        backTitle: "ROLAP Details",
        importance: "high",
        backContent: [
            "🗄️ ROLAP: Uses relational database to store DW.",
            "✅ ADVANTAGES:",
            "  • Handles large data volumes",
            "  • Uses existing RDBMS technology",
            "  • Scalable",
            "❌ DISADVANTAGES:",
            "  • Slower query performance",
            "  • Complex SQL for OLAP",
            "📊 EXAMPLE: Oracle, SQL Server.",
            "⚡ AKTU: When to use ROLAP?"
        ]
    },
    {
        id: 4,
        title: "4. OLAP Servers - MOLAP",
        frontText: "Multidimensional OLAP",
        backTitle: "MOLAP Details",
        importance: "high",
        backContent: [
            "🧊 MOLAP: Stores data in multidimensional arrays.",
            "✅ ADVANTAGES:",
            "  • Very fast query response",
            "  • Pre-computed aggregates",
            "  • Optimized for analysis",
            "❌ DISADVANTAGES:",
            "  • Limited data capacity",
            "  • Sparse data issues (empty cells)",
            "📊 EXAMPLE: Cognos, Essbase.",
            "⚡ AKTU: When to use MOLAP?"
        ]
    },
    {
        id: 5,
        title: "5. OLAP Servers - HOLAP",
        frontText: "Hybrid OLAP",
        backTitle: "HOLAP Details",
        importance: "medium",
        backContent: [
            "🔗 HOLAP: Combines ROLAP and MOLAP.",
            "📊 APPROACH:",
            "  • Detailed data in ROLAP",
            "  • Aggregates in MOLAP",
            "✅ ADVANTAGES: Best of both worlds.",
            "❌ DISADVANTAGES: Complex to implement.",
            "⚡ AKTU: Compare ROLAP vs MOLAP vs HOLAP"
        ]
    },
    {
        id: 6,
        title: "6. Security, Backup & Recovery",
        frontText: "Protecting DW data",
        backTitle: "Security Measures",
        importance: "high",
        backContent: [
            "🔐 ACCESS CONTROL: Role-based permissions.",
            "🔒 DATA ENCRYPTION: Protect sensitive data.",
            "👁️ AUDITING: Track who accessed what.",
            "💾 BACKUP: Regular snapshots.",
            "🔄 RECOVERY: Restore from backup.",
            "🌍 DISASTER RECOVERY: Offsite replication.",
            "⚡ AKTU: Explain DW security measures"
        ]
    },
    {
        id: 7,
        title: "7. Tuning & Testing DW",
        frontText: "Optimizing performance",
        backTitle: "DW Optimization",
        importance: "medium",
        backContent: [
            "⚡ QUERY OPTIMIZATION: Indexes, materialized views.",
            "📊 LOAD TESTING: Simulate heavy usage.",
            "🔍 PERFORMANCE TESTING: Measure response times.",
            "📈 TUNING AREAS:",
            "  • ETL performance",
            "  • Query execution",
            "  • Storage optimization",
            "⚡ AKTU: How to tune DW performance?"
        ]
    },
    {
        id: 8,
        title: "8. Warehousing Applications",
        frontText: "Real-world uses",
        backTitle: "Application Areas",
        importance: "high",
        backContent: [
            "💼 BUSINESS INTELLIGENCE: Reporting, dashboards.",
            "💰 FINANCE: Risk analysis, fraud detection.",
            "🏥 HEALTHCARE: Patient analytics, research.",
            "🛒 RETAIL: Sales analysis, inventory.",
            "📡 TELECOM: Customer churn, network analysis.",
            "🏭 MANUFACTURING: Supply chain, quality.",
            "⚡ AKTU: List DW applications in different domains"
        ]
    },
    {
        id: 9,
        title: "9. Recent Trends - Web & Spatial Mining",
        frontText: "Modern mining techniques",
        frontImage: "/dwm/web_mining_types.png",
        backTitle: "Mining Trends",
        importance: "high",
        backContent: [
            "🌐 WEB MINING:",
            "  • Web Content Mining (text, images)",
            "  • Web Structure Mining (links, graphs)",
            "  • Web Usage Mining (user behavior)",
            "🗺️ SPATIAL MINING: Geographic data patterns.",
            "⏰ TEMPORAL MINING: Time-series patterns.",
            "☁️ CLOUD DATA WAREHOUSING: Snowflake, BigQuery.",
            "⚡ AKTU Important: Explain types of Web Mining"
        ]
    }
];
