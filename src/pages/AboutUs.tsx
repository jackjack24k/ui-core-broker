import React from "react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import Header from "../components/Header";
import Footer from "../components/Footer";

const aboutFeatures = [
  { title: "Innovation First", desc: "We deliver cutting-edge tech solutions to help your business stay ahead of the curve." },
  { title: "Client-Centric", desc: "We tailor our services to fit your business, focusing on transparency, customization, and reliability." },
  { title: "Security & Scalability", desc: "Robust, scalable solutions with enterprise-grade security to help you safely scale and grow." },
  { title: "Performance Driven", desc: "Solutions are thoroughly tested and optimized for performance—always." },
];

const empowerCards = [
  { title: "Our Approach", desc: "We deliver future-ready web, CRM, and trading solutions using agile methodology and rapid deployment." },
  { title: "Working Terms", desc: "High-value, client-driven engagement models (fixed, hourly, retainer, or custom) to suit our clients." },
  { title: "Deployment Ready", desc: "CRM Deployments, product launches, and cloud-native solutions (AWS/Azure/GCP), delivered as part of our offering." },
  { title: "Support & Handoff", desc: "Full post-launch support, documentation, and training for a smooth client handoff." },
  { title: "Global Delivery", desc: "Serving clients worldwide with timezone-friendly teams and multi-lingual support." },
  { title: "CRM Consulting", desc: "Advising businesses on CRM selection, optimization, and architecture." },
  { title: "CRM Implementation", desc: "End-to-end CRM solution delivery and integrations with industry workflows." },
  { title: "CRM Integration", desc: "Integrate your CRM with custom solutions and third-party platforms." },
];

const expertTeam = [
  { title: "Collaborative", desc: "We value teamwork, open communication, and building trust." },
  { title: "Innovative", desc: "Constant innovation drives our culture and cutting-edge methodology." },
  { title: "Passionate", desc: "Our team is driven by creativity, curiosity, and dedication." },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background pb-16 pt-8">
      <Header />
      <section className="max-w-5xl mx-auto px-6 py-8">
        <Badge variant="outline" className="mb-4">About Us</Badge>
        <h1 className="text-3xl font-bold mb-2">Who We Are</h1>
        <p className="mb-6 text-lg text-muted-foreground">
          JayEn Technology is a full-stack digital transformation agency committed to delivering high-quality, scalable, and secure solutions tailored to your business needs. From ideation to custom development, design, and strategy, we bring your ideas to life using cutting-edge technologies and agile methodologies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {aboutFeatures.map((f) => (
            <Card key={f.title} className="p-4">
              <h3 className="font-semibold mb-1 text-accent-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </Card>
          ))}
        </div>
        <a href="/contact" className="inline-block">
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded font-semibold shadow hover:bg-primary/80 transition">Get in Touch</button>
        </a>
      </section>

  <section className="max-w-5xl mx-auto px-6 py-8 mt-20">
        <Badge variant="outline" className="mb-4">Why Us</Badge>
        <h2 className="text-2xl font-bold mb-2">Empowering Digital Transformation</h2>
        <p className="mb-6 text-lg text-muted-foreground">
          At JayEn Technology, we deliver future-ready software, web, and trading solutions that help businesses innovate, grow, and scale. From CRM to full-stack development and DevOps—our team combines creativity with cutting-edge engineering.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {empowerCards.map((c) => (
            <Card key={c.title} className="p-4">
              <h3 className="font-semibold mb-1 text-accent-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </Card>
          ))}
        </div>
      </section>

  <section className="max-w-5xl mx-auto px-6 py-8 mt-20">
        <h2 className="text-2xl font-bold mb-2">Our Expert Team</h2>
        <p className="mb-6 text-lg text-muted-foreground">
          Our diverse team of engineers, designers, and strategists brings years of experience and passion to every project. Together, we transform ideas into scalable digital solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {expertTeam.map((t) => (
            <Card key={t.title} className="p-4 flex flex-col items-center text-center">
              <div className="mb-2 text-3xl">💡</div>
              <h3 className="font-semibold mb-1 text-accent-foreground">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
