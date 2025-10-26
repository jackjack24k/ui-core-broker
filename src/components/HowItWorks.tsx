import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Onboard & Configure",
    description: "Set up your broker environment in minutes. Configure branding, trading parameters, and compliance rules.",
  },
  {
    number: "02",
    title: "Connect Liquidity",
    description: "Integrate with your preferred LPs and bridges. Configure routing, spreads, and execution logic.",
  },
  {
    number: "03",
    title: "Launch & Scale",
    description: "Go live with your branded platform. Monitor performance, manage risk, and scale operations seamlessly.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            From setup to launch in days, not months
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-accent mb-4 opacity-20">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-primary-foreground/70">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-12 -right-8 text-accent/50" size={32} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
