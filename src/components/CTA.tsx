import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center p-16 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-primary/30 shadow-2xl shadow-primary/10 backdrop-blur-sm relative overflow-hidden">
          {/* Glowing orbs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[96px] animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/20 rounded-full blur-[96px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
              <Sparkles size={16} className="animate-pulse" />
              <span>Start Your Journey Today</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Ready to Transform <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Your Brokerage?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of brokers who've already made the switch. Schedule a demo or explore our sandbox environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8 group shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all">
                Book a Technical Call
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 border-border hover:border-primary/50 hover:bg-card/50 transition-all">
                Launch Sandbox
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span>No Credit Card Required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
