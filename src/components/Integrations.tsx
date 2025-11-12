import { CheckCircle2 } from "lucide-react";

const Integrations = () => {
  const platforms = [
    { name: "MetaTrader 4", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&q=80" },
    { name: "MetaTrader 5", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80" },
    { name: "cTrader", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80" },
    { name: "TradingView", image: "https://images.unsplash.com/photo-1642790551116-18e150f248e5?w=200&q=80" },
    { name: "B2Broker", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=200&q=80" },
    { name: "PrimeXM", image: "https://images.unsplash.com/photo-1634704784915-aacf363b021f?w=200&q=80" },
    { name: "OneZero", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=200&q=80" },
    { name: "Integral", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80" },
    { name: "Stripe", image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=200&q=80" },
    { name: "PayPal", image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=200&q=80" },
    { name: "Coinbase", image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=200&q=80" },
    { name: "Onfido", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&q=80" }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Integrations
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Seamless Connections
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pre-built integrations with all major trading platforms, payment gateways, and liquidity providers.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="group relative rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
              >
                {/* Logo/Image Section */}
                <div className="relative h-32 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                  <img 
                    src={platform.image} 
                    alt={platform.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                  
                  {/* Check icon overlay */}
                  <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={18} className="text-white" />
                  </div>
                </div>
                
                {/* Text Section */}
                <div className="p-4 relative">
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{platform.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Don't see your integration?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold border border-primary/20 hover:border-primary"
            >
              Request Custom Integration
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
