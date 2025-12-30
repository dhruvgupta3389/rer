import { type FlashcardData } from '../components/Flashcard';

export const dbmsUnit5Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Concurrency Control Need",
        frontText: "Why manage concurrency?",
        backTitle: "Concurrency Problems",
        importance: "high",
        backContent: [
            "⚠️ LOST UPDATE: Two writes overwrite each other.",
            "⚠️ DIRTY READ: Reading uncommitted data.",
            "⚠️ INCONSISTENT RETRIEVAL: Aggregation while data updates.",
            "⚠️ PHANTOM PHENOMENON: Rows appearing/disappearing.",
            "⚡ AKTU: Explain Lost Update and Dirty Read with example"
        ]
    },
    {
        id: 2,
        title: "2. Lock-Based Protocols",
        frontText: "Using Locks for Isolation",
        backTitle: "Lock Types",
        importance: "high",
        backContent: [
            "🔒 SHARED (S): Read-only mode. Compatible with S.",
            "🔒 EXCLUSIVE (X): Read-Write mode. Incompatible.",
            "🤝 COMPATIBILITY MATRIX:",
            "  • S-S: ✅ Yes",
            "  • S-X, X-S, X-X: ❌ No",
            "⚡ AKTU: Shared vs Exclusive locks"
        ]
    },
    {
        id: 3,
        title: "3. Two-Phase Locking (2PL)",
        frontText: "Ensuring Serializability",
        backTitle: "2PL Phases",
        importance: "high",
        backContent: [
            "1️⃣ GROWING Phase: Tx acquires locks, cannot release.",
            "  • Point of Max Locking.",
            "2️⃣ SHRINKING Phase: Tx releases locks, cannot acquire.",
            "✅ GUARANTEES: Conflict Serializability.",
            "❌ ISSUES: Deadlock possible, Cascading rollback possible.",
            "⚡ AKTU Very Important: Explain 2PL and its variants"
        ]
    },
    {
        id: 4,
        title: "4. Variations of 2PL",
        frontText: "Strict, Rigorous, Conservative",
        backTitle: "2PL Types",
        importance: "medium",
        backContent: [
            "🛡️ STRICT 2PL: Hold X-locks until Commit (Avoids Cascading Rollback).",
            "🛡️ RIGOROUS 2PL: Hold ALL locks until Commit.",
            "🛡️ CONSERVATIVE 2PL: Acquire ALL locks at start (Deadlock-free).",
            "⚡ AKTU: Strict 2PL vs Conservative 2PL"
        ]
    },
    {
        id: 5,
        title: "5. Timestamp Ordering Protocol",
        frontText: "Deadlock-free Control",
        backTitle: "Timestamp Rules",
        importance: "high",
        backContent: [
            "🕒 TS(Ti): Timestamp of transaction.",
            "📝 Rules rely on R-TS(X) and W-TS(X).",
            "  • If Ti acts 'late' (TS < R-TS or W-TS) → Rollback (Too old).",
            "  • Thomas Write Rule: Ignore write if outdated but already overwritten.",
            "✅ GUARANTEES: Serializability, Deadlock Freedom.",
            "❌ ISSUE: Starvation possible.",
            "⚡ AKTU: Explain Timestamp Ordering"
        ]
    },
    {
        id: 6,
        title: "6. Validation-Based Protocol",
        frontText: "Optimistic Concurrency Control",
        backTitle: "Phases",
        importance: "medium",
        backContent: [
            "😊 OPTIMISTIC: Assume conflicts are rare.",
            "1️⃣ READ Phase: Execute on private copy.",
            "2️⃣ VALIDATION Phase: Check for conflicts.",
            "3️⃣ WRITE Phase: Copy local updates to DB if valid.",
            "✅ Good for read-heavy systems.",
            "⚡ AKTU: Three phases of validation protocols"
        ]
    },
    {
        id: 7,
        title: "7. Multiple Granularity",
        frontText: "Locking at different levels",
        backTitle: "Intention Locks",
        importance: "medium",
        backContent: [
            "Hierarchy: DB → Table → Page → Row.",
            "🔐 INTENTION LOCKS (IS, IX, SIX):",
            "  • Signal intent to lock lower node.",
            "  • Before locking Row(X), must lock Table(IX).",
            "✅ Increases concurrency (mix of big and small queries).",
            "⚡ AKTU: Why use Intention Locks?"
        ]
    },
    {
        id: 8,
        title: "8. Multi-Version Schemes (MVCC)",
        frontText: "Snapshot Isolation",
        backTitle: "MVCC",
        importance: "medium",
        backContent: [
            "📸 CONCEPT: Maintain old versions of data items.",
            "  • Readers read old version, Writers create new version.",
            "✅ ADVANTAGE: Readers never block Writers!",
            "  • Used by Oracle, PostgreSQL.",
            "⚡ AKTU: MVCC advantages"
        ]
    },
    {
        id: 9,
        title: "9. Case Study: Oracle",
        frontText: "Real-world Implementation",
        backTitle: "Oracle Features",
        importance: "normal",
        backContent: [
            "🏢 ARCHITECTURE: System Global Area (SGA), Background processes.",
            "⚡ CONCURRENCY: Uses MVCC (Multiversion Read Consistency).",
            "  • Readers don't block writers.",
            "💾 STORAGE: Tablespaces, Datafiles, Redo Logs.",
            "⚡ AKTU: Architecture of Oracle"
        ]
    }
];
