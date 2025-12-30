import { type FlashcardData } from '../components/Flashcard';

export const dbmsUnit3Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Functional Dependencies (FD)",
        frontText: "Relationships between Attributes",
        backTitle: "FD Concepts",
        importance: "high",
        backContent: [
            "🔗 DEFINITION: X → Y (X functionally determines Y).",
            "  • If t1[X] = t2[X], then t1[Y] must be t2[Y].",
            "  • E.g., RollNo → Name (Valid), Name → RollNo (Invalid).",
            "🧩 TYPES:",
            "  • Trivial: X → Y if Y ⊆ X.",
            "  • Non-trivial: X → Y if Y ⊈ X.",
            "⚡ AKTU: Define FD, closure of attribute set"
        ]
    },
    {
        id: 2,
        title: "2. Armstrong's Axioms",
        frontText: "Inference Rules for FDs",
        backTitle: "The Axioms",
        importance: "high",
        backContent: [
            "1️⃣ Reflexivity: If Y ⊆ X, then X → Y.",
            "2️⃣ Augmentation: If X → Y, then XZ → YZ.",
            "3️⃣ Transitivity: If X → Y and Y → Z, then X → Z.",
            "➕ Additional Rules:",
            "  • Union, Decomposition, Pseudo-transitivity.",
            "⚡ AKTU: State and prove Armstrong Axioms"
        ]
    },
    {
        id: 3,
        title: "3. Normalization Basics",
        frontText: "Reducing Redundancy",
        backTitle: "Why Normalize?",
        importance: "high",
        backContent: [
            "⚠️ ANOMALIES (Bad Design):",
            "  • Insertion: Can't add data without dependencies.",
            "  • Deletion: Losing unintended info.",
            "  • Update: Data inconsistency.",
            "🎯 GOAL: Minimize redundancy, avoid anomalies.",
            "⚡ AKTU: Explain Update/Delete anomalies with example"
        ]
    },
    {
        id: 4,
        title: "4. First & Second Normal Form",
        frontText: "1NF and 2NF",
        backTitle: "Early Stages",
        importance: "high",
        backContent: [
            "1️⃣ 1NF (Atomic):",
            "  • No multi-valued attributes.",
            "  • Cell contains single value.",
            "2️⃣ 2NF (Full Dependency):",
            "  • Must be in 1NF.",
            "  • NO Partial Dependency (Non-prime attr must depend on WHOLE Candidate Key, not part).",
            "⚡ AKTU: Normalize a table to 2NF"
        ]
    },
    {
        id: 5,
        title: "5. Third Normal Form (3NF)",
        frontText: "Removing Transitive Dependency",
        backTitle: "3NF Definition",
        importance: "high",
        backContent: [
            "3️⃣ 3NF:",
            "  • Must be in 2NF.",
            "  • NO Transitive Dependency (X → Y → Z).",
            "  • For X → A: X is Super Key OR A is Prime Attribute.",
            "⚡ AKTU Very Important: Definition of 3NF, decompose relation"
        ]
    },
    {
        id: 6,
        title: "6. BCNF (Boyce-Codd NF)",
        frontText: "Stricter than 3NF",
        backTitle: "BCNF",
        importance: "high",
        backContent: [
            "💪 BCNF:",
            "  • Stricter version of 3NF.",
            "  • For every non-trivial FD X → Y, X MUST be a Super Key.",
            "⚠️ 3NF vs BCNF:",
            "  • BCNF doesn't allow Prime attribute dependency on non-key.",
            "  • Every BCNF is 3NF, but not vice-versa.",
            "⚡ AKTU: Compare 3NF and BCNF"
        ]
    },
    {
        id: 7,
        title: "7. Decomposition Properties",
        frontText: "Is the breakdown valid?",
        backTitle: "Good Decomposition",
        importance: "high",
        backContent: [
            "✅ LOSSLESS JOIN:",
            "  • Natural join of decomposed tables returns original table.",
            "  • Requirement: Common attribute must contain a Key.",
            "✅ DEPENDENCY PRESERVATION:",
            "  • All FDs covered by decomposed relations.",
            "⚡ AKTU: Check if decomposition is lossless"
        ]
    },
    {
        id: 8,
        title: "8. Higher Normal Forms",
        frontText: "4NF and 5NF",
        backTitle: "Advanced NF",
        importance: "medium",
        backContent: [
            "4️⃣ 4NF (Multivalued):",
            "  • Removes Multivalued Dependencies (MVD X ↠ Y).",
            "  • A table with Course, Student, Hobby (independent multi-values).",
            "5️⃣ 5NF (Join):",
            "  • Removes Join Dependencies.",
            "  • Related to Project-Join Normal Form (PJNF).",
            "⚡ AKTU: Define MVD and 4NF"
        ]
    },
    {
        id: 9,
        title: "9. Minimal Cover",
        frontText: "Simplifying FDs",
        backTitle: "Canonical Cover",
        importance: "medium",
        backContent: [
            "🎯 Canonical Cover (Fc): Minimal set of FDs equivalent to F.",
            "Steps:",
            "  1. Make RHS singleton (A→BC becomes A→B, A→C).",
            "  2. Remove extraneous attributes from LHS.",
            "  3. Remove redundant FDs.",
            "⚡ AKTU: Find Minimal Cover for set of FDs"
        ]
    }
];
