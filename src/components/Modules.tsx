import { Users, TrendingUp, Copy, Share2, Smartphone, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";

const modules = [
  {
    icon: Users,
    title: "CRM & Client Management",
    description: "Complete client lifecycle management with automated onboarding, KYC/AML workflows, and segmentation tools.",
    color: "accent",
  },
  {
    icon: TrendingUp,
    title: "Traderroom Platform",
    description: "White-label trader portal with real-time positions, analytics, deposits/withdrawals, and account management.",
    color: "accent",
  },
  {
    icon: Copy,
    title: "Copy Trading System",
    description: "Turn top traders into products. Automated follower management, subscription tiers, and revenue sharing.",
    color: "primary",
  },
  {
    icon: Share2,
    title: "Social Trading Feed",
    description: "Engagement-driven community with activity streams, leaderboards, and trader profiles.",
    color: "primary",
  },
  {
    icon: Smartphone,
    title: "Mobile Trading App",
    description: "Native iOS and Android apps with full trading capabilities, notifications, and biometric security.",
    color: "success",
  },
  {
    icon: Settings,
    title: "Admin Suite",
    description: "Bonus Manager, Swap Manager, Symbol Groups, Quote Manager, LP routing, and risk management tools.",
    color: "success",
  },
];

const Modules = () => {
  return (
    <section id="products" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Product Suite
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modular architecture that scales with your business. Deploy what you need, when you need it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-accent transition-all duration-300 hover:-translate-y-1 border-border group cursor-pointer"
              >
                <div className={`h-12 w-12 rounded-lg bg-${module.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-6 w-6 text-${module.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {module.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {module.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            All modules work together seamlessly with unified data and user management
          </p>
        </div>
      </div>
    </section>
  );
};

export default Modules;
