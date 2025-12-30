import { type FlashcardData } from '../components/Flashcard';

export const dlUnit4Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Optimization in Deep Learning",
        frontText: "Challenges of Training Deep Networks",
        backTitle: "Optimization Challenges",
        importance: "high",
        backContent: [
            "🎯 GOAL: Find parameters θ that minimize loss L(θ)",
            "⚠️ CHALLENGES:",
            "  • Non-convex loss surface (many local minima)",
            "  • Saddle points (more common than local minima in high-D)",
            "  • Ill-conditioning (different curvature in different directions)",
            "  • Vanishing/Exploding gradients",
            "🔧 SOLUTIONS:",
            "  • Momentum: Accelerate through flat regions",
            "  • Adaptive learning rates: Adam, RMSprop",
            "  • Batch normalization: Smooth loss landscape",
            "  • Skip connections: Better gradient flow",
            "⚡ AKTU: Explain non-convex optimization challenges"
        ]
    },
    {
        id: 2,
        title: "2. Non-Convex Optimization",
        frontText: "Why Deep Learning Still Works",
        backTitle: "Non-Convex Properties",
        importance: "medium",
        backContent: [
            "📊 CONVEX vs NON-CONVEX:",
            "  • Convex: Single global minimum, easy optimization",
            "  • Non-convex: Multiple local minima, saddle points",
            "🧠 SURPRISING FINDINGS:",
            "  • Most local minima are nearly as good as global",
            "  • Saddle points are bigger problem than local minima",
            "  • Flat minima → Better generalization (Hochreiter)",
            "📈 LOSS LANDSCAPE VISUALIZATION:",
            "  • Sharp minima: Poor generalization",
            "  • Flat/wide minima: Good generalization",
            "🔧 TECHNIQUES: Large batch → Sharp | Small batch → Flat",
            "⚡ AKTU: Compare convex vs non-convex, saddle point problem"
        ]
    },
    {
        id: 3,
        title: "3. Stochastic Optimization",
        frontText: "Practical Optimization Algorithms",
        backTitle: "Optimizer Comparison",
        importance: "high",
        backContent: [
            "⚡ SGD with MOMENTUM:",
            "  v = β·v + η·∇L, θ = θ - v",
            "  (β typically 0.9, like ball rolling downhill)",
            "📊 ADAGRAD: Adaptive per-parameter learning rates",
            "  θ = θ - η/√(Σgₜ²) · g (slower for frequent features)",
            "🔧 RMSPROP: Fix AdaGrad's shrinking LR",
            "  E[g²]ₜ = ρ·E[g²]ₜ₋₁ + (1-ρ)gₜ²",
            "🌟 ADAM (Best of both):",
            "  m = β₁m + (1-β₁)g (momentum)",
            "  v = β₂v + (1-β₂)g² (adaptive LR)",
            "  θ = θ - η·m̂/√(v̂ + ε)",
            "⚡ AKTU IMPORTANT: Adam algorithm, compare SGD vs Adam"
        ]
    },
    {
        id: 4,
        title: "4. Generalization in Neural Networks",
        frontText: "Why Do Overparameterized NNs Generalize?",
        backTitle: "Generalization Theory",
        importance: "medium",
        backContent: [
            "🤔 PUZZLE: NNs have more parameters than data, yet generalize!",
            "📊 CLASSICAL VIEW: More params → More overfitting",
            "🧠 MODERN UNDERSTANDING:",
            "  • Implicit regularization from SGD",
            "  • Flat minima have better generalization",
            "  • Double descent: Error goes up then down with model size",
            "📈 BIAS-VARIANCE TRADEOFF:",
            "  • High bias (underfit): Simple model, high training error",
            "  • High variance (overfit): Complex model, low train, high test",
            "🔧 REGULARIZATION HELPS: Dropout, weight decay, early stopping",
            "⚡ AKTU: Bias-variance tradeoff, why deep networks generalize"
        ]
    },
    {
        id: 5,
        title: "5. Spatial Transformer Networks",
        frontText: "Learning Spatial Transformations",
        backTitle: "STN Architecture",
        importance: "medium",
        backContent: [
            "🎯 PROBLEM: CNNs not invariant to rotation, scale, distortion",
            "💡 SOLUTION: Learn to spatially transform input/features",
            "🏗️ THREE COMPONENTS:",
            "  1. LOCALIZATION NET: Predicts transformation params θ",
            "  2. GRID GENERATOR: Creates sampling grid from θ",
            "  3. SAMPLER: Bilinear interpolation on input",
            "📐 TRANSFORMATIONS:",
            "  • Affine: rotation, translation, scale, shear",
            "  • θ = [a, b, tₓ; c, d, tᵧ] (6 parameters)",
            "✅ BENEFITS:",
            "  • End-to-end trainable",
            "  • Can be inserted anywhere in network",
            "  • Learns task-specific transformations",
            "⚡ AKTU: STN components, affine transformation matrix"
        ]
    },
    {
        id: 6,
        title: "6. Recurrent Neural Networks (RNNs)",
        frontText: "Networks with Memory for Sequences",
        backTitle: "RNN Details",
        importance: "high",
        backContent: [
            "🎯 DESIGNED FOR: Sequential data (text, time series, audio)",
            "🔄 KEY IDEA: Hidden state hₜ carries information from past",
            "📐 EQUATIONS:",
            "  hₜ = tanh(Wₕₕ·hₜ₋₁ + Wₓₕ·xₜ + b)",
            "  yₜ = Wₕᵧ·hₜ",
            "📊 TYPES:",
            "  • One-to-One: Standard NN",
            "  • One-to-Many: Image → Caption",
            "  • Many-to-One: Sentiment analysis",
            "  • Many-to-Many: Translation, Video classification",
            "⚠️ PROBLEM: Vanishing/Exploding gradients for long sequences",
            "⚡ AKTU VERY IMPORTANT: RNN architecture, BPTT, gradient problems"
        ]
    },
    {
        id: 7,
        title: "7. Long Short-Term Memory (LSTM)",
        frontText: "Solving the Long-Term Dependency Problem",
        backTitle: "LSTM Gates",
        importance: "high",
        backContent: [
            "🎯 SOLVES: Vanishing gradient, learns long-term dependencies",
            "🚪 THREE GATES (all sigmoid → [0,1]):",
            "  • FORGET Gate: fₜ = σ(Wf·[hₜ₋₁, xₜ] + bf) → What to forget",
            "  • INPUT Gate: iₜ = σ(Wi·[hₜ₋₁, xₜ] + bi) → What to store",
            "  • OUTPUT Gate: oₜ = σ(Wo·[hₜ₋₁, xₜ] + bo) → What to output",
            "📦 CELL STATE (memory highway):",
            "  C̃ₜ = tanh(Wc·[hₜ₋₁, xₜ] + bc) (candidate)",
            "  Cₜ = fₜ ⊙ Cₜ₋₁ + iₜ ⊙ C̃ₜ (update cell)",
            "  hₜ = oₜ ⊙ tanh(Cₜ) (hidden state)",
            "🔧 GRU: Simpler variant with 2 gates (reset, update)",
            "⚡ AKTU VERY IMPORTANT: LSTM gate equations, diagram"
        ]
    },
    {
        id: 8,
        title: "8. Language Models & Word2Vec",
        frontText: "Word Embeddings and Language Modeling",
        backTitle: "Word Representations",
        importance: "high",
        backContent: [
            "🔤 ONE-HOT: Sparse, no semantic meaning, huge vectors",
            "🧠 WORD2VEC (Mikolov 2013): Dense embeddings (50-300 dims)",
            "📊 TWO ARCHITECTURES:",
            "  • CBOW: Predict center word from context",
            "  • Skip-gram: Predict context from center word",
            "✨ PROPERTIES:",
            "  • king - man + woman ≈ queen",
            "  • Similar words have similar vectors",
            "📐 TRAINING: Maximize P(context|word) or P(word|context)",
            "🔧 TRICKS: Negative sampling, Hierarchical softmax",
            "📈 MODERN: GloVe, FastText, BERT, GPT embeddings",
            "⚡ AKTU Important: CBOW vs Skip-gram, word analogy task"
        ]
    },
    {
        id: 9,
        title: "9. Deep Reinforcement Learning",
        frontText: "Learning from Rewards",
        backTitle: "Deep RL Methods",
        importance: "high",
        backContent: [
            "🎮 RL BASICS: Agent, Environment, State, Action, Reward",
            "🎯 GOAL: Maximize cumulative reward Σγᵗrₜ",
            "📊 KEY CONCEPTS:",
            "  • Policy π(a|s): Probability of action given state",
            "  • Value V(s): Expected return from state s",
            "  • Q-value Q(s,a): Expected return from action a in state s",
            "🔷 DQN (Deep Q-Network):",
            "  • NN approximates Q(s,a) → ε-greedy action selection",
            "  • Experience replay + Target network for stability",
            "🔶 POLICY GRADIENT:",
            "  • Directly optimize policy, REINFORCE algorithm",
            "🔴 ACTOR-CRITIC: Combine value and policy learning",
            "⚡ AKTU: Q-learning, DQN architecture, policy gradient"
        ]
    },
    {
        id: 10,
        title: "10. Computational Neuroscience Connection",
        frontText: "Brain-Inspired Computing",
        backTitle: "Neuroscience & AI",
        importance: "normal",
        backContent: [
            "🧠 BIOLOGICAL NEURON:",
            "  • Dendrites (input) → Cell body → Axon (output)",
            "  • Synapse: Connection strength (like weights)",
            "🔬 INSPIRATIONS:",
            "  • Perceptron ← Biological neuron model",
            "  • CNN ← Visual cortex (Hubel & Wiesel)",
            "  • Attention ← Selective attention in brain",
            "  • Memory networks ← Hippocampus",
            "⚠️ DIFFERENCES:",
            "  • Biological: Analog, sparse, temporal, 3D",
            "  • Artificial: Digital, dense, static, layers",
            "📊 MODERN RESEARCH: Spiking NNs, Neuromorphic chips",
            "⚡ AKTU: Compare biological vs artificial neurons"
        ]
    }
];
