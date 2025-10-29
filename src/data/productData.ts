import {
  LayoutDashboard,
  TrendingUp,
  Copy,
  Users,
  Smartphone,
  Gift,
  UserCheck,
  FileText,
  Bell,
  Shield,
  BarChart3,
  Zap,
  LineChart,
  Wallet,
  Settings,
  Lock,
  Globe,
  RefreshCw,
  Target,
  Award,
  Layers,
  Activity,
  DollarSign,
  PieChart,
  Gauge,
  Cloud,
  Database,
  Code,
  Smartphone as Mobile,
  Tablet,
  Monitor,
  Calendar,
  CreditCard,
  Percent,
  TrendingDown,
} from "lucide-react";

// CRM & Client Portal Data
export const crmData = {
  title: "CRM & Client Portal",
  subtitle: "Complete Client Lifecycle Management",
  description:
    "Streamline your entire client journey from onboarding to retention with our comprehensive CRM and client portal solution. Automate workflows, manage documents, and deliver exceptional client experiences.",
  heroIcon: LayoutDashboard,
  keyFeatures: [
    {
      title: "Multi-Tiered Onboarding",
      description:
        "Automated KYC/AML verification with document management, risk assessment, and compliance checks. Support for individual, corporate, and institutional accounts.",
      icon: UserCheck,
    },
    {
      title: "Document Management",
      description:
        "Secure document storage, e-signature integration, automated document generation, and compliance tracking with audit trails.",
      icon: FileText,
    },
    {
      title: "Client Communication Hub",
      description:
        "Multi-channel notifications (email, SMS, push), in-app messaging, announcement system, and personalized communication templates.",
      icon: Bell,
    },
    {
      title: "Advanced Reporting",
      description:
        "Real-time analytics dashboards, custom report builder, client activity tracking, and performance metrics with exportable data.",
      icon: BarChart3,
    },
  ],
  integrations: [
    {
      name: "MetaTrader 4/5",
      logo: "MT",
      description: "Full integration with MT4/MT5 platforms for seamless account management and trading.",
    },
    {
      name: "cTrader",
      logo: "CT",
      description: "Native cTrader integration for advanced trading capabilities and account synchronization.",
    },
    {
      name: "Sumsub",
      logo: "SS",
      description: "Automated KYC/AML verification with AI-powered identity verification and fraud detection.",
    },
    {
      name: "Onfido",
      logo: "ON",
      description: "Document verification and biometric authentication for secure client onboarding.",
    },
    {
      name: "Salesforce",
      logo: "SF",
      description: "CRM synchronization for enterprise-level client relationship management.",
    },
    {
      name: "HubSpot",
      logo: "HS",
      description: "Marketing automation and lead management integration for client acquisition.",
    },
  ],
  advancedSolutions: [
    {
      title: "Multi-Broker Aggregation",
      description:
        "Manage multiple broker entities from a single dashboard with consolidated reporting and cross-entity client transfers.",
      icon: Layers,
    },
    {
      title: "Risk Management Tools",
      description:
        "Real-time exposure monitoring, automated risk alerts, position limits, and margin call management.",
      icon: Shield,
    },
    {
      title: "White-Label Customization",
      description:
        "Fully customizable branding, custom domains, personalized email templates, and branded mobile apps.",
      icon: Globe,
    },
    {
      title: "IB Management System",
      description:
        "Multi-tier IB structure, commission tracking, performance analytics, and automated payouts.",
      icon: Users,
    },
    {
      title: "Client Segmentation",
      description:
        "Advanced client categorization, behavioral analytics, targeted campaigns, and personalized experiences.",
      icon: Target,
    },
    {
      title: "Compliance Automation",
      description:
        "Regulatory reporting, audit trails, automated compliance checks, and jurisdiction-specific rules.",
      icon: Lock,
    },
  ],
};

// Traderroom Data
export const traderroomData = {
  title: "Traderroom",
  subtitle: "Real-Time Trading Interface",
  description:
    "Empower your clients with a professional-grade trading interface featuring advanced charting, real-time market data, and sophisticated order management tools.",
  heroIcon: TrendingUp,
  keyFeatures: [
    {
      title: "Advanced Charting",
      description:
        "TradingView integration with 100+ technical indicators, drawing tools, multiple timeframes, and customizable chart layouts.",
      icon: LineChart,
    },
    {
      title: "Order Management",
      description:
        "One-click trading, advanced order types (limit, stop, trailing stop), bulk order management, and order templates.",
      icon: Zap,
    },
    {
      title: "Portfolio Analytics",
      description:
        "Real-time P&L tracking, position monitoring, risk metrics, performance analytics, and trade history.",
      icon: PieChart,
    },
    {
      title: "Market Data",
      description:
        "Real-time quotes, market depth, economic calendar, news feed integration, and price alerts.",
      icon: Activity,
    },
  ],
  integrations: [
    {
      name: "TradingView",
      logo: "TV",
      description: "Professional charting with advanced technical analysis tools and indicators.",
    },
    {
      name: "MetaTrader Bridge",
      logo: "MT",
      description: "Seamless execution and account synchronization with MT4/MT5 platforms.",
    },
    {
      name: "FIX Protocol",
      logo: "FIX",
      description: "Low-latency order routing and execution via industry-standard FIX protocol.",
    },
    {
      name: "Market Data Feeds",
      logo: "MD",
      description: "Real-time market data from multiple liquidity providers and exchanges.",
    },
    {
      name: "News APIs",
      logo: "NW",
      description: "Integrated news feeds from Reuters, Bloomberg, and other financial news sources.",
    },
    {
      name: "Economic Calendar",
      logo: "EC",
      description: "Real-time economic events and indicators affecting market movements.",
    },
  ],
  advancedSolutions: [
    {
      title: "Algorithmic Trading",
      description:
        "Strategy builder, backtesting engine, automated execution, and performance optimization tools.",
      icon: Code,
    },
    {
      title: "Social Trading Feed",
      description:
        "Share trades, follow top traders, community insights, and collaborative trading features.",
      icon: Users,
    },
    {
      title: "Risk Controls",
      description:
        "Position limits, margin requirements, stop-out levels, and automated risk management.",
      icon: Shield,
    },
    {
      title: "Multi-Asset Support",
      description:
        "Trade forex, commodities, indices, cryptocurrencies, and stocks from a single interface.",
      icon: Layers,
    },
    {
      title: "Custom Indicators",
      description:
        "Build and deploy custom technical indicators with JavaScript/Python support.",
      icon: Settings,
    },
    {
      title: "Performance Dashboard",
      description:
        "Comprehensive analytics, win rate tracking, drawdown analysis, and strategy performance metrics.",
      icon: Gauge,
    },
  ],
};

// Copy Trading Data
export const copyTradingData = {
  title: "Copy Trading",
  subtitle: "Turn Top Traders Into Products",
  description:
    "Enable your clients to follow and automatically copy successful traders. Build a thriving copy trading community with automated follower management and transparent performance tracking.",
  heroIcon: Copy,
  keyFeatures: [
    {
      title: "Strategy Marketplace",
      description:
        "Curated strategy listings, performance rankings, risk ratings, detailed statistics, and trader profiles.",
      icon: Award,
    },
    {
      title: "Automated Copying",
      description:
        "Real-time trade replication, proportional position sizing, customizable copy ratios, and stop-loss protection.",
      icon: RefreshCw,
    },
    {
      title: "Performance Tracking",
      description:
        "Detailed analytics, historical performance, drawdown metrics, win rates, and risk-adjusted returns.",
      icon: BarChart3,
    },
    {
      title: "Revenue Sharing",
      description:
        "Flexible commission structures, performance fees, subscription models, and automated payouts to strategy providers.",
      icon: DollarSign,
    },
  ],
  integrations: [
    {
      name: "MT4/MT5 Copy",
      logo: "MT",
      description: "Native MetaTrader integration for seamless copy trading execution.",
    },
    {
      name: "cTrader Copy",
      logo: "CT",
      description: "cTrader copy trading with advanced risk management features.",
    },
    {
      name: "Payment Gateways",
      logo: "PG",
      description: "Automated commission payments via Stripe, PayPal, and crypto wallets.",
    },
    {
      name: "Analytics Engine",
      logo: "AE",
      description: "Advanced performance analytics and risk assessment algorithms.",
    },
    {
      name: "Social Networks",
      logo: "SN",
      description: "Share strategies on social media and attract more followers.",
    },
    {
      name: "Compliance Tools",
      logo: "CP",
      description: "Regulatory compliance for copy trading operations and disclosures.",
    },
  ],
  advancedSolutions: [
    {
      title: "Risk Management",
      description:
        "Follower-level risk controls, maximum drawdown limits, equity protection, and automatic stop copying.",
      icon: Shield,
    },
    {
      title: "Strategy Verification",
      description:
        "Third-party verification, audited track records, real-time monitoring, and fraud detection.",
      icon: Lock,
    },
    {
      title: "Multi-Account Management",
      description:
        "PAMM/MAM functionality, master-slave account structure, and proportional allocation.",
      icon: Layers,
    },
    {
      title: "Custom Algorithms",
      description:
        "Build custom copy logic, filtering rules, entry/exit modifications, and risk adjustments.",
      icon: Code,
    },
    {
      title: "Community Features",
      description:
        "Trader chat, strategy discussions, performance leaderboards, and social engagement tools.",
      icon: Users,
    },
    {
      title: "White-Label Platform",
      description:
        "Fully branded copy trading platform with custom domains and personalized user experience.",
      icon: Globe,
    },
  ],
};

// Prop Funding Data
export const propFundingData = {
  title: "Prop Funding",
  subtitle: "Capital Allocation & Risk Controls",
  description:
    "Launch and scale your proprietary trading firm with comprehensive capital allocation, P&L waterfalls, challenge management, and sophisticated risk controls for prop traders.",
  heroIcon: Users,
  keyFeatures: [
    {
      title: "Challenge Management",
      description:
        "Multi-phase evaluation programs, customizable challenge rules, automated progression, pass/fail criteria, and performance tracking.",
      icon: Target,
    },
    {
      title: "P&L Waterfalls",
      description:
        "Flexible profit split structures, tiered payout schedules, performance-based scaling, and automated calculations.",
      icon: TrendingDown,
    },
    {
      title: "Risk Controls",
      description:
        "Daily loss limits, maximum drawdown rules, position size limits, trading time restrictions, and automated account suspension.",
      icon: Shield,
    },
    {
      title: "Trader Analytics",
      description:
        "Comprehensive performance metrics, risk-adjusted returns, consistency scores, trading psychology insights, and behavioral analysis.",
      icon: BarChart3,
    },
  ],
  integrations: [
    {
      name: "MT4/MT5 Manager",
      logo: "MT",
      description: "Full integration with MetaTrader for account management and risk controls.",
    },
    {
      name: "Payment Processors",
      logo: "PP",
      description: "Automated payouts via Stripe, Wise, PayPal, and cryptocurrency wallets.",
    },
    {
      name: "KYC Providers",
      logo: "KYC",
      description: "Trader verification and compliance checks for funded accounts.",
    },
    {
      name: "Analytics Platforms",
      logo: "AP",
      description: "Advanced trading analytics and performance measurement tools.",
    },
    {
      name: "Discord/Slack",
      logo: "DS",
      description: "Community integration for trader communication and support.",
    },
    {
      name: "Billing Systems",
      logo: "BS",
      description: "Subscription management for challenge fees and account renewals.",
    },
  ],
  advancedSolutions: [
    {
      title: "Scaling Plans",
      description:
        "Automated account scaling based on performance, progressive capital allocation, and milestone-based growth.",
      icon: TrendingUp,
    },
    {
      title: "Custom Rule Engine",
      description:
        "Build custom trading rules, violation detection, automated enforcement, and flexible rule sets.",
      icon: Settings,
    },
    {
      title: "Trader Dashboard",
      description:
        "Real-time statistics, challenge progress, payout history, performance metrics, and goal tracking.",
      icon: Gauge,
    },
    {
      title: "Affiliate Program",
      description:
        "Multi-tier affiliate structure, commission tracking, promotional tools, and automated payouts.",
      icon: Users,
    },
    {
      title: "Certificate System",
      description:
        "Automated certificate generation, achievement badges, trader rankings, and public profiles.",
      icon: Award,
    },
    {
      title: "Compliance Suite",
      description:
        "Regulatory compliance tools, audit trails, reporting systems, and jurisdiction-specific rules.",
      icon: Lock,
    },
  ],
};

// Trading App Data
export const tradingAppData = {
  title: "Trading App",
  subtitle: "Native Mobile Experience",
  description:
    "Deliver a premium mobile trading experience with native iOS and Android apps featuring real-time sync, advanced charting, and full trading functionality on the go.",
  heroIcon: Smartphone,
  keyFeatures: [
    {
      title: "Native Performance",
      description:
        "Built with React Native for optimal performance, smooth animations, offline capabilities, and native device features.",
      icon: Mobile,
    },
    {
      title: "Real-Time Sync",
      description:
        "Instant synchronization across devices, real-time price updates, push notifications, and seamless account switching.",
      icon: RefreshCw,
    },
    {
      title: "Mobile Charting",
      description:
        "Touch-optimized charts, technical indicators, drawing tools, multiple timeframes, and gesture controls.",
      icon: LineChart,
    },
    {
      title: "Biometric Security",
      description:
        "Face ID/Touch ID authentication, secure PIN protection, encrypted data storage, and session management.",
      icon: Lock,
    },
  ],
  integrations: [
    {
      name: "iOS App Store",
      logo: "iOS",
      description: "Native iOS app with full App Store compliance and TestFlight support.",
    },
    {
      name: "Google Play",
      logo: "AND",
      description: "Native Android app optimized for all Android devices and versions.",
    },
    {
      name: "Push Notifications",
      logo: "PN",
      description: "Firebase Cloud Messaging for real-time alerts and notifications.",
    },
    {
      name: "Mobile Analytics",
      logo: "MA",
      description: "App analytics, user behavior tracking, and performance monitoring.",
    },
    {
      name: "Crash Reporting",
      logo: "CR",
      description: "Automated crash detection and reporting for rapid issue resolution.",
    },
    {
      name: "App Updates",
      logo: "AU",
      description: "Over-the-air updates and feature flag management for gradual rollouts.",
    },
  ],
  advancedSolutions: [
    {
      title: "Tablet Optimization",
      description:
        "Dedicated tablet layouts, multi-window support, landscape mode optimization, and enhanced charting.",
      icon: Tablet,
    },
    {
      title: "Offline Mode",
      description:
        "View positions and history offline, queue orders for execution, and automatic sync when online.",
      icon: Cloud,
    },
    {
      title: "Widget Support",
      description:
        "Home screen widgets for quick account overview, watchlists, and market updates.",
      icon: Monitor,
    },
    {
      title: "Apple Watch App",
      description:
        "Companion watchOS app for quick market checks, alerts, and position monitoring.",
      icon: Activity,
    },
    {
      title: "Dark Mode",
      description:
        "System-integrated dark mode, customizable themes, and eye-comfort settings.",
      icon: Settings,
    },
    {
      title: "Multi-Language",
      description:
        "Support for 30+ languages with RTL support and localized content.",
      icon: Globe,
    },
  ],
};

// Bonus Manager Data
export const bonusManagerData = {
  title: "Bonus Manager",
  subtitle: "Flexible Bonus Rules & Automated Payouts",
  description:
    "Create sophisticated bonus programs with flexible rules, tiered structures, automated calculations, and scheduled payouts to boost client acquisition and retention.",
  heroIcon: Gift,
  keyFeatures: [
    {
      title: "Bonus Rule Engine",
      description:
        "Create complex bonus rules with conditions, eligibility criteria, time-based triggers, and volume requirements.",
      icon: Settings,
    },
    {
      title: "Tiered Programs",
      description:
        "Multi-tier bonus structures, VIP programs, loyalty rewards, progressive bonuses, and achievement-based incentives.",
      icon: Award,
    },
    {
      title: "Automated Calculations",
      description:
        "Real-time bonus tracking, automatic credit/debit, withdrawal restrictions, and compliance with bonus terms.",
      icon: DollarSign,
    },
    {
      title: "Payout Scheduling",
      description:
        "Flexible payout schedules, milestone-based releases, time-locked bonuses, and automated distribution.",
      icon: Calendar,
    },
  ],
  integrations: [
    {
      name: "Trading Platforms",
      logo: "TP",
      description: "Integration with MT4/MT5 and cTrader for bonus credit management.",
    },
    {
      name: "Payment Systems",
      logo: "PS",
      description: "Automated bonus payouts via multiple payment methods and processors.",
    },
    {
      name: "CRM Integration",
      logo: "CRM",
      description: "Seamless integration with CRM for client segmentation and targeting.",
    },
    {
      name: "Analytics Tools",
      logo: "AT",
      description: "Bonus performance analytics and ROI tracking for marketing campaigns.",
    },
    {
      name: "Compliance",
      logo: "CP",
      description: "Regulatory compliance tools for bonus terms and conditions.",
    },
    {
      name: "Email Marketing",
      logo: "EM",
      description: "Automated bonus notifications and promotional campaigns.",
    },
  ],
  advancedSolutions: [
    {
      title: "Cashback Programs",
      description:
        "Volume-based cashback, rebate structures, loyalty points, and automated calculations.",
      icon: Percent,
    },
    {
      title: "Referral Bonuses",
      description:
        "Multi-tier referral programs, friend-get-friend bonuses, and affiliate rewards.",
      icon: Users,
    },
    {
      title: "Contest Management",
      description:
        "Trading competitions, leaderboards, prize distribution, and automated winner selection.",
      icon: Award,
    },
    {
      title: "Credit Facilities",
      description:
        "Margin credit, leverage bonuses, trading credits, and flexible credit terms.",
      icon: CreditCard,
    },
    {
      title: "Withdrawal Controls",
      description:
        "Bonus withdrawal restrictions, volume requirements, time locks, and compliance checks.",
      icon: Lock,
    },
    {
      title: "Reporting Dashboard",
      description:
        "Comprehensive bonus analytics, cost tracking, ROI metrics, and performance insights.",
      icon: BarChart3,
    },
  ],
};

