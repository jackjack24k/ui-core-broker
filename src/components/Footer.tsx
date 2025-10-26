import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "CRM & Traderroom", href: "#" },
      { name: "Prop Funding", href: "#" },
      { name: "Copy Trading", href: "#" },
      { name: "Social Trading", href: "#" },
      { name: "Mobile Apps", href: "#" },
      { name: "Pricing", href: "#" },
    ],
    Platform: [
      { name: "API Documentation", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "System Status", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "Sandbox", href: "#" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Partners", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Compliance", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-accent"></div>
              <span className="text-lg font-semibold text-foreground">Start Broker Tech</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Enterprise-grade broker technology platform. Built for scale, designed for performance.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Start Broker Tech. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for brokers who demand excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
