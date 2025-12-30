import { type FlashcardData } from '../components/Flashcard';

export const dlUnit5Data: FlashcardData[] = [
    {
        id: 1,
        title: "1. ImageNet & Large-Scale Visual Recognition",
        frontText: "The Dataset That Started the Revolution",
        backTitle: "ImageNet Details",
        importance: "high",
        backContent: [
            "📊 IMAGENET DATABASE:",
            "  • 14+ million images, 20,000+ categories",
            "  • ImageNet Large Scale Visual Recognition Challenge (ILSVRC)",
            "  • 1000 classes subset for competition",
            "🏆 MILESTONES:",
            "  • 2012: AlexNet (15.3% error) - Deep learning begins",
            "  • 2014: VGGNet (7.3%), GoogLeNet (6.7%)",
            "  • 2015: ResNet (3.6%) - Surpassed human level!",
            "  • Human error: ~5%",
            "📈 IMPACT:",
            "  • Standardized benchmark for computer vision",
            "  • Enabled transfer learning (pretrained models)",
            "⚡ AKTU: ImageNet significance, accuracy progression"
        ]
    },
    {
        id: 2,
        title: "2. Object Detection",
        frontText: "Localizing and Classifying Objects",
        backTitle: "Detection Methods",
        importance: "high",
        backContent: [
            "🎯 TASK: WHERE is object + WHAT is it (bounding box + class)",
            "📊 TWO-STAGE DETECTORS:",
            "  • R-CNN: Region proposals → CNN → Classify each",
            "  • Fast R-CNN: Shared CNN features, ROI pooling",
            "  • Faster R-CNN: Region Proposal Network (RPN) - end-to-end",
            "⚡ ONE-STAGE DETECTORS:",
            "  • YOLO: Divide image into grid, predict boxes directly",
            "  • SSD: Multi-scale detection, various anchor boxes",
            "📐 METRICS:",
            "  • IoU (Intersection over Union) = Area(∩)/Area(∪)",
            "  • mAP (mean Average Precision)",
            "✅ APPLICATIONS: Autonomous driving, surveillance, robotics",
            "⚡ AKTU Important: R-CNN vs YOLO, IoU calculation"
        ]
    },
    {
        id: 3,
        title: "3. WaveNet for Audio",
        frontText: "Generative Model for Raw Audio",
        backTitle: "WaveNet Architecture",
        importance: "medium",
        backContent: [
            "🎵 TASK: Generate realistic speech waveforms",
            "🏗️ ARCHITECTURE:",
            "  • Autoregressive: P(x) = Π P(xₜ|x₁,...,xₜ₋₁)",
            "  • Dilated causal convolutions (exponentially increasing dilation)",
            "  • Gated activation units",
            "📐 DILATED CONVOLUTIONS:",
            "  • Dilation = 1, 2, 4, 8, 16, 32, ...",
            "  • Large receptive field with few layers",
            "  • Causal: Can only see past (not future)",
            "✅ APPLICATIONS:",
            "  • Text-to-Speech (Google, DeepMind)",
            "  • Music generation",
            "  • Voice conversion",
            "⚡ AKTU: Dilated convolutions, autoregressive model"
        ]
    },
    {
        id: 4,
        title: "4. NLP and Word2Vec Applications",
        frontText: "Natural Language Processing with Deep Learning",
        backTitle: "NLP Applications",
        importance: "high",
        backContent: [
            "📝 NLP TASKS:",
            "  • Text Classification: Sentiment, Spam detection",
            "  • Named Entity Recognition (NER): Extract entities",
            "  • Machine Translation: Seq2Seq with attention",
            "  • Question Answering: Reading comprehension",
            "🔤 WORD2VEC APPLICATIONS:",
            "  • Word similarity: cosine(v₁, v₂)",
            "  • Word analogies: king - man + woman = queen",
            "  • Document classification: Average word vectors",
            "📊 MODERN MODELS:",
            "  • ELMo: Contextual embeddings",
            "  • BERT: Bidirectional, pretrain + finetune",
            "  • GPT: Generative, autoregressive",
            "⚡ AKTU: Word2Vec applications, BERT vs GPT"
        ]
    },
    {
        id: 5,
        title: "5. Joint Detection & Multi-Task Learning",
        frontText: "Solving Multiple Tasks Together",
        backTitle: "Multi-Task Approaches",
        importance: "medium",
        backContent: [
            "🎯 IDEA: Share representations across related tasks",
            "📊 EXAMPLES:",
            "  • Object Detection + Segmentation (Mask R-CNN)",
            "  • Pose Estimation + Action Recognition",
            "  • Language Translation + Language Modeling",
            "✅ BENEFITS:",
            "  • Improved generalization (regularization effect)",
            "  • Efficient computation (shared features)",
            "  • Less data needed per task",
            "🏗️ ARCHITECTURE:",
            "  • Shared encoder/backbone",
            "  • Task-specific heads/decoders",
            "  • Multi-task loss: L = Σλᵢ·Lᵢ",
            "⚡ AKTU: Multi-task learning benefits, architecture design"
        ]
    },
    {
        id: 6,
        title: "6. Bioinformatics Applications",
        frontText: "Deep Learning in Biology & Medicine",
        backTitle: "Bio Applications",
        importance: "medium",
        backContent: [
            "🧬 GENOMICS:",
            "  • DNA sequence analysis: CNNs on sequences",
            "  • Gene expression prediction",
            "  • Mutation effect prediction",
            "💊 DRUG DISCOVERY:",
            "  • Molecular property prediction (Graph NNs)",
            "  • Drug-target interaction",
            "  • Protein structure prediction (AlphaFold!)",
            "🏥 MEDICAL IMAGING:",
            "  • Tumor detection (CT, MRI, X-ray)",
            "  • Diabetic retinopathy screening",
            "  • Pathology slide analysis",
            "📊 ALPHAFOLD (2020): Solved 50-year protein folding problem!",
            "⚡ AKTU: Applications in medical imaging, AlphaFold significance"
        ]
    },
    {
        id: 7,
        title: "7. Face Recognition",
        frontText: "Identity Verification with Deep Learning",
        backTitle: "Face Recognition Pipeline",
        importance: "high",
        backContent: [
            "🎯 TASKS:",
            "  • Face Detection: Where is the face?",
            "  • Face Alignment: Normalize position/orientation",
            "  • Face Verification: Are these the same person?",
            "  • Face Identification: Who is this person?",
            "🏗️ ARCHITECTURES:",
            "  • DeepFace (Facebook 2014): 97.35% on LFW",
            "  • FaceNet (Google 2015): Triplet loss, 128-D embeddings",
            "  • ArcFace: Additive angular margin loss",
            "📐 TRIPLET LOSS:",
            "  d(anchor, positive) + margin < d(anchor, negative)",
            "📊 BENCHMARKS: LFW (Labeled Faces in Wild), MegaFace",
            "⚡ AKTU Important: Face recognition pipeline, FaceNet"
        ]
    },
    {
        id: 8,
        title: "8. Scene Understanding",
        frontText: "Comprehensive Visual Understanding",
        backTitle: "Scene Analysis Tasks",
        importance: "medium",
        backContent: [
            "🖼️ RELATED TASKS:",
            "  • CLASSIFICATION: What's in the image?",
            "  • DETECTION: Where are objects?",
            "  • SEGMENTATION: Pixel-level labeling",
            "  • DEPTH ESTIMATION: How far is everything?",
            "📊 SEMANTIC SEGMENTATION:",
            "  • FCN (Fully Convolutional Networks)",
            "  • U-Net: Encoder-decoder with skip connections",
            "  • DeepLab: Atrous/dilated convolutions",
            "🎭 INSTANCE SEGMENTATION:",
            "  • Separate masks for each object instance",
            "  • Mask R-CNN: Detection + Segmentation",
            "✅ APPLICATIONS: Autonomous driving, AR/VR, Robotics",
            "⚡ AKTU: Semantic vs Instance segmentation, FCN vs U-Net"
        ]
    },
    {
        id: 9,
        title: "9. Image Captioning",
        frontText: "Generating Text from Images",
        backTitle: "Captioning Methods",
        importance: "high",
        backContent: [
            "🎯 TASK: Generate natural language description of image",
            "🏗️ ENCODER-DECODER ARCHITECTURE:",
            "  • ENCODER: CNN (VGG/ResNet) → Image features",
            "  • DECODER: RNN/LSTM → Generate words sequentially",
            "🔍 ATTENTION MECHANISM:",
            "  • Focus on relevant image regions for each word",
            "  • 'Show, Attend and Tell' (2015)",
            "  • Soft attention: Weighted average of all regions",
            "  • Hard attention: Select one region (non-differentiable)",
            "📊 MODERN: Transformers for both vision and text",
            "📐 METRICS: BLEU, METEOR, CIDEr, SPICE",
            "✅ APPLICATIONS: Accessibility, Image search, Content moderation",
            "⚡ AKTU Important: Encoder-decoder, attention in captioning"
        ]
    },
    {
        id: 10,
        title: "10. Summary: AKTU Exam Focus Areas",
        frontText: "Most Important Topics for Exam",
        backTitle: "High-Priority Topics",
        importance: "high",
        backContent: [
            "🔴 UNIT 1: Perceptron, Backpropagation, SGD, Loss Functions",
            "🔴 UNIT 2: CNN architecture, Batch Normalization, GANs, Deep vs Shallow",
            "🔴 UNIT 3: PCA/LDA derivation, AlexNet/VGG/ResNet, Autoencoders",
            "🔴 UNIT 4: LSTM gates, Word2Vec, Adam optimizer, RNN types",
            "🔴 UNIT 5: ImageNet history, Object Detection (YOLO/RCNN), Face Recognition",
            "📝 COMMONLY ASKED:",
            "  • Compare questions (PCA vs LDA, CNN vs RNN, Adam vs SGD)",
            "  • Derive equations (backprop, LSTM gates, batch norm)",
            "  • Architecture diagrams (CNN, LSTM, GAN)",
            "  • Applications and case studies",
            "⚡ TIP: Practice previous year questions, focus on derivations!"
        ]
    }
];
