import { Zap, Shield, LineChart, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Low Latency",
      description: "Ultra-fast execution with sub-millisecond routing to top-tier liquidity providers."
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Built-in regulatory frameworks for FCA, CySEC, ASIC and more."
    },
    {
      icon: LineChart,
      title: "Advanced Risk Controls",
      description: "Real-time monitoring, margin management, and automated risk mitigation."
    },
    {
      icon: Users,
      title: "Seamless Integration",
      description: "Connect with MT4/5, cTrader, and major CRM systems in minutes."
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Platform Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Why Choose Start Broker Tech?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built by traders, for brokers. Everything you need to launch and scale your brokerage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                    <Icon size={28} strokeWidth={2} />
                  </div>
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
