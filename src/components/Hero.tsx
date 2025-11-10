import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center px-4 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium mb-8 shadow-lg shadow-primary/10 animate-fade-in-up">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Trusted by 500+ brokers worldwide
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <span className="text-foreground">Enterprise-Grade </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Broker Technology
            </span>
            <br />
            <span className="text-foreground">Platform</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Complete CRM, Traderroom, and Risk Management suite built for modern forex brokers.
            <span className="text-foreground font-semibold"> Launch in days, not months.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button size="lg" className="text-base px-8 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 group">
              Watch Overview
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 border-border hover:border-primary/50 transition-all hover:scale-105">
              Explore Modules
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border/50 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            {[
              { label: "Active Brokers", value: "500+" },
              { label: "Daily Trades", value: "2M+" },
              { label: "Uptime", value: "99.9%" },
              { label: "Countries", value: "120+" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center md:text-left group cursor-default hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
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
