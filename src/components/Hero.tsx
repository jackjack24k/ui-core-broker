import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-8">
            <div className="h-2 w-2 rounded-full bg-success animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              Trusted by 500+ brokers worldwide
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            All-in-one CRM & Traderroom for{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              modern FX brokers
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Onboard faster, manage smarter. Enterprise-grade platform with low-latency execution, 
            comprehensive risk controls, and seamless integrations.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-accent group"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:bg-muted"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Overview
            </Button>
          </div>

          {/* Trust logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Integrated with
            </div>
            {["MetaTrader", "cTrader", "LMAX", "Currenex", "PrimeXM"].map((name) => (
              <div 
                key={name}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
    </section>
  );
};

export default Hero;
