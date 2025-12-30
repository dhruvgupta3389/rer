import { type FlashcardData } from '../components/Flashcard';

export const dbmsUnit1Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Database System vs File System",
        frontText: "Why do we need DBMS?",
        backTitle: "Comparison",
        importance: "high",
        backContent: [
            "📂 FILE SYSTEM: Data stored in OS files.",
            "  • Redundancy: Duplicate data",
            "  • Inconsistency: Data mismatch",
            "  • Isolation: Hard to link data",
            "🗄️ DBMS: Centralized software to manage data.",
            "  • Controlled Redundancy",
            "  • Consistency & Integrity",
            "  • Security & Sharing",
            "⚡ AKTU: Compare File System vs DBMS limits"
        ]
    },
    {
        id: 2,
        title: "2. Database Architecture & Abstraction",
        frontText: "Three-Schema Architecture",
        backTitle: "Abstraction Levels",
        importance: "high",
        backContent: [
            "🏗️ PHYSICAL Level: How data is stored (lowest).",
            "🧠 LOGICAL/CONCEPTUAL Level: What data is stored & relationships.",
            "👀 VIEW/EXTERNAL Level: How users see data (highest).",
            "🎯 GOAL: Data Independence.",
            "⚡ AKTU: Draw 3-Tier Architecture, Physical vs Logical Independence"
        ]
    },
    {
        id: 3,
        title: "3. Data Independence",
        frontText: "Insulation between programs and data",
        backTitle: "Types of Independence",
        importance: "high",
        backContent: [
            "🔄 LOGICAL Data Independence:",
            "  • Change Conceptual schema without changing External views.",
            "  • E.g., Adding a new field doesn't break app UI.",
            "💾 PHYSICAL Data Independence:",
            "  • Change Internal schema without changing Conceptual.",
            "  • E.g., Changing from HDD to SSD or changing indexing.",
            "⚡ AKTU: Define and compare both types"
        ]
    },
    {
        id: 4,
        title: "4. Data Models",
        frontText: "How we perceive data",
        backTitle: "Types of Data Models",
        importance: "medium",
        backContent: [
            "🗺️ HIERARCHICAL: Tree structure (Parent-Child).",
            "🕸️ NETWORK: Graph structure (Many-to-Many).",
            "📊 RELATIONAL: Tables (Relations) - Most common.",
            "🧬 ER MODEL: Conceptual design (Entities & Relationships).",
            "🧩 OBJECT-ORIENTED: Objects, classes, inheritance.",
            "⚡ AKTU: List types, explain Relational vs ER"
        ]
    },
    {
        id: 5,
        title: "5. ER Model Concepts",
        frontText: "Building Blocks of ER Diagrams",
        backTitle: "ER Components",
        importance: "high",
        backContent: [
            "🟥 ENTITY: Real-world object (Student, Dept). Rectangle.",
            "⚪ ATTRIBUTE: Property (Name, RollNo). Ellipse.",
            "  • Simple vs Composite (Address)",
            "  • Single-valued vs Multi-valued (Phone numbers)",
            "  • Derived (Age from DOB)",
            "🔷 RELATIONSHIP: Association. Diamond.",
            "⚡ AKTU: Draw symbols for each"
        ]
    },
    {
        id: 6,
        title: "6. Keys in DBMS",
        frontText: "Uniquely identifying records",
        backTitle: "Types of Keys",
        importance: "high",
        backContent: [
            "🔑 SUPER KEY: Set of attributes that uniquely identify tuple.",
            "🔑 CANDIDATE KEY: Minimal Super Key (no redundant attributes).",
            "🔑 PRIMARY KEY: Elected Candidate Key (Not Null). Unique ID.",
            "🔑 FOREIGN KEY: Links to PK of another table (Referential Integrity).",
            "⚡ AKTU Very Important: Primary vs Candidate Key definition"
        ]
    },
    {
        id: 7,
        title: "7. Constraints & Cardinality",
        frontText: "Rules of Relationships",
        backTitle: "Mapping Constraints",
        importance: "medium",
        backContent: [
            "🔢 CARDINALITY RATIOS:",
            "  • 1:1 (One-to-One): Manager manages 1 Dept.",
            "  • 1:N (One-to-Many): Dept has N Employees.",
            "  • M:N (Many-to-Many): Students enroll in Courses.",
            "🛑 PARTICIPATION:",
            "  • Total: Double line (Every entity must participate).",
            "  • Partial: Single line.",
            "⚡ AKTU: Explain 1:N vs M:N with diagram"
        ]
    },
    {
        id: 8,
        title: "8. Extended ER Features",
        frontText: "Advanced Modeling Concepts",
        backTitle: "Generic/Specific",
        importance: "high",
        backContent: [
            "🔼 GENERALIZATION (Bottom-up):",
            "  • Combining low-level entities (Car, Truck) into high-level (Vehicle).",
            "🔽 SPECIALIZATION (Top-down):",
            "  • Breaking Entity (Employee) into sub-groups (Tester, Dev).",
            "📦 AGGREGATION:",
            "  • Treating a relationship as an entity itself.",
            "⚡ AKTU: Differentiate Generalization vs Specialization"
        ]
    },
    {
        id: 9,
        title: "9. Reduction of ER to Tables",
        frontText: "Converting Conceptual to Logical",
        backTitle: "Mapping Rules",
        importance: "high",
        backContent: [
            "STRONG Entity → Table (Attribs = cols).",
            "WEAK Entity → Table (Foreign Key from owner + Partial key).",
            "1:1 Relation → Add FK to one table.",
            "1:N Relation → Add FK to 'N' side table.",
            "M:N Relation → Create NEW table with PKs of both as FKs.",
            "Multi-valued Attribute → Create NEW table.",
            "⚡ AKTU: Given an ER diagram, convert to tables"
        ]
    }
];
