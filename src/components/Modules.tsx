import { Database, TrendingUp, Copy, Users, Smartphone, Gift } from "lucide-react";

const Modules = () => {
  const modules = [
    {
      icon: Database,
      title: "CRM & Client Portal",
      description: "Complete client lifecycle management from onboarding to retention."
    },
    {
      icon: TrendingUp,
      title: "Traderroom",
      description: "Real-time trading interface with advanced charting and order management."
    },
    {
      icon: Copy,
      title: "Copy Trading",
      description: "Turn top traders into products with automated follower management."
    },
    {
      icon: Users,
      title: "Prop Funding",
      description: "Capital allocation, P&L waterfalls, and risk controls for prop firms."
    },
    {
      icon: Smartphone,
      title: "Trading App",
      description: "Native mobile experience for iOS and Android with real-time sync."
    },
    {
      icon: Gift,
      title: "Bonus Manager",
      description: "Flexible bonus rules, tiers, and automated payout schedules."
    }
  ];

  return (
    <section id="products" className="py-32 px-4 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-background to-card/20"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
            Modular Architecture
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Complete Product Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every module you need to run a modern brokerage, fully integrated and ready to deploy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-primary/5 group-hover:to-transparent transition-all duration-700"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                <div className="relative">
                  <div className="mb-6 inline-flex p-5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 group-hover:scale-110">
                    <Icon size={32} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {module.description}
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

export default Modules;
