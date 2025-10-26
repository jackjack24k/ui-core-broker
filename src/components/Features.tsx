import { Zap, Shield, GitMerge, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Ultra-Low Latency",
    description: "Sub-millisecond execution with direct market access and optimized routing to top-tier liquidity providers.",
  },
  {
    icon: GitMerge,
    title: "Seamless Integration",
    description: "Connect with MT4/MT5, cTrader, and custom platforms. RESTful APIs and WebSocket feeds for real-time data.",
  },
  {
    icon: Shield,
    title: "Advanced Risk Controls",
    description: "Real-time risk monitoring, automated position limits, and comprehensive compliance tools built-in.",
  },
  {
    icon: CheckCircle,
    title: "Regulatory Ready",
    description: "Pre-configured for ESMA, FCA, ASIC compliance with audit trails and reporting templates.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Start Broker Tech
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for modern brokers who demand performance, reliability, and scalability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
