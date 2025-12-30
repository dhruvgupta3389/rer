import { type FlashcardData } from '../components/Flashcard';

export const dlUnit3Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. Principal Component Analysis (PCA)",
        frontText: "Linear Dimensionality Reduction",
        backTitle: "PCA Algorithm",
        importance: "high",
        backContent: [
            "🎯 GOAL: Reduce dimensions while preserving maximum variance",
            "📐 ALGORITHM:",
            "  1. Center data: X̄ = X - mean(X)",
            "  2. Compute covariance matrix: C = (1/n)X̄ᵀX̄",
            "  3. Find eigenvalues λ₁ ≥ λ₂ ≥ ... and eigenvectors",
            "  4. Select top k eigenvectors as principal components",
            "  5. Project: Z = X̄ · Wₖ",
            "📊 VARIANCE EXPLAINED: Σᵢ₌₁ᵏ λᵢ / Σⱼ λⱼ",
            "✅ APPLICATIONS: Face recognition, Data visualization, Noise reduction",
            "⚠️ LIMITATION: Only captures LINEAR relationships",
            "⚡ AKTU VERY IMPORTANT: PCA algorithm, variance explained, example"
        ]
    },
    {
        id: 2,
        title: "2. Linear Discriminant Analysis (LDA)",
        frontText: "Supervised Dimensionality Reduction",
        backTitle: "LDA Details",
        importance: "high",
        backContent: [
            "🎯 GOAL: Maximize class separability while reducing dimensions",
            "🆚 PCA vs LDA:",
            "  • PCA: Unsupervised, maximizes variance",
            "  • LDA: Supervised, maximizes class separation",
            "📐 OBJECTIVE: Maximize (Between-class scatter) / (Within-class scatter)",
            "  • Sᵦ = Σnₖ(μₖ - μ)(μₖ - μ)ᵀ (between-class)",
            "  • Sᵥ = ΣΣ(x - μₖ)(x - μₖ)ᵀ (within-class)",
            "  • Maximize: J(w) = wᵀSᵦw / wᵀSᵥw",
            "📊 MAX COMPONENTS: min(classes-1, features)",
            "⚡ AKTU Important: Compare PCA vs LDA, Fisher's criterion"
        ]
    },
    {
        id: 3,
        title: "3. Manifold Learning",
        frontText: "Non-Linear Dimensionality Reduction",
        backTitle: "Manifold Methods",
        importance: "medium",
        backContent: [
            "🎯 ASSUMPTION: High-D data lies on low-D manifold (curved surface)",
            "📊 METHODS:",
            "  • ISOMAP: Preserve geodesic distances (shortest path on manifold)",
            "  • LLE (Locally Linear Embedding): Preserve local linear structure",
            "  • t-SNE: Preserve local similarities (great for visualization)",
            "  • UMAP: t-SNE alternative, faster, preserves global structure better",
            "📈 t-SNE DETAILS:",
            "  • Convert distances to probabilities",
            "  • Minimize KL divergence between high-D and low-D probabilities",
            "  • Non-parametric (can't embed new points directly)",
            "⚡ AKTU: Explain manifold hypothesis, compare t-SNE vs PCA"
        ]
    },
    {
        id: 4,
        title: "4. Metric Learning",
        frontText: "Learning Distance Functions",
        backTitle: "Metric Learning Methods",
        importance: "medium",
        backContent: [
            "🎯 GOAL: Learn distance function where similar items are closer",
            "📐 MAHALANOBIS DISTANCE: d(x,y) = √((x-y)ᵀM(x-y))",
            "  • M = positive semi-definite matrix (learned)",
            "🔧 METHODS:",
            "  • LMNN (Large Margin Nearest Neighbor): k-NN with margin",
            "  • NCA (Neighbourhood Component Analysis): Softmax-based",
            "  • TRIPLET LOSS: d(anchor, positive) < d(anchor, negative) + margin",
            "📊 TRIPLET MINING:",
            "  • Hard: Most difficult triplets",
            "  • Semi-hard: Violate margin but not order",
            "✅ APPLICATIONS: Face verification, Image retrieval, One-shot learning",
            "⚡ AKTU: Triplet loss formula, Siamese networks"
        ]
    },
    {
        id: 5,
        title: "5. Autoencoders",
        frontText: "Unsupervised Feature Learning",
        backTitle: "Autoencoder Types",
        importance: "high",
        backContent: [
            "🏗️ ARCHITECTURE: Input → Encoder → Bottleneck → Decoder → Output",
            "🎯 OBJECTIVE: Reconstruct input, minimize ||x - x̂||²",
            "📊 TYPES:",
            "  • VANILLA: Simple encoder-decoder",
            "  • SPARSE: Add L1 penalty on activations (force sparsity)",
            "  • DENOISING: Add noise to input, reconstruct clean output",
            "  • VARIATIONAL (VAE): Learn latent distribution z ~ N(μ, σ²)",
            "📐 VAE LOSS: Reconstruction + KL divergence (regularization)",
            "  L = ||x - x̂||² + KL(q(z|x) || p(z))",
            "✅ APPLICATIONS: Dimensionality reduction, Anomaly detection, Generation",
            "⚡ AKTU Important: Autoencoder architecture, VAE loss function"
        ]
    },
    {
        id: 6,
        title: "6. ConvNet Introduction",
        frontText: "Building Blocks of CNNs",
        backTitle: "CNN Components",
        importance: "high",
        backContent: [
            "📐 CONVOLUTION OPERATION:",
            "  • Filter (kernel) slides across input",
            "  • Output(i,j) = Σₘ,ₙ Input(i+m, j+n) × Filter(m,n)",
            "🔧 HYPERPARAMETERS:",
            "  • Kernel Size: 3×3, 5×5, 7×7 (odd numbers)",
            "  • Stride: Step size (1 = every pixel, 2 = skip)",
            "  • Padding: 'same' (keep size) or 'valid' (shrink)",
            "📊 OUTPUT SIZE: (N - F + 2P)/S + 1",
            "🏊 POOLING:",
            "  • Max Pooling: Take max in each window (most common)",
            "  • Average Pooling: Take average",
            "  • Global Pooling: Reduce entire feature map to 1 value",
            "⚡ AKTU: Convolution formula, output size calculation, pooling types"
        ]
    },
    {
        id: 7,
        title: "7. AlexNet (2012)",
        frontText: "ImageNet Breakthrough",
        backTitle: "AlexNet Architecture",
        importance: "high",
        backContent: [
            "🏆 ACHIEVEMENT: Won ImageNet 2012, 15.3% error (vs 26.2% 2nd place)",
            "🏗️ ARCHITECTURE: 5 Conv + 3 FC layers, 60M parameters",
            "  • Input: 227×227×3",
            "  • Conv layers: 96→256→384→384→256 filters",
            "⚙️ KEY INNOVATIONS:",
            "  • ReLU activation (faster than tanh/sigmoid)",
            "  • Dropout (p=0.5) in FC layers",
            "  • Data augmentation (crops, flips, color jitter)",
            "  • Local Response Normalization (later replaced by BatchNorm)",
            "  • GPU training (2 GPUs)",
            "📊 Started modern deep learning revolution",
            "⚡ AKTU Important: AlexNet innovations, architecture diagram"
        ]
    },
    {
        id: 8,
        title: "8. VGG, Inception, ResNet",
        frontText: "Landmark CNN Architectures",
        backTitle: "Architecture Evolution",
        importance: "high",
        backContent: [
            "🔷 VGG-16/19 (2014):",
            "  • All 3×3 conv, very deep (16-19 layers)",
            "  • Simple, uniform architecture → 138M params",
            "🔶 INCEPTION/GoogLeNet (2014):",
            "  • Inception modules: Parallel 1×1, 3×3, 5×5 convs",
            "  • 22 layers, only 5M parameters (efficient)",
            "  • 1×1 convs for dimensionality reduction",
            "🔴 RESNET (2015):",
            "  • Skip/Residual connections: y = F(x) + x",
            "  • Solves vanishing gradient, enables 100+ layers",
            "  • ResNet-50, ResNet-101, ResNet-152",
            "⚡ AKTU VERY IMPORTANT: Compare architectures, skip connections"
        ]
    },
    {
        id: 9,
        title: "9. Weight Initialization & Hyperparameters",
        frontText: "Getting Training Right",
        backTitle: "Initialization & Tuning",
        importance: "high",
        backContent: [
            "⚠️ BAD INIT: All zeros → all neurons same, no learning",
            "📐 INITIALIZATION METHODS:",
            "  • Xavier/Glorot: w ~ N(0, 2/(nᵢₙ + nₒᵤₜ)) - for sigmoid/tanh",
            "  • He/Kaiming: w ~ N(0, 2/nᵢₙ) - for ReLU",
            "🔧 HYPERPARAMETERS TO TUNE:",
            "  • Learning rate: Start 1e-3, use LR schedulers",
            "  • Batch size: 32-256 typical",
            "  • Number of layers, neurons per layer",
            "  • Dropout rate, regularization strength",
            "🔍 TUNING METHODS:",
            "  • Grid Search, Random Search",
            "  • Bayesian Optimization, Learning rate finder",
            "⚡ AKTU: Xavier vs He init derivation, hyperparameter impact"
        ]
    }
];
