import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Rocket, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Orbs floating animation
      gsap.to(orb1Ref.current, {
        x: 50,
        y: -30,
        scale: 1.2,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2Ref.current, {
        x: -50,
        y: 30,
        scale: 0.9,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div ref={cardRef} className="relative rounded-3xl overflow-hidden border border-primary/30 shadow-2xl order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              alt="Platform Dashboard"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
            
            {/* Floating stats cards on image */}
            <div className="absolute bottom-8 left-8 p-4 rounded-xl bg-card/90 backdrop-blur-md border border-primary/30 shadow-xl">
              <div className="text-sm text-muted-foreground mb-1">Active Traders</div>
              <div className="text-2xl font-bold text-primary">12,458+</div>
            </div>
            
            <div className="absolute top-8 right-8 p-4 rounded-xl bg-card/90 backdrop-blur-md border border-accent/30 shadow-xl">
              <div className="text-sm text-muted-foreground mb-1">Trading Volume</div>
              <div className="text-2xl font-bold text-accent">$2.4B+</div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left order-1 lg:order-2 relative">
          {/* Glowing orbs */}
          <div ref={orb1Ref} className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[96px]"></div>
          <div ref={orb2Ref} className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/20 rounded-full blur-[96px]"></div>

          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-sm font-medium mb-8 backdrop-blur-sm">
              <Rocket className="w-4 h-4 text-primary animate-bounce" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
                Start Your Journey Today
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Ready to Transform <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
                  Your Brokerage?
                </span>
                
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              Join hundreds of brokers who've already made the switch. Schedule a demo or explore our sandbox environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center mb-12">
              <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105 group border-0">
                Book a Technical Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all hover:scale-105 group">
                Launch Sandbox
                <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 border-t border-border/30">
              <div className="flex flex-wrap lg:justify-start justify-center items-center gap-6 md:gap-8">
                {[
                  { icon: Star, text: "99.9% Uptime" },
                  { icon: Sparkles, text: "24/7 Support" },
                  { icon: Rocket, text: "No Credit Card Required" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 group cursor-default">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
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
