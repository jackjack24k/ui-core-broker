import {
  LayoutDashboard, Globe, Droplet, Building2, Shield, Wrench,
  MessageSquare, FileCheck, Copy, Server, Cog, Users,
  Wallet, BarChart3, MonitorSmartphone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: LayoutDashboard,
      title: "Forex CRM",
      description: "Streamlined CRM solutions tailored for forex brokers."
    },
    {
      icon: Globe,
      title: "Forex Webdesign",
      description: "Custom forex websites built to convert."
    },
    {
      icon: Droplet,
      title: "Forex Liquidity",
      description: "Connect with top-tier liquidity providers."
    },
    {
      icon: Building2,
      title: "Prop Firm CRM",
      description: "CRM system tailored for proprietary firms."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Tools to monitor and control trading risk."
    },
    {
      icon: Wrench,
      title: "Custom Tools",
      description: "Bespoke tools tailored to your operations."
    },
    {
      icon: MessageSquare,
      title: "Consulting",
      description: "Expert advice tailored for your growth path."
    },
    {
      icon: FileCheck,
      title: "Regulations",
      description: "Reliable Regulations for uninterrupted trading."
    },
    {
      icon: Copy,
      title: "Forex Copier",
      description: "Instantly copy trades across accounts."
    },
    {
      icon: Server,
      title: "Dedicated Server",
      description: "High-speed, secure servers for MT4/MT5 hosting."
    },
    {
      icon: Cog,
      title: "Backend Solutions",
      description: "Custom admin panels and integration tools."
    },
    {
      icon: Users,
      title: "Social Trading",
      description: "Enable trade sharing and follower systems."
    },
    {
      icon: Wallet,
      title: "PAMM/MAMM",
      description: "Multi-account management made easy."
    },
    {
      icon: BarChart3,
      title: "Reporting Tools",
      description: "Advanced analytics for brokers and traders."
    },
    {
      icon: MonitorSmartphone,
      title: "VPS Hosting",
      description: "Reliable VPS for uninterrupted trading."
    }
  ];

  const specializedServices = [
    {
      number: 1,
      title: "CRM Development & Integration",
      description: "We design and deploy custom-built CRM solutions tailored to Forex and financial businesses. Our platform enhances lead management, customer retention, and operational efficiency through automation and real-time analytics.",
      features: [
        "Lead & Sales Pipeline Tracking",
        "Automated Email & SMS Marketing",
        "Role-Based Access Control",
        "Integration with MT4, MT5, and Trading Platforms"
      ],
      gradient: "primary"
    },
    {
      number: 2,
      title: "Broker Management Solutions",
      description: "Our broker management system helps streamline operations with a central dashboard that tracks clients, partners, and transactions in real time.",
      features: [
        "IB & Affiliate Management",
        "Multi-Level Commission Tracking",
        "Custom Reports and Analytics",
        "Secure Client Portal"
      ],
      gradient: "accent"
    },
    {
      number: 3,
      title: "Website Design & Branding",
      description: "Create a professional online presence with our custom website and branding services. We ensure your brokerage stands out with fast, modern, and conversion-optimized designs.",
      features: [
        "Responsive UI/UX Design",
        "Multi-Language Support",
        "SEO Optimization",
        "Branding and Logo Design"
      ],
      gradient: "primary"
    },
    {
      number: 4,
      title: "MT4 / MT5 Integration",
      description: "We offer seamless integration with MetaTrader 4 and 5 platforms, enabling smooth data flow between trading systems and your CRM.",
      features: [
        "Real-Time Account Sync",
        "Trade Data Analysis",
        "Automated Deposit/Withdrawal Updates",
        "Advanced API Integration"
      ],
      gradient: "accent"
    },
    {
      number: 5,
      title: "Payment Gateway Integration",
      description: "Simplify deposits and withdrawals with secure payment solutions. We integrate multiple global gateways to make your client transactions quick and reliable.",
      features: [
        "Multi-Currency Support",
        "PCI-DSS Compliant Security",
        "Instant Processing",
        "Wallet Management"
      ],
      gradient: "primary"
    },
    {
      number: 6,
      title: "Partner & IB Portal Development",
      description: "Empower your partners and Introducing Brokers (IBs) with a dedicated portal that tracks commissions, referrals, and performance insights.",
      features: [
        "Tiered IB Structures",
        "Real-Time Commission Reports",
        "Referral Tracking Dashboard",
        "Automated Payout System"
      ],
      gradient: "accent"
    },
    {
      number: 7,
      title: "Mobile App Development",
      description: "Reach your clients on the go with Android and iOS apps that synchronize with your CRM and trading platforms.",
      features: [
        "Secure Login & Data Encryption",
        "Push Notifications for Updates",
        "Real-Time Account Monitoring",
        "In-App Trading Tools"
      ],
      gradient: "primary"
    },
    {
      number: 8,
      title: "Cloud Hosting & Maintenance",
      description: "We host, manage, and maintain your CRM and website on scalable cloud infrastructure with 24/7 uptime monitoring and support.",
      features: [
        "High Availability & Security",
        "Regular Backups",
        "Performance Optimization",
        "24/7 Technical Support"
      ],
      gradient: "accent"
    },
    {
      number: 9,
      title: "Data Analytics & Reporting",
      description: "Transform raw data into actionable insights. We help you make smarter business decisions through advanced analytics dashboards.",
      features: [
        "Real-Time Reports",
        "KPI Tracking",
        "Custom Dashboards",
        "Predictive Analytics"
      ],
      gradient: "primary"
    },
    {
      number: 10,
      title: "Technical Support & Consultation",
      description: "Our experts provide round-the-clock technical assistance and consulting to help your brokerage scale effectively.",
      features: [
        "24/7 Support Team",
        "CRM Customization Guidance",
        "Platform Troubleshooting",
        "Business Growth Consulting"
      ],
      gradient: "accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="container mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary text-sm font-semibold mb-8 animate-fade-in-up backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Start Broker Tech
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-foreground animate-fade-in-up animation-delay-100 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-accent">
              Comprehensive Forex Brokerage Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up animation-delay-200 leading-relaxed">
              From CRM systems to liquidity solutions, Start Broker Tech provides everything you need to launch and scale your forex brokerage.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12 animate-fade-in-up animation-delay-300">
              <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Services</div>
              </div>
              <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Customizable</div>
              </div>
              <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-accent mb-2">Fast</div>
                <div className="text-sm text-muted-foreground">Deployment</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - Modern Card Layout */}
        <section className="py-20 px-4 relative">
          <div className="container mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                What We Offer
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Complete solutions for your forex brokerage success
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in-up overflow-hidden"
                    style={{ animationDelay: `${index * 40}ms` }}
                  >
                    {/* Gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Animated corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary group-hover:to-accent transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                        <Icon className="text-primary group-hover:text-white transition-colors duration-500" size={32} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {service.description}
                      </p>

                      {/* Hover arrow */}
                      <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                        <span className="text-sm font-semibold">Learn more</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ForexCRM Cloud — Detailed Services Section */}
        <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary text-sm font-semibold mb-6 backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                ForexCRM Cloud
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Specialized Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enterprise-grade services tailored for Forex and financial businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializedServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up overflow-hidden"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Image placeholder with gradient */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-3xl shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        {service.number}
                      </div>
                    </div>
                    {/* Animated particles */}
                    <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white/40 animate-pulse"></div>
                    <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-white/30 animate-pulse delay-300"></div>
                    <div className="absolute bottom-6 left-12 w-2 h-2 rounded-full bg-white/50 animate-pulse delay-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm group/item"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mt-0.5 group-hover/item:from-primary group-hover/item:to-accent transition-all duration-300">
                            <svg className="w-3 h-3 text-primary group-hover/item:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom accent line */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Learn more</span>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300 group-hover:scale-110">
                          <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

