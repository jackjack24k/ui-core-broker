import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

const FAQ = ({ 
  title = "Frequently Asked Questions", 
  subtitle = "Find answers to common questions about our services",
  items 
}: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary text-sm font-semibold mb-6 backdrop-blur-sm">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Question Button */}
              <button
                onClick={() => toggleQuestion(index)}
                className="relative w-full text-left p-6 flex items-start justify-between gap-4 transition-all duration-300"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-gradient-to-br from-primary to-accent text-white' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    <span className="font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className={`text-lg font-semibold pr-4 transition-colors ${
                    openIndex === index ? 'text-primary' : 'text-foreground'
                  }`}>
                    {item.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`relative overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pl-[4.5rem]">
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 animate-fade-in-up">
          <h3 className="text-xl font-semibold mb-2 text-foreground">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            Our team is here to help. Get in touch with us for personalized assistance.
          </p>
          <a href="/contact">
            <button className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
              Contact Support
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
