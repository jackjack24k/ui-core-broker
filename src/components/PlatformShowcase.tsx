import { useState } from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";

const PlatformShowcase = () => {
  const [activeDevice, setActiveDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const screenshots = {
    desktop: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    tablet: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    mobile: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80"
  };

  const devices = [
    { id: "desktop" as const, icon: Monitor, label: "Desktop" },
    { id: "tablet" as const, icon: Tablet, label: "Tablet" },
    { id: "mobile" as const, icon: Smartphone, label: "Mobile" }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[128px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Platform Preview
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Beautiful on Every Device
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fully responsive design that works seamlessly across desktop, tablet, and mobile devices.
          </p>
        </div>

        {/* Device Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {devices.map((device) => {
            const Icon = device.icon;
            return (
              <button
                key={device.id}
                onClick={() => setActiveDevice(device.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                  activeDevice === device.id
                    ? "bg-gradient-to-r from-primary to-accent text-white border-transparent shadow-lg shadow-primary/30 scale-105"
                    : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                <Icon size={20} />
                <span className="font-semibold">{device.label}</span>
              </button>
            );
          })}
        </div>

        {/* Screenshot Display */}
        <div className="max-w-6xl mx-auto">
          <div className={`relative rounded-2xl overflow-hidden border-4 border-border shadow-2xl transition-all duration-500 ${
            activeDevice === "desktop" ? "aspect-video" : 
            activeDevice === "tablet" ? "aspect-[4/3] max-w-3xl mx-auto" : 
            "aspect-[9/16] max-w-sm mx-auto"
          }`}>
            {/* Screenshot Image */}
            <img
              src={screenshots[activeDevice]}
              alt={`${activeDevice} view`}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

            {/* Interactive Hotspots */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-primary animate-ping"></div>
            <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-accent animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/3 left-1/2 w-4 h-4 rounded-full bg-purple-500 animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Lightning Fast", description: "Optimized for performance", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" },
              { title: "Intuitive Design", description: "User-friendly interface", image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=400&q=80" },
              { title: "Real-time Updates", description: "Live data streaming", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" }
            ].map((feature, index) => (
              <div key={index} className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformShowcase;
