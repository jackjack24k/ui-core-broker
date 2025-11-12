import { Zap, Shield, LineChart, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Low Latency",
      description: "Ultra-fast execution with sub-millisecond routing to top-tier liquidity providers.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Built-in regulatory frameworks for FCA, CySEC, ASIC and more.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    },
    {
      icon: LineChart,
      title: "Advanced Risk Controls",
      description: "Real-time monitoring, margin management, and automated risk mitigation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      icon: Users,
      title: "Seamless Integration",
      description: "Connect with MT4/5, cTrader, and major CRM systems in minutes.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20 animate-fade-in-up">
            Platform Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Why Choose Start Broker Tech?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Built by traders, for brokers. Everything you need to launch and scale your brokerage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-0 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                {/* Image Background */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent"></div>
                  
                  {/* Icon overlay on image */}
                  <div className="absolute top-4 right-4 p-3 rounded-xl bg-card/90 backdrop-blur-sm border border-primary/20 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={24} strokeWidth={2} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-primary/30 animate-float z-20"></div>
                <div className="absolute bottom-8 right-6 w-1.5 h-1.5 rounded-full bg-accent/30 animate-float z-20" style={{ animationDelay: '1s' }}></div>

                <div className="relative p-8 z-10">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
