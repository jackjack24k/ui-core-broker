import React from "react";
import {
  Lightbulb, Users, Shield, Zap, Target, Globe,
  Rocket, HeadphonesIcon, Cloud, Code, Sparkles, Heart
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import FAQ from "../components/FAQ";

const aboutFeatures = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We deliver cutting-edge tech solutions to help your business stay ahead of the curve."
  },
  {
    icon: Users,
    title: "Client-Centric",
    desc: "We tailor our services to fit your business, focusing on transparency, customization, and reliability."
  },
  {
    icon: Shield,
    title: "Security & Scalability",
    desc: "Robust, scalable solutions with enterprise-grade security to help you safely scale and grow."
  },
  {
    icon: Zap,
    title: "Performance Driven",
    desc: "Solutions are thoroughly tested and optimized for performance—always."
  },
];

const empowerCards = [
  {
    icon: Target,
    title: "Our Approach",
    desc: "We deliver future-ready web, CRM, and trading solutions using agile methodology and rapid deployment."
  },
  {
    icon: HeadphonesIcon,
    title: "Working Terms",
    desc: "High-value, client-driven engagement models (fixed, hourly, retainer, or custom) to suit our clients."
  },
  {
    icon: Rocket,
    title: "Deployment Ready",
    desc: "CRM Deployments, product launches, and cloud-native solutions (AWS/Azure/GCP), delivered as part of our offering."
  },
  {
    icon: Globe,
    title: "Support & Handoff",
    desc: "Full post-launch support, documentation, and training for a smooth client handoff."
  },
  {
    icon: Globe,
    title: "Global Delivery",
    desc: "Serving clients worldwide with timezone-friendly teams and multi-lingual support."
  },
  {
    icon: Code,
    title: "CRM Consulting",
    desc: "Advising businesses on CRM selection, optimization, and architecture."
  },
  {
    icon: Cloud,
    title: "CRM Implementation",
    desc: "End-to-end CRM solution delivery and integrations with industry workflows."
  },
  {
    icon: Sparkles,
    title: "CRM Integration",
    desc: "Integrate your CRM with custom solutions and third-party platforms."
  },
];

const expertTeam = [
  {
    icon: Users,
    title: "Collaborative",
    desc: "We value teamwork, open communication, and building trust."
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    desc: "Constant innovation drives our culture and cutting-edge methodology."
  },
  {
    icon: Heart,
    title: "Passionate",
    desc: "Our team is driven by creativity, curiosity, and dedication."
  },
];

export default function AboutUs() {
  const faqItems = [
    {
      question: "What makes your company different from other tech providers?",
      answer: "We specialize exclusively in forex and financial technology, bringing deep industry expertise that generic tech companies lack. Our solutions are purpose-built for brokers, prop firms, and financial institutions, with features and workflows designed specifically for this industry."
    },
    {
      question: "How long have you been in the forex technology industry?",
      answer: "Our team has over 10 years of combined experience in forex technology, having worked with hundreds of brokers worldwide. We've seen the industry evolve and continuously adapt our solutions to meet changing market demands and regulatory requirements."
    },
    {
      question: "Do you work with startups or only established brokers?",
      answer: "We work with both! We help startups launch with cost-effective packages and guide established brokers through scaling and modernization. Our flexible approach means we can support businesses at any stage of growth."
    },
    {
      question: "What is your company's approach to innovation?",
      answer: "Innovation is at our core. We invest heavily in R&D, constantly exploring emerging technologies like AI, blockchain, and cloud computing. We also listen closely to client feedback and market trends to ensure our solutions stay ahead of the curve."
    },
    {
      question: "Can you share client success stories?",
      answer: "We've helped dozens of brokers achieve significant growth. Our clients report 40% reduction in operational costs, 60% faster onboarding times, and improved client retention. We're happy to provide case studies and client references upon request."
    },
    {
      question: "How do you ensure quality in your deliverables?",
      answer: "Quality assurance is built into every stage of our process. We follow agile methodologies, conduct thorough testing, perform security audits, and gather client feedback throughout development. Every project includes a dedicated QA team and comprehensive testing before launch."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary text-sm font-semibold mb-8 animate-fade-in-up backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-foreground animate-fade-in-up animation-delay-100">
              Who We Are
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 animate-fade-in-up animation-delay-200 leading-relaxed">
              JayEn Technology is a full-stack digital transformation agency committed to delivering high-quality, scalable, and secure solutions tailored to your business needs. From ideation to custom development, design, and strategy, we bring your ideas to life using cutting-edge technologies and agile methodologies.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up animation-delay-300">
              <a href="/contact">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Our Story Section with Image */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative animate-fade-in-up">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-accent text-white px-8 py-6 rounded-2xl shadow-2xl">
                  <div className="text-4xl font-bold">100+</div>
                  <div className="text-sm">Clients Served</div>
                </div>
              </div>

              {/* Content */}
              <div className="animate-fade-in-up animation-delay-200">
                <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                  Building the Future of Forex Technology
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    At <span className="text-primary font-semibold">Star Broker Technology</span>, we are passionate about transforming the forex brokerage industry through innovative technology solutions. Our journey began with a simple mission: to empower brokers with cutting-edge tools that drive growth and success.
                  </p>
                  <p>
                    We deliver <span className="text-foreground font-semibold">cutting-edge tech solutions</span> that help your business stay ahead of the curve. Our approach is built on innovation, combining the latest technologies with deep industry expertise to create solutions that truly make a difference.
                  </p>
                  <p>
                    We tailor our services to fit your business, focusing on <span className="text-foreground font-semibold">transparency, customization, and reliability</span>. Every solution we build is designed with your unique needs in mind, ensuring that you get exactly what you need to succeed.
                  </p>
                  <p>
                    Our <span className="text-foreground font-semibold">robust, scalable solutions</span> come with enterprise-grade security to help you safely scale and grow. We understand that performance is critical, which is why all our solutions are thoroughly tested and optimized for peak performance—always.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Section 1: Our Approach */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Content */}
              <div className="animate-fade-in-up order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary text-sm font-semibold mb-6 backdrop-blur-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  Why Choose Us
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                  Empowering Digital Transformation
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    At JayEn Technology, we deliver <span className="text-foreground font-semibold">future-ready web, CRM, and trading solutions</span> using agile methodology and rapid deployment. Our approach combines cutting-edge engineering with creative problem-solving to build solutions that drive real business value.
                  </p>
                  <p>
                    We offer <span className="text-foreground font-semibold">high-value, client-driven engagement models</span> including fixed-price, hourly, retainer, or custom arrangements to suit our clients' unique needs. This flexibility ensures you get the best value while maintaining complete control over your project.
                  </p>
                  <p>
                    Our team specializes in <span className="text-foreground font-semibold">CRM deployments, product launches, and cloud-native solutions</span> on AWS, Azure, and GCP. We don't just build software—we deliver complete, production-ready systems that scale with your business.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative animate-fade-in-up animation-delay-200 order-1 lg:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                    alt="Modern workspace"
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Section 2: Global Delivery & Support */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Image */}
              <div className="relative animate-fade-in-up">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                    alt="Global team"
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className="animate-fade-in-up animation-delay-200">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Global Delivery & Expert Support
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    We provide <span className="text-foreground font-semibold">full post-launch support, documentation, and training</span> for a smooth client handoff. Our commitment doesn't end at deployment—we ensure your team is fully equipped to manage and grow your solution.
                  </p>
                  <p>
                    Serving clients worldwide with <span className="text-foreground font-semibold">timezone-friendly teams and multi-lingual support</span>, we make global collaboration seamless. Our distributed team structure ensures you always have access to expert support when you need it.
                  </p>
                  <p>
                    From <span className="text-foreground font-semibold">CRM consulting and selection</span> to complete implementation and integration with third-party platforms, we guide you through every step of your digital transformation journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Technology Excellence */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="animate-fade-in-up order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Technology Excellence & Innovation
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    We advise businesses on <span className="text-foreground font-semibold">CRM selection, optimization, and architecture</span>, ensuring you choose the right foundation for long-term success. Our expertise spans all major CRM platforms and custom solutions.
                  </p>
                  <p>
                    Our <span className="text-foreground font-semibold">end-to-end CRM solution delivery</span> includes seamless integrations with industry workflows, payment gateways, trading platforms, and compliance systems. We build ecosystems, not just applications.
                  </p>
                  <p>
                    We integrate your CRM with <span className="text-foreground font-semibold">custom solutions and third-party platforms</span>, creating a unified technology stack that powers your entire operation. From MT4/MT5 to payment processors and KYC providers—we connect it all.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative animate-fade-in-up animation-delay-200 order-1 lg:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
                    alt="Technology and innovation"
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-block px-6 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                Our Team
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Expert Team</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our diverse team of engineers, designers, and strategists brings years of experience and passion to every project.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {expertTeam.map((team, index) => {
                const Icon = team.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-10 rounded-3xl bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 animate-fade-in-up text-center overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-6 inline-flex p-6 rounded-3xl bg-gradient-to-br from-accent/10 to-primary/10 group-hover:from-accent group-hover:to-primary transition-all duration-500 group-hover:scale-110 shadow-lg">
                        <Icon className="text-accent group-hover:text-white transition-colors duration-500" size={48} />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                        {team.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {team.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <FAQ 
          items={faqItems}
          title="About Us - FAQ"
          subtitle="Learn more about our company and how we can help you"
        />
      </main>
      <Footer />
    </div>
  );
}