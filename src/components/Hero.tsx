import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const floatingCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate orbs
      gsap.to(orb1Ref.current, {
        x: 100,
        y: -50,
        scale: 1.2,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2Ref.current, {
        x: -80,
        y: 60,
        scale: 0.9,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb3Ref.current, {
        x: 50,
        y: 80,
        scale: 1.1,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Main content animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
      }, "-=0.8")
      .from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(statsRef.current?.children || [], {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      }, "-=0.4");

      // Floating cards animation
      if (floatingCardsRef.current) {
        gsap.to(floatingCardsRef.current.children, {
          y: -20,
          duration: 2,
          stagger: 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center px-4 overflow-hidden bg-gradient-to-br from-background via-background to-card/30">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 z-[1]"></div>

      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-20 z-[2]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)] z-[3]"></div>

      {/* Glowing orbs with GSAP animation */}
      <div ref={orb1Ref} className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
      <div ref={orb2Ref} className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]"></div>
      <div ref={orb3Ref} className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium mb-6 shadow-lg shadow-primary/5">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
                Trusted by 500+ brokers worldwide
              </span>
            </div>

            {/* Main Headline */}
            <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
              <span className="text-foreground">Next-Gen </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
                  Forex Brokerage
                </span>
                
              </span>
              <br />
              <span className="text-foreground">Platform</span>
            </h1>

            {/* Subheadline */}
            <p ref={subtitleRef} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Complete CRM, Traderroom, and Risk Management suite built for modern forex brokers.
              <span className="text-foreground font-semibold"> Launch in days, not months.</span>
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105 group border-0">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all hover:scale-105 group">
                Watch Demo
                <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>

            {/* Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Active Brokers", value: "500+", icon: TrendingUp },
                { label: "Daily Trades", value: "2M+", icon: Zap },
                { label: "Uptime", value: "99.9%", icon: Sparkles },
                { label: "Countries", value: "120+", icon: TrendingUp }
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="group cursor-default"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-primary group-hover:scale-125 transition-transform" />
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Floating Cards */}
          <div ref={floatingCardsRef} className="hidden lg:block relative h-[600px]">
            {/* Card 1 - Top */}
            <div className="absolute top-0 right-0 w-72 p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-primary/20 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Total Volume</div>
                  <div className="text-xl font-bold text-foreground">$2.4B</div>
                </div>
              </div>
              <div className="h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-end gap-1 p-2">
                {[40, 60, 45, 70, 55, 80, 65, 90].map((height, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-primary to-accent rounded-sm" style={{ height: `${height}%` }}></div>
                ))}
              </div>
            </div>

            {/* Card 2 - Middle */}
            <div className="absolute top-40 left-0 w-64 p-5 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/30 shadow-xl backdrop-blur-sm">
              <div className="text-sm text-muted-foreground mb-2">Active Traders</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-3">
                12,458
              </div>
              <div className="flex items-center gap-2 text-sm text-green-500">
                <TrendingUp className="w-4 h-4" />
                <span>+23% this month</span>
              </div>
            </div>

            {/* Card 3 - Bottom */}
            <div className="absolute bottom-0 right-12 w-80 p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-primary/10 border border-purple-500/20 shadow-2xl backdrop-blur-sm">
              <div className="text-sm text-muted-foreground mb-3">Recent Transactions</div>
              <div className="space-y-2">
                {[
                  { name: "EUR/USD", amount: "+$1,234", status: "success" },
                  { name: "GBP/JPY", amount: "+$856", status: "success" },
                  { name: "USD/CAD", amount: "-$432", status: "pending" },
                ].map((tx, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-card/50">
                    <span className="text-sm font-medium text-foreground">{tx.name}</span>
                    <span className={`text-sm font-semibold ${tx.status === 'success' ? 'text-green-500' : 'text-yellow-500'}`}>
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl"></div>
            <div className="absolute bottom-40 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-3xl"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
