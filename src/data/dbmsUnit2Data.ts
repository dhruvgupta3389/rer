import { type FlashcardData } from '../components/Flashcard';

export const dbmsUnit2Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Relational Model Concepts",
        frontText: "Structure of Relational Databases",
        backTitle: "Key Concepts",
        importance: "medium",
        backContent: [
            "📊 RELATION: Table of values.",
            "📝 TUPLE: Row (Record).",
            "🏷️ ATTRIBUTE: Column (Field).",
            "🧩 DOMAIN: Set of atomic values.",
            "📜 SCHEMA: Design/Structure R(A1, A2... An).",
            "⚡ AKTU: Define Relation, Tuple, Degree (Audit), Cardinality (Rows)"
        ]
    },
    {
        id: 2,
        title: "2. Integrity Constraints",
        frontText: "Rules to maintain data quality",
        backTitle: "Constraints Types",
        importance: "high",
        backContent: [
            "🛡️ DOMAIN Constraint: Values must be usually atomic/valid type.",
            "🛡️ ENTITY Integrity: Primary Key cannot be NULL.",
            "🛡️ REFERENTIAL Integrity: FK value must exist in Parent table or be NULL.",
            "🛡️ KEY Constraint: PK must be unique.",
            "⚡ AKTU: Explain Entity vs Referential Integrity"
        ]
    },
    {
        id: 3,
        title: "3. Relational Algebra (Basic)",
        frontText: "Procedural Query Language",
        backTitle: "Basic Operations",
        importance: "high",
        backContent: [
            "🔍 SELECT (σ): Standard for choosing rows. σ_topic='DBMS'(Books)",
            "∏ PROJECT (π): Choosing columns. π_title,author(Books)",
            "∪ UNION: R ∪ S (Tuples in R or S)",
            "∩ INTERSECTION: R ∩ S (Tuples in both)",
            "➖ MINUS: R - S (In R but not S)",
            "✖️ CARTESIAN PRODUCT: R × S (All combinations)",
            "⚡ AKTU: Write algebra expression for queries"
        ]
    },
    {
        id: 4,
        title: "4. Relational Algebra (Advanced)",
        frontText: "Joins and Division",
        backTitle: "Advanced Ops",
        importance: "high",
        backContent: [
            "🔗 THETA JOIN (⋈_θ): Product + Select.",
            "🔗 NATURAL JOIN (⋈): Join on common attributes, remove dups.",
            "🔗 OUTER JOINS:",
            "  • Left (⟕): Keep all left tuples.",
            "  • Right (⟖): Keep all right tuples.",
            "  • Full (⟗): Keep all.",
            "➗ DIVISION (÷): Find x that relate to ALL y in S.",
            "⚡ AKTU: Explain Full Outer Join, Division operator"
        ]
    },
    {
        id: 5,
        title: "5. Relational Calculus",
        frontText: "Non-Procedural Query Language",
        backTitle: "TRC & DRC",
        importance: "medium",
        backContent: [
            "🤔 Declarative: specify WHAT to get, not HOW.",
            "📝 TUPLE Relational Calculus (TRC): { t | P(t) }",
            "  • Variable range over tuples.",
            "🧩 DOMAIN Relational Calculus (DRC): { <x1,x2..> | P(x1..) }",
            "  • Variables range over domain elements.",
            "⚡ AKTU: Difference between Algebra (Procedural) vs Calculus (Non-Procedural)"
        ]
    },
    {
        id: 6,
        title: "6. SQL Basics & DDL",
        frontText: "Defining the Database",
        backTitle: "DDL Commands",
        importance: "medium",
        backContent: [
            "🏗️ CREATE: Create table/view. `CREATE TABLE S (ID int);`",
            "🔄 ALTER: Modify structure. `ALTER TABLE S ADD age int;`",
            "🗑️ DROP: Delete table structure. `DROP TABLE S;`",
            "✂️ TRUNCATE: Wipe data, keep structure.",
            "⚡ AKTU: Syntax for Create and Alter"
        ]
    },
    {
        id: 7,
        title: "7. SQL DML & DQL",
        frontText: "Manipulating Data",
        backTitle: "DML Commands",
        importance: "high",
        backContent: [
            "📝 INSERT: `INSERT INTO S VALUES (1, 'A');`",
            "📝 UPDATE: `UPDATE S SET age=20 WHERE ID=1;`",
            "📝 DELETE: `DELETE FROM S WHERE ID=1;`",
            "🔍 SELECT: `SELECT * FROM S WHERE age > 18;`",
            "  • ORDER BY, GROUP BY, HAVING",
            "⚡ AKTU: Write query using Group By and Having"
        ]
    },
    {
        id: 8,
        title: "8. Views, Indexes",
        frontText: "Virtual Tables & Performance",
        backTitle: "Objects",
        importance: "medium",
        backContent: [
            "👀 VIEW: Virtual table based on query.",
            "  • `CREATE VIEW v AS SELECT...`",
            "  • Security: Hide sensitive columns.",
            "⚡ INDEX: Structure for fast lookup (B-Tree).",
            "  • `CREATE INDEX idx ON T(col);`",
            "  • Tradeoff: Faster read, slower write.",
            "⚡ AKTU: Purpose of Views"
        ]
    },
    {
        id: 9,
        title: "9. PL/SQL: Cursors & Triggers",
        frontText: "Procedural SQL Extensions",
        backTitle: "Advanced SQL",
        importance: "high",
        backContent: [
            "🖱️ CURSOR: Pointer to process rows one by one from result set.",
            "  • Implicit vs Explicit cursors.",
            "💥 TRIGGER: Auto-executed code on events (INSERT/UPDATE).",
            "  • BEFORE vs AFTER triggers.",
            "  • Row-level vs Statement-level.",
            "📜 PROCEDURE: Stored block of code.",
            "⚡ AKTU: Explain Triggers with PL/SQL example"
        ]
    }
];
