import { type FlashcardData } from '../components/Flashcard';

export const dlUnit2Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. History of Deep Learning",
        frontText: "Evolution from Perceptron to Modern Deep Learning",
        backTitle: "Historical Timeline",
        importance: "medium",
        backContent: [
            "📅 1943: McCulloch-Pitts neuron (mathematical model)",
            "📅 1958: Perceptron (Rosenblatt) - First learning machine",
            "📅 1969: Minsky & Papert - XOR problem → AI Winter",
            "📅 1986: Backpropagation (Rumelhart) - Revival of NNs",
            "📅 1998: LeNet-5 (LeCun) - First successful CNN for digits",
            "📅 2006: Deep Belief Networks (Hinton) - Deep Learning term coined",
            "📅 2012: AlexNet - ImageNet breakthrough (15.3% error → 26.2%)",
            "📅 2014-Present: ResNet, GANs, Transformers, GPT, BERT",
            "⚡ AKTU: Timeline questions, AlexNet significance"
        ]
    },
    {
        id: 2,
        title: "2. Probabilistic Theory of Deep Learning",
        frontText: "Statistical Foundations of Neural Networks",
        backTitle: "Probabilistic Framework",
        importance: "medium",
        backContent: [
            "📊 NN as PROBABILISTIC MODEL:",
            "  • Output = P(y|x; θ) where θ are parameters",
            "  • Softmax for multi-class: P(y=k) = e^zₖ / Σe^zⱼ",
            "🎯 MAXIMUM LIKELIHOOD ESTIMATION (MLE):",
            "  • Maximize P(data|θ) = Πᵢ P(yᵢ|xᵢ; θ)",
            "  • Equivalent to minimizing negative log-likelihood",
            "📉 CROSS-ENTROPY = Negative Log-Likelihood",
            "🔄 BAYESIAN VIEW:",
            "  • P(θ|data) ∝ P(data|θ)·P(θ)",
            "  • Regularization = Prior on weights",
            "⚡ AKTU: Softmax derivation, MLE connection to cross-entropy"
        ]
    },
    {
        id: 3,
        title: "3. Regularization Techniques",
        frontText: "Preventing Overfitting in Deep Networks",
        backTitle: "Regularization Methods",
        importance: "high",
        backContent: [
            "⚠️ OVERFITTING: Model memorizes training data, fails on new data",
            "🔧 L1 REGULARIZATION (Lasso):",
            "  • Loss + λΣ|wᵢ| → Sparse weights (feature selection)",
            "🔧 L2 REGULARIZATION (Ridge/Weight Decay):",
            "  • Loss + λΣwᵢ² → Smaller weights, prevents large values",
            "🎲 DROPOUT (Hinton 2014):",
            "  • Randomly drop neurons (p=0.5) during training",
            "  • Ensemble effect, prevents co-adaptation",
            "📊 EARLY STOPPING: Stop when validation error increases",
            "📈 DATA AUGMENTATION: Flip, rotate, crop images",
            "⚡ AKTU Important: L1 vs L2, Dropout mechanism, when to use each"
        ]
    },
    {
        id: 4,
        title: "4. Batch Normalization",
        frontText: "Normalizing Layer Inputs for Faster Training",
        backTitle: "Batch Norm Details",
        importance: "high",
        backContent: [
            "🎯 PROBLEM: Internal Covariate Shift - distribution of inputs changes",
            "📐 BATCH NORM ALGORITHM:",
            "  1. μ = (1/m)Σxᵢ (batch mean)",
            "  2. σ² = (1/m)Σ(xᵢ - μ)² (batch variance)",
            "  3. x̂ᵢ = (xᵢ - μ) / √(σ² + ε) (normalize)",
            "  4. yᵢ = γx̂ᵢ + β (scale and shift - learned params)",
            "✅ BENEFITS:",
            "  • Faster training (higher learning rates)",
            "  • Reduces sensitivity to initialization",
            "  • Acts as regularizer (slight noise)",
            "⚡ AKTU VERY IMPORTANT: Derive BN, explain why it works"
        ]
    },
    {
        id: 5,
        title: "5. VC Dimension & Neural Networks",
        frontText: "Measuring Model Complexity",
        backTitle: "VC Dimension Theory",
        importance: "medium",
        backContent: [
            "📊 VC DIMENSION: Max points a classifier can shatter",
            "🔍 SHATTER: Correctly classify for ALL possible labelings",
            "📏 EXAMPLES:",
            "  • Linear classifier in 2D: VC = 3 (can shatter 3 points, not 4)",
            "  • Perceptron in n-D: VC = n + 1",
            "🧠 NEURAL NETWORK VC DIMENSION:",
            "  • Roughly proportional to number of parameters",
            "  • VC(NN) = O(W·log(W)) where W = weights",
            "⚖️ GENERALIZATION BOUND:",
            "  • Test Error ≤ Training Error + O(√(VC/n))",
            "  • More data OR lower VC → Better generalization",
            "⚡ AKTU: Define VC dimension, calculate for linear classifier"
        ]
    },
    {
        id: 6,
        title: "6. Deep vs Shallow Networks",
        frontText: "Why Go Deep?",
        backTitle: "Depth Advantages",
        importance: "high",
        backContent: [
            "🏗️ SHALLOW: 1-2 hidden layers | DEEP: Many hidden layers (10-1000+)",
            "✅ ADVANTAGES OF DEPTH:",
            "  • Feature Hierarchy: Low → Mid → High level features",
            "  • Exponential Efficiency: Deep can compute with fewer neurons",
            "  • Compositional: Complex = composition of simpler functions",
            "📊 EXAMPLE: Image Recognition",
            "  • Layer 1: Edges, gradients",
            "  • Layer 2: Corners, textures",
            "  • Layer 3: Object parts (eyes, wheels)",
            "  • Layer 4+: Full objects",
            "⚠️ CHALLENGES: Vanishing gradients, harder to train",
            "🔧 SOLUTIONS: ReLU, BatchNorm, Skip connections, proper init",
            "⚡ AKTU Important: Compare deep vs shallow, feature hierarchy"
        ]
    },
    {
        id: 7,
        title: "7. Convolutional Neural Networks (CNNs)",
        frontText: "Specialized Networks for Spatial Data",
        backTitle: "CNN Architecture",
        importance: "high",
        backContent: [
            "🎯 DESIGNED FOR: Images, spatial data, grid-like topology",
            "📐 KEY LAYERS:",
            "  • CONVOLUTION: Filters detect features (edges, textures)",
            "    - Output size: (N-F+2P)/S + 1 where N=input, F=filter, P=padding, S=stride",
            "  • POOLING: Reduce spatial size (Max/Average pooling)",
            "  • FULLY CONNECTED: Classification at the end",
            "✅ ADVANTAGES:",
            "  • Parameter sharing (same filter across image)",
            "  • Translation invariance (detect features anywhere)",
            "  • Local connectivity (focus on local patterns)",
            "📊 TYPICAL ARCHITECTURE: [CONV→ReLU→POOL] × N → FC → Softmax",
            "⚡ AKTU VERY IMPORTANT: CNN architecture, convolution formula, pooling"
        ]
    },
    {
        id: 8,
        title: "8. Generative Adversarial Networks (GANs)",
        frontText: "Two Networks in Competition",
        backTitle: "GAN Architecture",
        importance: "high",
        backContent: [
            "🎭 TWO NETWORKS:",
            "  • GENERATOR (G): Creates fake data from random noise z",
            "  • DISCRIMINATOR (D): Distinguishes real from fake",
            "🎮 MINIMAX GAME:",
            "  min_G max_D V(D,G) = E[log(D(x))] + E[log(1-D(G(z)))]",
            "🔄 TRAINING:",
            "  1. Train D to maximize: correctly classify real/fake",
            "  2. Train G to minimize: fool D (make D(G(z)) ≈ 1)",
            "📊 VARIANTS: DCGAN, WGAN, StyleGAN, CycleGAN",
            "🎨 APPLICATIONS:",
            "  • Image generation, Super-resolution",
            "  • Style transfer, Data augmentation",
            "⚡ AKTU Important: GAN objective function, training process"
        ]
    },
    {
        id: 9,
        title: "9. Semi-Supervised Learning",
        frontText: "Learning with Limited Labels",
        backTitle: "Semi-Supervised Methods",
        importance: "medium",
        backContent: [
            "🎯 PROBLEM: Limited labeled data + abundant unlabeled data",
            "📊 WHY: Labeling is expensive, unlabeled data is cheap",
            "🔧 TECHNIQUES:",
            "  • PSEUDO-LABELING: Train on labeled → Predict unlabeled → Add confident predictions",
            "  • CONSISTENCY REGULARIZATION: Same input + perturbations → Same output",
            "  • CO-TRAINING: Multiple views/models agree on unlabeled data",
            "  • GRAPH-BASED: Propagate labels through similarity graph",
            "🧠 DEEP LEARNING APPROACHES:",
            "  • MixMatch, FixMatch (state-of-the-art)",
            "  • Virtual Adversarial Training (VAT)",
            "⚡ AKTU: Define semi-supervised, pseudo-labeling algorithm"
        ]
    }
];
