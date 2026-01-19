import { type FlashcardData } from '../components/Flashcard';

export const dwmUnit3Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Data Mining - Overview",
        frontText: "What is Data Mining?",
        frontImage: "/dwm/kdd_process.png",
        backTitle: "DM Definition",
        importance: "high",
        backContent: [
            "🔍 DEFINITION: Discovery of hidden patterns from large datasets.",
            "🎯 GOAL: Extract useful knowledge for decision making.",
            "📊 ALSO CALLED: Knowledge Discovery in Databases (KDD).",
            "⚡ MOTIVATION:",
            "  • Business intelligence",
            "  • Fraud detection",
            "  • Customer segmentation",
            "  • Recommendation systems",
            "⚡ AKTU: Define data mining with applications"
        ]
    },
    {
        id: 2,
        title: "2. Data Mining Functionalities",
        frontText: "What can DM do?",
        backTitle: "DM Tasks",
        importance: "high",
        backContent: [
            "📊 CLASSIFICATION: Assign class labels (Spam/Not Spam).",
            "🔗 CLUSTERING: Group similar objects (Customer segments).",
            "🛒 ASSOCIATION: Find item relationships (Market basket).",
            "📈 PREDICTION: Forecast future values (Stock prices).",
            "🔎 OUTLIER ANALYSIS: Detect anomalies (Fraud).",
            "📉 REGRESSION: Predict numeric values.",
            "⚡ AKTU: List 5 DM functionalities with examples"
        ]
    },
    {
        id: 3,
        title: "3. Data Pre-Processing Overview",
        frontText: "Why preprocess data?",
        backTitle: "Pre-Processing Need",
        importance: "high",
        backContent: [
            "⚠️ RAW DATA IS: Incomplete, noisy, inconsistent.",
            "🎯 GOAL: Improve data quality for better mining results.",
            "📋 STEPS:",
            "  • Data Cleaning",
            "  • Data Integration",
            "  • Data Transformation",
            "  • Data Reduction",
            "⚡ AKTU Very Important: Explain why preprocessing is needed"
        ]
    },
    {
        id: 4,
        title: "4. Data Cleaning - Missing Values",
        frontText: "Handling incomplete data",
        backTitle: "Missing Value Methods",
        importance: "high",
        backContent: [
            "❓ MISSING VALUES: Empty cells in dataset.",
            "🔧 METHODS TO HANDLE:",
            "  • Ignore tuple (if many missing)",
            "  • Fill manually (expensive)",
            "  • Use global constant (e.g., 'Unknown')",
            "  • Use MEAN/MEDIAN of attribute",
            "  • Use REGRESSION to predict value",
            "  • Use most probable value (Bayesian)",
            "⚡ AKTU: List methods to handle missing values"
        ]
    },
    {
        id: 5,
        title: "5. Data Cleaning - Noisy Data",
        frontText: "Handling errors & outliers",
        frontImage: "/dwm/binning_techniques.png",
        backTitle: "Noise Smoothing Techniques",
        importance: "high",
        backContent: [
            "📊 NOISY DATA: Random errors, outliers.",
            "🔧 SMOOTHING TECHNIQUES:",
            "  • BINNING: Sort and smooth by bin (mean/median/boundaries)",
            "  • CLUSTERING: Group similar, detect outliers",
            "  • REGRESSION: Fit data to function",
            "  • HUMAN INSPECTION: Manual review",
            "⚡ AKTU Very Important: Explain binning with example"
        ]
    },
    {
        id: 6,
        title: "6. Data Integration & Transformation",
        frontText: "Combining and converting data",
        backTitle: "Integration & Transform",
        importance: "medium",
        backContent: [
            "🔗 DATA INTEGRATION: Combine multiple sources.",
            "  • Schema integration (match attributes)",
            "  • Entity identification (match records)",
            "  • Redundancy detection",
            "🔄 DATA TRANSFORMATION:",
            "  • NORMALIZATION: Scale to [0,1] or [-1,1]",
            "  • AGGREGATION: Summarize (daily → monthly)",
            "  • GENERALIZATION: Low-level → High-level (age → age-group)",
            "⚡ AKTU: Explain normalization formulas"
        ]
    },
    {
        id: 7,
        title: "7. Data Reduction - Cube Aggregation",
        frontText: "Reducing data volume",
        backTitle: "Reduction Techniques",
        importance: "high",
        backContent: [
            "🎯 GOAL: Reduce size while maintaining integrity.",
            "🧊 DATA CUBE AGGREGATION: Pre-compute aggregates.",
            "📉 DIMENSIONALITY REDUCTION: Reduce attributes (PCA).",
            "🗜️ DATA COMPRESSION: Lossless or lossy.",
            "🔢 NUMEROSITY REDUCTION: Replace with models (regression).",
            "⚡ AKTU: Explain data cube aggregation"
        ]
    },
    {
        id: 8,
        title: "8. Discretization & Concept Hierarchy",
        frontText: "Converting continuous to categorical",
        backTitle: "Discretization",
        importance: "medium",
        backContent: [
            "📊 DISCRETIZATION: Divide continuous range into intervals.",
            "  • Age: 0-18 (Youth), 19-35 (Adult), 36+ (Senior)",
            "🔼 CONCEPT HIERARCHY: Generalization levels.",
            "  • City → State → Country → Continent",
            "🎯 BENEFITS: Simplifies data, reduces noise.",
            "⚡ AKTU: Define concept hierarchy with example"
        ]
    },
    {
        id: 9,
        title: "9. Decision Tree Introduction",
        frontText: "Tree-based classification",
        frontImage: "/dwm/decision_tree.png",
        backTitle: "Decision Tree Basics",
        importance: "high",
        backContent: [
            "🌳 DECISION TREE: Flowchart-like structure.",
            "🔹 INTERNAL NODES: Test on attribute.",
            "🔹 BRANCHES: Outcome of test.",
            "🔹 LEAF NODES: Class label (decision).",
            "📊 ALGORITHMS: ID3, C4.5, CART.",
            "🎯 ATTRIBUTE SELECTION:",
            "  • Information Gain (ID3)",
            "  • Gain Ratio (C4.5)",
            "  • Gini Index (CART)",
            "⚡ AKTU Very Important: Draw decision tree, explain Info Gain"
        ]
    }
];
