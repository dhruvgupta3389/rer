import { type FlashcardData } from '../components/Flashcard';

export const dwmUnit2Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Warehousing Strategy",
        frontText: "Approaches to building DW",
        backTitle: "Strategy Types",
        importance: "medium",
        backContent: [
            "🏢 ENTERPRISE DW: Centralized, organization-wide.",
            "🏬 DATA MARTS: Department-specific (Sales, HR).",
            "🔗 HYBRID APPROACH: Enterprise DW + Data Marts.",
            "📈 TOP-DOWN (Inmon): Build enterprise DW first.",
            "📉 BOTTOM-UP (Kimball): Build data marts first, integrate later.",
            "⚡ AKTU: Compare Inmon vs Kimball approach"
        ]
    },
    {
        id: 2,
        title: "2. Warehouse Management Processes",
        frontText: "Ongoing DW operations",
        backTitle: "Support Processes",
        importance: "medium",
        backContent: [
            "🔄 DATA REFRESH: Periodic updates from sources.",
            "📋 METADATA MANAGEMENT: Maintain data dictionary.",
            "💾 BACKUP & RECOVERY: Disaster protection.",
            "📊 MONITORING: Performance tracking.",
            "🧹 DATA QUALITY: Cleaning & validation.",
            "⚡ AKTU: Why is metadata management important?"
        ]
    },
    {
        id: 3,
        title: "3. Planning & Implementation",
        frontText: "Key considerations",
        backTitle: "Planning Factors",
        importance: "high",
        backContent: [
            "📋 BUSINESS REQUIREMENTS: What questions to answer?",
            "💰 COST ESTIMATION: Hardware, software, personnel.",
            "📈 SCALABILITY PLANNING: Future growth.",
            "⏰ TIMELINE: Realistic milestones.",
            "👥 STAKEHOLDERS: Business users, IT, management.",
            "⚡ AKTU: Factors in DW planning"
        ]
    },
    {
        id: 4,
        title: "4. Hardware & OS for DW",
        frontText: "Infrastructure requirements",
        backTitle: "Hardware Needs",
        importance: "medium",
        backContent: [
            "💾 HIGH STORAGE CAPACITY: TBs to PBs.",
            "⚡ HIGH I/O THROUGHPUT: Fast disk access.",
            "🖥️ POWERFUL CPUs: Complex calculations.",
            "🧠 LARGE RAM: Query caching.",
            "🐧 UNIX/LINUX: Preferred for stability.",
            "⚡ AKTU: Hardware requirements for DW"
        ]
    },
    {
        id: 5,
        title: "5. Client/Server Computing Model",
        frontText: "Distributed DW access",
        frontImage: "/dwm/client_server_model.png",
        backTitle: "Client/Server Architecture",
        importance: "high",
        backContent: [
            "💻 CLIENT: OLAP tools, dashboards, reports.",
            "🖥️ SERVER: DW database, query processing.",
            "🔗 NETWORK: Connects clients to server.",
            "📊 DISTRIBUTED ACCESS: Multiple users simultaneously.",
            "🔒 SECURITY: Authentication at each tier.",
            "⚡ AKTU: Explain 3-tier DW architecture"
        ]
    },
    {
        id: 6,
        title: "6. Parallel Processors & Clusters",
        frontText: "High-performance computing",
        frontImage: "/dwm/smp_mpp_comparison.png",
        backTitle: "Parallel Systems",
        importance: "high",
        backContent: [
            "🔧 SMP (Symmetric Multiprocessing): Shared memory.",
            "⚡ MPP (Massively Parallel): Independent nodes.",
            "🔗 CLUSTERS: Networked commodity servers.",
            "📈 BENEFITS:",
            "  • Faster query execution",
            "  • Scalability",
            "  • Fault tolerance",
            "⚡ AKTU: Compare SMP vs MPP"
        ]
    },
    {
        id: 7,
        title: "7. Distributed DBMS Implementation",
        frontText: "Data across multiple sites",
        backTitle: "Distribution Concepts",
        importance: "medium",
        backContent: [
            "✂️ DATA FRAGMENTATION:",
            "  • Horizontal (rows)",
            "  • Vertical (columns)",
            "📋 REPLICATION: Copies at multiple sites.",
            "🔍 LOCATION TRANSPARENCY: Users unaware of data location.",
            "⚡ AKTU: Types of fragmentation"
        ]
    },
    {
        id: 8,
        title: "8. Warehousing Software",
        frontText: "Tools for DW",
        backTitle: "Software Categories",
        importance: "medium",
        backContent: [
            "🔄 ETL TOOLS: Informatica, Talend, SSIS.",
            "📊 OLAP SERVERS: Oracle OLAP, MS SSAS.",
            "📈 REPORTING TOOLS: Tableau, Power BI, Jasper.",
            "🗄️ DW DATABASES: Teradata, Snowflake, Redshift.",
            "⚡ AKTU: List DW software tools"
        ]
    },
    {
        id: 9,
        title: "9. Warehouse Schema Design",
        frontText: "Designing fact & dimension tables",
        backTitle: "Schema Design Concepts",
        importance: "high",
        backContent: [
            "📊 FACT TABLES: Central, contains measures (Sales, Qty).",
            "📐 DIMENSION TABLES: Descriptive (Product, Time, Customer).",
            "🎯 GRANULARITY: Level of detail (Daily vs Monthly).",
            "🔑 SURROGATE KEYS: System-generated, not business keys.",
            "📏 SLOWLY CHANGING DIMENSIONS (SCD): Handle updates.",
            "⚡ AKTU Important: Explain fact vs dimension tables"
        ]
    }
];
