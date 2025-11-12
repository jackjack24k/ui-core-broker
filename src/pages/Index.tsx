import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import PlatformShowcase from "@/components/PlatformShowcase";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FAQ from "@/components/FAQ";

const Index = () => {
  const faqItems = [
    {
      question: "What is a Forex CRM and why do I need it?",
      answer: "A Forex CRM is a specialized customer relationship management system designed for forex brokers. It helps you manage clients, automate workflows, track trading activity, process deposits/withdrawals, and manage IB programs. It's essential for scaling your brokerage operations efficiently."
    },
    {
      question: "How long does it take to set up and launch?",
      answer: "Setup time varies based on your requirements. A standard CRM deployment takes 2-4 weeks, including customization, integration, and training. White-label solutions can be launched faster, while fully custom solutions may take 6-8 weeks. We provide a detailed timeline during consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! We offer 24/7 technical support, regular updates, security patches, and ongoing maintenance. Our support packages include bug fixes, feature enhancements, and dedicated account management to ensure your platform runs smoothly."
    },
    {
      question: "Can you integrate with my existing trading platforms?",
      answer: "Absolutely. We specialize in integrating with MT4, MT5, cTrader, and other major trading platforms. We also connect with payment gateways, KYC/AML providers, liquidity providers, and any custom systems you're currently using."
    },
    {
      question: "What are the pricing models for your services?",
      answer: "We offer flexible pricing including one-time setup fees, monthly subscriptions, and custom enterprise plans. Pricing depends on features, user count, and customization level. Contact us for a personalized quote tailored to your specific needs."
    },
    {
      question: "Is my data secure with your platform?",
      answer: "Security is our top priority. We implement enterprise-grade encryption, regular security audits, GDPR compliance, secure data centers, and role-based access controls. All client data is encrypted at rest and in transit, with automated backups and disaster recovery."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        {/* <Stats /> */}
        <Features />
        <HowItWorks />
        <PlatformShowcase />
        <Integrations />
        <Testimonials />
        <FAQ items={faqItems} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
