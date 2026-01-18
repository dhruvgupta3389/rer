import { type FlashcardData } from '../components/Flashcard';

export const dwmUnit4Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Classification - Definition",
        frontText: "Predicting class labels",
        backTitle: "Classification Basics",
        importance: "high",
        backContent: [
            "🎯 DEFINITION: Assigns class labels to data objects.",
            "📊 SUPERVISED LEARNING: Uses labeled training data.",
            "📝 STEPS:",
            "  1. Training: Build model from labeled data",
            "  2. Testing: Validate on test data",
            "  3. Application: Classify new data",
            "📈 EXAMPLES: Spam detection, Disease diagnosis, Loan approval.",
            "⚡ AKTU: Define classification with examples"
        ]
    },
    {
        id: 2,
        title: "2. Data Generalization & Relevance",
        frontText: "Feature analysis",
        backTitle: "Attribute Analysis",
        importance: "medium",
        backContent: [
            "🔼 DATA GENERALIZATION: Roll-up data for higher abstraction.",
            "🔍 ATTRIBUTE RELEVANCE ANALYSIS:",
            "  • Which features matter?",
            "  • Information gain, correlation",
            "⚖️ MINING CLASS COMPARISONS:",
            "  • Compare characteristics of different classes",
            "  • Contrast set mining",
            "⚡ AKTU: Explain attribute relevance"
        ]
    },
    {
        id: 3,
        title: "3. Classification Algorithms",
        frontText: "Types of classifiers",
        backTitle: "Algorithm Types",
        importance: "high",
        backContent: [
            "📊 STATISTICAL-BASED: Naive Bayes, Bayesian networks.",
            "📏 DISTANCE-BASED: k-Nearest Neighbor (k-NN).",
            "🌳 DECISION TREE-BASED: ID3, C4.5, CART.",
            "🧠 NEURAL NETWORKS: Perceptron, Backpropagation.",
            "📐 SVM: Support Vector Machines.",
            "⚡ AKTU: Compare k-NN vs Decision Tree"
        ]
    },
    {
        id: 4,
        title: "4. Clustering - Introduction",
        frontText: "Grouping similar objects",
        backTitle: "Clustering Basics",
        importance: "high",
        backContent: [
            "🎯 DEFINITION: Group similar objects, no predefined labels.",
            "📊 UNSUPERVISED LEARNING: Discovers structure.",
            "🔍 GOAL: High intra-cluster similarity, low inter-cluster.",
            "📈 APPLICATIONS:",
            "  • Customer segmentation",
            "  • Image segmentation",
            "  • Anomaly detection",
            "⚡ AKTU: Define clustering with applications"
        ]
    },
    {
        id: 5,
        title: "5. Similarity & Distance Measures",
        frontText: "How to measure closeness?",
        backTitle: "Distance Metrics",
        importance: "medium",
        backContent: [
            "📏 EUCLIDEAN DISTANCE: d = √Σ(xᵢ - yᵢ)²",
            "🚕 MANHATTAN DISTANCE: d = Σ|xᵢ - yᵢ|",
            "🔄 MINKOWSKI DISTANCE: Generalized form.",
            "📐 COSINE SIMILARITY: cos(θ) = (A·B)/(|A||B|)",
            "🔗 JACCARD COEFFICIENT: |A∩B| / |A∪B|",
            "⚡ AKTU: When to use Euclidean vs Cosine?"
        ]
    },
    {
        id: 6,
        title: "6. Hierarchical Clustering",
        frontText: "Building cluster hierarchy",
        backTitle: "CURE & Chameleon",
        importance: "high",
        backContent: [
            "🔼 AGGLOMERATIVE (Bottom-up): Merge clusters.",
            "🔽 DIVISIVE (Top-down): Split clusters.",
            "🩹 CURE ALGORITHM:",
            "  • Uses representative points (not just centroid)",
            "  • Shrinks points toward center",
            "  • Handles non-spherical clusters",
            "🦎 CHAMELEON:",
            "  • Uses graph partitioning",
            "  • Considers relative closeness & interconnectivity",
            "⚡ AKTU Important: Explain CURE algorithm"
        ]
    },
    {
        id: 7,
        title: "7. Density-Based Clustering",
        frontText: "DBSCAN & OPTICS",
        backTitle: "Density Methods",
        importance: "high",
        backContent: [
            "🎯 IDEA: Clusters are dense regions separated by sparse.",
            "🔵 DBSCAN:",
            "  • Core point: ≥ MinPts within ε-radius",
            "  • Border point: Within ε of core point",
            "  • Noise: Neither core nor border",
            "  • Finds arbitrary shapes, handles noise",
            "🔴 OPTICS: Handles varying density, ordering-based.",
            "⚡ AKTU Very Important: Explain DBSCAN with diagram"
        ]
    },
    {
        id: 8,
        title: "8. Grid-Based & Model-Based",
        frontText: "STING, CLIQUE, Statistical",
        backTitle: "Other Methods",
        importance: "medium",
        backContent: [
            "📊 GRID-BASED: Partition space into cells.",
            "  • STING: Statistical Info Grid",
            "  • CLIQUE: Subspace clustering",
            "  • Fast, independent of data size",
            "📈 MODEL-BASED: Assume data follows distribution.",
            "  • EM Algorithm (Expectation-Maximization)",
            "  • Gaussian Mixture Models",
            "⚡ AKTU: Compare STING vs CLIQUE"
        ]
    },
    {
        id: 9,
        title: "9. Association Rules - Basics",
        frontText: "Finding item relationships",
        backTitle: "Association Mining",
        importance: "high",
        backContent: [
            "🛒 MARKET BASKET: {Bread, Butter} → {Milk}",
            "📊 SUPPORT: P(X ∪ Y) - frequency of itemset.",
            "📈 CONFIDENCE: P(Y|X) = Support(X∪Y)/Support(X).",
            "🎯 LIFT: Confidence / P(Y) - strength of rule.",
            "⚡ AKTU Very Important: Calculate Support & Confidence"
        ]
    },
    {
        id: 10,
        title: "10. Apriori Algorithm",
        frontText: "Mining frequent itemsets",
        backTitle: "Apriori Steps",
        importance: "high",
        backContent: [
            "🎯 APRIORI PRINCIPLE: If itemset is infrequent, all supersets are infrequent.",
            "📋 ALGORITHM STEPS:",
            "  1. Find frequent 1-itemsets (L1)",
            "  2. Generate candidate k-itemsets (Ck)",
            "  3. Prune using support threshold",
            "  4. Repeat until no more frequent itemsets",
            "📊 RULE GENERATION: From frequent itemsets, generate rules.",
            "⚡ AKTU: Apply Apriori on sample transactions"
        ]
    }
];
