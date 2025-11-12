import { UserPlus, Link2, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Onboard",
      description: "Sign up and configure your broker instance in minutes with guided setup.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
    },
    {
      icon: Link2,
      title: "Connect LPs",
      description: "Integrate with top liquidity providers and trading platforms seamlessly.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Go live with a fully branded brokerage platform ready for clients.",
      image: "https://images.unsplash.com/photo-1�586281380117-5a60ae2050cc?w=800&q=80"
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
          <div className="hidden md:block absolute top-32 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg z-20 group-hover:scale-125 transition-transform duration-300">
                    {index + 1}
                  </div>
                  
                  {/* Image Card with Icon Overlay */}
                  <div className="mb-8 relative rounded-2xl overflow-hidden border border-border group-hover:border-primary/50 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 group-hover:-translate-y-2">
                    {/* Background Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent"></div>
                      
                      {/* Centered Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-6 rounded-2xl bg-card/90 backdrop-blur-md border-2 border-primary/30 group-hover:border-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                          <Icon size={48} className="text-primary group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
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
