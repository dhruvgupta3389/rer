import { type FlashcardData } from '../components/Flashcard';

export const dlUnit1Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Introduction to Machine Learning",
        frontText: "What is Machine Learning & Types of Learning?",
        backTitle: "ML Fundamentals",
        importance: "high",
        backContent: [
            "🎯 ML Definition: Computers learning from data without explicit programming",
            "📊 SUPERVISED: Labeled data → Classification (discrete) & Regression (continuous)",
            "🔍 UNSUPERVISED: Unlabeled data → Clustering, Dimensionality Reduction",
            "🎮 REINFORCEMENT: Agent learns via rewards/penalties in environment",
            "⚡ AKTU Focus: Differences between supervised, unsupervised, reinforcement learning",
            "📈 Applications: Image Recognition, NLP, Recommendation Systems, Autonomous Vehicles"
        ]
    },
    {
        id: 2,
        title: "2. Support Vector Machines (SVMs)",
        frontText: "Linear Classification with Maximum Margin",
        backTitle: "SVM Concepts",
        importance: "high",
        backContent: [
            "🎯 Goal: Find optimal hyperplane that maximizes margin between classes",
            "📐 Hyperplane Equation: w·x + b = 0 (decision boundary)",
            "📏 MARGIN: Distance between hyperplane and nearest data points",
            "⭐ SUPPORT VECTORS: Data points closest to decision boundary (critical points)",
            "🔧 KERNEL TRICK: Transform non-linear data to higher dimensions",
            "  • Linear Kernel: K(x,y) = x·y",
            "  • RBF/Gaussian: K(x,y) = exp(-γ||x-y||²)",
            "  • Polynomial: K(x,y) = (x·y + c)^d",
            "⚡ AKTU Important: Derive margin maximization, kernel functions"
        ]
    },
    {
        id: 3,
        title: "3. Perceptron - The Foundation",
        frontText: "Single Layer Neural Network (1958 - Rosenblatt)",
        backTitle: "Perceptron Details",
        importance: "high",
        backContent: [
            "🧠 PERCEPTRON: Simplest neural network - single artificial neuron",
            "📥 INPUTS: x₁, x₂, ..., xₙ (features)",
            "⚖️ WEIGHTS: w₁, w₂, ..., wₙ (learned parameters)",
            "🎯 WEIGHTED SUM: z = Σ(wᵢxᵢ) + b (bias)",
            "📤 ACTIVATION: y = step(z) = 1 if z ≥ 0, else 0",
            "🔄 LEARNING RULE: wᵢ(new) = wᵢ(old) + η(y_true - y_pred)xᵢ",
            "⚠️ LIMITATION: Can only solve LINEARLY SEPARABLE problems",
            "❌ XOR Problem: Perceptron cannot solve XOR (not linearly separable)",
            "⚡ AKTU: Very frequently asked - derive learning rule, XOR problem"
        ]
    },
    {
        id: 4,
        title: "4. Logistic Regression",
        frontText: "Probabilistic Binary Classification",
        backTitle: "Logistic Regression",
        importance: "high",
        backContent: [
            "🎯 Output: Probability P(y=1|x) ∈ [0, 1]",
            "📈 SIGMOID Function: σ(z) = 1 / (1 + e^(-z))",
            "📐 Linear Combination: z = w·x + b",
            "🔮 Prediction: P(y=1) = σ(w·x + b)",
            "📉 CROSS-ENTROPY LOSS: L = -[y·log(ŷ) + (1-y)·log(1-ŷ)]",
            "🔄 Gradient Descent Update: w = w - η·∂L/∂w",
            "🆚 vs Linear Regression: Classification vs Regression, Sigmoid vs Linear",
            "⚡ AKTU Focus: Derive sigmoid, cross-entropy loss, gradient updates"
        ]
    },
    {
        id: 5,
        title: "5. Shallow Neural Networks",
        frontText: "What Does a Shallow Network Compute?",
        backTitle: "Shallow Network Architecture",
        importance: "medium",
        backContent: [
            "🏗️ ARCHITECTURE: Input → Hidden Layer → Output",
            "📊 Hidden Layer: z = W·x + b, a = g(z) where g is activation",
            "🔌 ACTIVATION FUNCTIONS:",
            "  • Sigmoid: σ(z) = 1/(1+e^(-z)) → (0,1) - vanishing gradient issue",
            "  • Tanh: tanh(z) = (e^z - e^(-z))/(e^z + e^(-z)) → (-1,1)",
            "  • ReLU: max(0, z) → Most used, solves vanishing gradient",
            "  • Leaky ReLU: max(αz, z) where α << 1",
            "📐 UNIVERSAL APPROXIMATION: Even 1 hidden layer can approximate any function",
            "⚠️ Limitation: May need exponentially many neurons for complex functions"
        ]
    },
    {
        id: 6,
        title: "6. Loss Functions",
        frontText: "Measuring Model Error",
        backTitle: "Types of Loss Functions",
        importance: "high",
        backContent: [
            "🎯 PURPOSE: Quantify difference between predictions and actual values",
            "📊 REGRESSION LOSSES:",
            "  • MSE (Mean Squared Error): L = (1/n)Σ(y - ŷ)²",
            "  • MAE (Mean Absolute Error): L = (1/n)Σ|y - ŷ|",
            "  • Huber Loss: Combines MSE & MAE (robust to outliers)",
            "📈 CLASSIFICATION LOSSES:",
            "  • Binary Cross-Entropy: -[y·log(ŷ) + (1-y)·log(1-ŷ)]",
            "  • Categorical Cross-Entropy: -Σyᵢ·log(ŷᵢ)",
            "  • Hinge Loss (SVM): max(0, 1 - y·ŷ)",
            "⚡ AKTU: Derive MSE, Cross-entropy, explain when to use each"
        ]
    },
    {
        id: 7,
        title: "7. Backpropagation Algorithm",
        frontText: "How Neural Networks Learn",
        backTitle: "Backpropagation Details",
        importance: "high",
        backContent: [
            "🎯 PURPOSE: Efficiently compute gradients using chain rule",
            "🔄 FORWARD PASS: Compute outputs layer by layer",
            "📉 BACKWARD PASS: Compute gradients from output to input",
            "⛓️ CHAIN RULE: ∂L/∂w = ∂L/∂a · ∂a/∂z · ∂z/∂w",
            "📝 ALGORITHM STEPS:",
            "  1. Forward pass: compute all activations",
            "  2. Compute output layer error: δ = ∂L/∂a · g'(z)",
            "  3. Backpropagate: δˡ = (Wˡ⁺¹)ᵀδˡ⁺¹ ⊙ g'(zˡ)",
            "  4. Update: W = W - η·δ·aᵀ, b = b - η·δ",
            "⚡ AKTU VERY IMPORTANT: Derive backprop for 2-layer network"
        ]
    },
    {
        id: 8,
        title: "8. Stochastic Gradient Descent (SGD)",
        frontText: "Optimization for Large Datasets",
        backTitle: "SGD Variants",
        importance: "high",
        backContent: [
            "📊 BATCH GD: Use ALL samples → Slow, stable, memory intensive",
            "⚡ STOCHASTIC GD: Use 1 sample → Fast, noisy, quick updates",
            "🎯 MINI-BATCH GD: Use subset (32-256) → Best of both worlds",
            "📈 LEARNING RATE (η): Too high = diverge, Too low = slow convergence",
            "🚀 SGD IMPROVEMENTS:",
            "  • Momentum: v = βv - η∇L, w = w + v (accelerates convergence)",
            "  • RMSprop: Adaptive learning rate using squared gradients",
            "  • Adam: Momentum + RMSprop (most popular optimizer)",
            "⚡ AKTU: Compare Batch GD vs SGD vs Mini-batch, Adam optimizer"
        ]
    },
    {
        id: 9,
        title: "9. Universal Function Approximation",
        frontText: "Neural Networks Can Learn Any Function",
        backTitle: "Universal Approximation Theorem",
        importance: "medium",
        backContent: [
            "📜 THEOREM (Cybenko 1989, Hornik 1991):",
            "A feedforward network with a single hidden layer containing finite neurons can approximate any continuous function on compact subsets of Rⁿ",
            "⚠️ CONDITIONS:",
            "  • Activation must be non-constant, bounded, continuous (sigmoid)",
            "  • Or: any non-polynomial activation (ReLU)",
            "🎯 IMPLICATION: NNs are theoretically powerful enough for any task",
            "⚠️ PRACTICAL LIMITATIONS:",
            "  • May need exponentially many neurons",
            "  • Doesn't guarantee we can FIND the right weights",
            "  • Deep networks often more efficient than wide shallow ones",
            "⚡ AKTU: Explain theorem, limitations, why we use deep networks"
        ]
    }
];
