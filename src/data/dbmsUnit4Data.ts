import { type FlashcardData } from '../components/Flashcard';

export const dbmsUnit4Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Transaction Concept",
        frontText: "Unit of work in DBMS",
        backTitle: "ACID Properties",
        importance: "high",
        backContent: [
            "⚛️ ATOMICITY: All or nothing. (Recovery Manager)",
            "✅ CONSISTENCY: Database valid before & after. (User/Integrity constraints)",
            "🛡️ ISOLATION: Trans. run independently. (Concurrency Control)",
            "💾 DURABILITY: Changes persist after commit. (Recovery/logs)",
            "⚡ AKTU Very Important: Explain ACID with examples"
        ]
    },
    {
        id: 2,
        title: "2. Transaction States",
        frontText: "Life cycle of a Transaction",
        backTitle: "State Diagram",
        importance: "medium",
        backContent: [
            "1. Active: Executing.",
            "2. Partially Committed: Last statement executed.",
            "3. Failed: Error occurred.",
            "4. Aborted: Rolled back to start.",
            "5. Committed: Successfully saved.",
            "⚡ AKTU: Draw State Transition Diagram"
        ]
    },
    {
        id: 3,
        title: "3. Schedules & Serializability",
        frontText: "Ordering of Operations",
        backTitle: "Schedule Types",
        importance: "high",
        backContent: [
            "📜 SERIAL Schedule: One tx finishes before next starts (Consistent but slow).",
            "📜 CONCURRENT Schedule: Instructions interleaved.",
            "🎯 GOAL: Serializable (Equivalent to Serial).",
            "⚡ AKTU: Distinguish Serial vs Concurrent"
        ]
    },
    {
        id: 4,
        title: "4. Conflict Serializability",
        frontText: "Checking Consistency via Conflicts",
        backTitle: "Conflict Test",
        importance: "high",
        backContent: [
            "⚔️ CONFLICT OP: Same item, different tx, at least 1 write.",
            "  • R(A) - W(A) ✅ Conflict",
            "  • W(A) - W(A) ✅ Conflict",
            "  • R(A) - R(A) ❌ No Conflict",
            "🕸️ PRECEDENCE GRAPH:",
            "  • If Cycle exists → NOT Conflict Serializable.",
            "  • No Cycle → Conflict Serializable.",
            "⚡ AKTU: Test a schedule for conflict serializability"
        ]
    },
    {
        id: 5,
        title: "5. View Serializability",
        frontText: "Less strict than conflict",
        backTitle: "View Equivalent",
        importance: "medium",
        backContent: [
            "👀 VIEW SERIALIZABLE:",
            "  • Preserves 'Read' view of data.",
            "  • Every Conflict Serializable is View Serializable.",
            "  • Handles 'Blind Writes' (Write without Read).",
            "⚡ AKTU: Conflict vs View Serializability"
        ]
    },
    {
        id: 6,
        title: "6. Recoverability",
        frontText: "Can we handle failures?",
        backTitle: "Schedule Types",
        importance: "medium",
        backContent: [
            "🛡️ RECOVERABLE: Dependent Tx commits AFTER reading Tx.",
            "  • If T2 reads T1's data, T1 must commit before T2.",
            "🛡️ CASCADELESS: Dependent Tx reads only COMMITTED data.",
            "  • Avoids 'Cascading Rollback'.",
            "🛡️ STRICT: Dependent Tx cannot read/write until T1 commits.",
            "⚡ AKTU: Recoverable vs Cascadeless schedules"
        ]
    },
    {
        id: 7,
        title: "7. Recovery: Log-Based",
        frontText: "Using Logs to Restore",
        backTitle: "Log Recovery",
        importance: "high",
        backContent: [
            "📝 LOG: Sequence of records <Ti, X, old_V, new_V>.",
            "⏳ DEFERRED Update: Write to DB only after Commit.",
            "  • No Undo needed, only Redo.",
            "⚡ IMMEDIATE Update: Write to DB anytime (wal).",
            "  • Needs Undo (for uncommitted) and Redo (for committed).",
            "  • WAL (Write-Ahead Logging): Log before disk write.",
            "⚡ AKTU: Deferred vs Immediate database modification"
        ]
    },
    {
        id: 8,
        title: "8. Checkpoints & Shadow Paging",
        frontText: "Optimizing Recovery",
        backTitle: "Optimization",
        importance: "medium",
        backContent: [
            "📍 CHECKPOINT: Periodically save state to disk.",
            "  • Reduces recovery time (don't process logs before checkpoint).",
            "🌑 SHADOW PAGING:",
            "  • Maintain two page tables: Current & Shadow.",
            "  • No Redo/Undo logic needed, just switch pointer.",
            "⚡ AKTU: Explain Checkpoints"
        ]
    },
    {
        id: 9,
        title: "9. Deadlock Handling",
        frontText: "When Transactions Wait Forever",
        backTitle: "Deadlock Methods",
        importance: "medium",
        backContent: [
            "🔒 DEADLOCK: Cycle of waiting transations.",
            "🛡️ PREVENTION: Wait-Die or Wound-Wait schemes (TimeStamp).",
            "🔍 DETECTION: Wait-for graph (Cycle checking).",
            "🩹 RECOVERY: Select Victim (Rollback cheap Tx).",
            "⚡ AKTU: Wait-Die vs Wound-Wait"
        ]
    },
    {
        id: 10,
        title: "10. Distributed Databases",
        frontText: "Data across sites",
        backTitle: "Distributed Concepts",
        importance: "medium",
        backContent: [
            "🌍 Distributed Storage: Fragmentation & Replication.",
            "✂️ FRAGMENTATION: Horizontal (rows) vs Vertical (cols).",
            "📑 REPLICATION: Full vs Partial.",
            "🤝 2PC (Two-Phase Commit): Voting phase, Decision phase.",
            "⚡ AKTU: Horizontal vs Vertical fragmentation"
        ]
    }
];
