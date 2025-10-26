import { Code, Shield, Database, Cloud, Link, Headphones } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built with the latest technologies to meet your unique business requirements and drive growth."
    },
    {
      icon: Shield,
      title: "Regulatory Compliance Consulting",
      description: "Guidance on industry regulations to ensure your business stays compliant, secure, and trusted by customers and partners."
    },
    {
      icon: Database,
      title: "Data Management & Analytics",
      description: "Comprehensive data strategies to harness insights, improve decision-making, and optimize operational efficiency."
    },
    {
      icon: Cloud,
      title: "Cloud Migration & Hosting",
      description: "Seamless migration to cloud platforms with scalable, secure hosting solutions tailored to your needs."
    },
    {
      icon: Link,
      title: "API Development & Integration",
      description: "Building and integrating robust APIs to connect systems, automate workflows, and enhance business agility."
    },
    {
      icon: Headphones,
      title: "24/7 Support & Maintenance",
      description: "Dedicated round-the-clock support and maintenance services to ensure your systems run smoothly and securely."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Start Broker Tech
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Explore Our Core Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From software engineering to compliance advisory, Start Broker Tech offers expert services designed to empower your business at every stage.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index}
                    className="p-8 rounded-lg border border-border bg-card hover:border-accent transition-all duration-300 group"
                  >
                    <div className="mb-6 inline-flex p-4 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="space-y-12">
              <div className="border-l-4 border-accent pl-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="text-accent" size={24} />
                  <h3 className="text-2xl font-semibold text-foreground">Agile Full-Stack Development</h3>
                </div>
                <p className="text-muted-foreground">
                  Rapid, iterative development using modern frameworks (React, Vue, Node.js, Django) to build scalable web and mobile apps aligned with your business needs.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="text-accent" size={24} />
                  <h3 className="text-2xl font-semibold text-foreground">CRM Consulting & Implementation</h3>
                </div>
                <p className="text-muted-foreground">
                  From CRM selection and workflow design to seamless integration with your existing systems (ERP, marketing, sales), we tailor systems for maximum efficiency.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="text-accent" size={24} />
                  <h3 className="text-2xl font-semibold text-foreground">DevOps, CI/CD & Cloud Infrastructure</h3>
                </div>
                <p className="text-muted-foreground">
                  Automated deployment pipelines, Docker/Kubernetes expertise, and cloud-native infrastructure on AWS, Azure, or DigitalOcean for scalable, secure delivery.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <div className="flex items-center gap-2 mb-3">
                  <Headphones className="text-accent" size={24} />
                  <h3 className="text-2xl font-semibold text-foreground">Compliance Advisory & Post-launch Support</h3>
                </div>
                <p className="text-muted-foreground">
                  Regulatory compliance consulting (AML, data privacy), complete documentation, training, and dedicated post-launch support ensures seamless handoff and success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
