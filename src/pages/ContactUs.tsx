import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FAQ from "@/components/FAQ";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  const faqItems = [
    {
      question: "What's the best way to reach you?",
      answer: "For urgent matters, call us directly. For general inquiries, use our contact form or email us. We typically respond to emails within 2-4 hours during business hours. For technical support, we offer 24/7 availability through our support portal."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We provide free 30-minute consultation calls to understand your needs and discuss how we can help. During this call, we'll assess your requirements, answer questions, and provide initial recommendations at no cost."
    },
    {
      question: "What information should I include in my inquiry?",
      answer: "Please include your business type (startup/established broker), current challenges, desired solutions, timeline, and budget range. The more details you provide, the better we can tailor our response and recommendations."
    },
    {
      question: "How quickly can you start a project after contact?",
      answer: "After initial consultation and agreement, we can typically start within 1-2 weeks. Rush projects can be accommodated with expedited onboarding. Timeline depends on project complexity and our current workload."
    },
    {
      question: "Can I schedule a demo of your products?",
      answer: "Absolutely! We offer live demos of all our products. You can schedule a personalized demo through our contact form or by calling us directly. Demos typically last 30-45 minutes and can be customized to your specific interests."
    },
    {
      question: "Do you have offices I can visit?",
      answer: "Yes, we welcome in-person visits to our main office. Please schedule an appointment in advance to ensure our team is available. We can also arrange video calls if in-person meetings aren't convenient."
    }
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Form animation
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

     
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@startbrokertech.com",
      description: "We'll respond within 24 hours",
      color: "from-primary to-accent"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
      color: "from-accent to-primary"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Financial District, NY",
      description: "Schedule an appointment",
      color: "from-primary to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Floating shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto relative z-10">
          <div ref={heroRef} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-sm font-medium mb-6 backdrop-blur-sm">
              <MessageSquare className="w-4 h-4 text-primary animate-pulse" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
                Get In Touch
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
              Let's Build Your{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
                Brokerage Together
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our platform? Want to schedule a demo? Our team is here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 backdrop-blur-sm overflow-hidden text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500"></div>
                  
                  <div className="relative">
                    <div className={`mb-4 inline-flex p-4 rounded-2xl bg-gradient-to-br ${info.color} text-white shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                      <Icon size={28} strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                    <p className="text-primary font-semibold mb-1">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Send Us a{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Message
                  </span>
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105 group border-0"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Right Column - Additional Info */}
            <div className="lg:pl-8">
              <div className="sticky top-24 space-y-6">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border/50 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="text-foreground font-medium">8:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="text-foreground font-medium">10:00 AM - 4:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="text-foreground font-medium">Closed</span>
                    </p>
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
                  <Sparkles className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">Quick Response</h3>
                  <p className="text-muted-foreground mb-4">
                    Our team typically responds to all inquiries within 24 hours during business days.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="font-semibold">Average response time: 4 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ 
        items={faqItems}
        title="Contact FAQ"
        subtitle="Quick answers about getting in touch with us"
      />

      <Footer />
    </div>
  );
};

export default ContactUs;
