import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "CEO, TradeFusion Markets",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      content: "Start Broker Tech transformed our operations. We went from concept to live broker in just 3 weeks. The CRM and risk management tools are industry-leading.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "COO, Apex Trading Group",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      content: "The platform's scalability is impressive. We've grown from 500 to 15,000+ active traders without any performance issues. Their support team is exceptional.",
      rating: 5
    },
    {
      name: "David Martinez",
      role: "Founder, ProFX Brokerage",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      content: "Best decision we made for our brokerage. The white-label solution is fully customizable, and the liquidity integrations are seamless. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of successful brokers who have transformed their business with our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors">
                <Quote size={32} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/20"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
