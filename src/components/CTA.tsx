import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-accent rounded-2xl p-12 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
                Ready to Transform Your Brokerage?
              </h2>
              <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of brokers who trust Start Broker Tech for their mission-critical operations. 
                Schedule a personalized demo today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-glow text-primary-foreground"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Book a Technical Call
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-accent-foreground/20 hover:bg-accent-foreground/10 text-accent-foreground"
                >
                  Launch Sandbox
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <p className="text-sm text-accent-foreground/70 mt-6">
                No credit card required • Free 14-day trial • Full feature access
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
