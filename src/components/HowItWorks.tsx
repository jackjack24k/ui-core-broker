import { UserPlus, Link2, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Onboard",
      description: "Sign up and configure your broker instance in minutes with guided setup."
    },
    {
      icon: Link2,
      title: "Connect LPs",
      description: "Integrate with top liquidity providers and trading platforms seamlessly."
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Go live with a fully branded brokerage platform ready for clients."
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[128px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          {/* <div className="inline-block px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-6 border border-success/20">
            Simple Process
          </div> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your brokerage up and running in three simple steps. No technical expertise required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
          {/* Connection lines */}
         
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center group">
                  {/* Glowing number badge */}
                  
                  
                  {/* Icon container */}
                  <div className="mb-8 inline-flex p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border group-hover:border-primary/50 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500"></div>
                    
                    <Icon size={48} className="text-primary relative z-10 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
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

export default HowItWorks;
