import { LucideIcon, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FAQ from "@/components/FAQ";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Integration {
  name: string;
  icon: LucideIcon;
  description: string;
}

interface Solution {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ProductPageProps {
  title: string;
  subtitle: string;
  description: string;
  heroIcon: LucideIcon;
  keyFeatures: Feature[];
  integrations: Integration[];
  advancedSolutions: Solution[];
  ctaText?: string;
  ctaSubtext?: string;
  heroImage?: string;
}

const ProductPage = ({
  title,
  subtitle,
  description,
  heroIcon: HeroIcon,
  keyFeatures,
  integrations,
  advancedSolutions,
  ctaText = "Start Your Free Trial",
  ctaSubtext = "No credit card required. Get started in minutes.",
  heroImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
}: ProductPageProps) => {
  const faqItems = [
    {
      question: "How does this solution integrate with existing systems?",
      answer: "Our solution offers seamless integration through REST APIs, webhooks, and pre-built connectors for major platforms like MT4, MT5, payment gateways, and CRM systems. We provide comprehensive documentation and technical support throughout the integration process."
    },
    {
      question: "What kind of training and onboarding is provided?",
      answer: "We provide complete onboarding including live training sessions, video tutorials, detailed documentation, and hands-on support. Your team will have access to our knowledge base and dedicated support team to ensure a smooth transition."
    },
    {
      question: "Can this solution scale as my business grows?",
      answer: "Absolutely. Our infrastructure is built on cloud-native architecture that automatically scales with your business. Whether you have 100 or 100,000 users, the system maintains optimal performance without manual intervention."
    },
    {
      question: "What security measures are in place?",
      answer: "We implement enterprise-grade security including SSL encryption, regular security audits, GDPR compliance, role-based access controls, and automated backups. All data is encrypted both in transit and at rest."
    },
    {
      question: "What's included in the support package?",
      answer: "Our support includes 24/7 technical assistance, regular updates, bug fixes, security patches, and dedicated account management. Premium packages also include priority response times and custom development requests."
    },
    {
      question: "Can I customize this solution for my specific needs?",
      answer: "Yes! All our solutions are highly customizable. We can modify features, workflows, user interfaces, and integrations to match your exact requirements. Contact us to discuss your specific customization needs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6 animate-fade-in-up">
                <HeroIcon size={48} className="animate-float" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in-up animation-delay-100">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium animate-fade-in-up animation-delay-200">
                {subtitle}
              </p>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up animation-delay-300">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center animate-fade-in-up animation-delay-400">
                <Button size="lg" className="text-lg px-8 group hover:scale-105 transition-transform">
                  Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 hover:scale-105 transition-transform">
                  Schedule Demo
                </Button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative animate-fade-in-up animation-delay-500">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 group">
                <img 
                  src={heroImage}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/30 via-transparent to-transparent"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-8 right-8 p-4 rounded-xl bg-card/90 backdrop-blur-md border border-primary/30 shadow-xl animate-float">
                  <div className="text-sm text-muted-foreground mb-1">Active Users</div>
                  <div className="text-2xl font-bold text-primary">2,458+</div>
                </div>
                
                <div className="absolute bottom-8 left-8 p-4 rounded-xl bg-card/90 backdrop-blur-md border border-accent/30 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="text-sm text-muted-foreground mb-1">Uptime</div>
                  <div className="text-2xl font-bold text-accent">99.9%</div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 right-8 w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to deliver exceptional trading experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with industry-leading platforms and liquidity providers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {integrations.map((integration, index) => {
              const IntegrationIcon = integration.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:border-accent transition-all duration-500 group hover:shadow-lg hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <IntegrationIcon size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground group-hover:text-accent transition-colors">
                      {integration.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {integration.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advanced Solutions Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade capabilities for sophisticated trading operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {advancedSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {ctaText}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {ctaSubtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Contact Sales
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ 
        items={faqItems}
        title="Product FAQ"
        subtitle="Common questions about this solution"
      />

      <Footer />
    </div>
  );
};

export default ProductPage;

