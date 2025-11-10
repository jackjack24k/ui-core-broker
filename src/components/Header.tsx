import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Menu, X, ChevronDown, LayoutDashboard, Globe, Droplet, Building2,
  Shield, Wrench, MessageSquare, FileCheck, Copy, Server, Cog,
  Users, Wallet, BarChart3, MonitorSmartphone
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
  ];

  const products = [
    {
      name: "Forex CRM",
      description: "Streamlined CRM solutions tailored for forex brokers.",
      icon: LayoutDashboard,
      href: "/products/forex-crm",
    },
    {
      name: "Forex Webdesign",
      description: "Custom forex websites built to convert.",
      icon: Globe,
      href: "/products/forex-webdesign",
    },
    {
      name: "Forex Liquidity",
      description: "Connect with top-tier liquidity providers.",
      icon: Droplet,
      href: "/products/forex-liquidity",
    },
    {
      name: "Prop Firm CRM",
      description: "CRM system tailored for proprietary firms.",
      icon: Building2,
      href: "/products/prop-firm-crm",
    },
    {
      name: "Risk Management",
      description: "Tools to monitor and control trading risk.",
      icon: Shield,
      href: "/products/risk-management",
    },
    {
      name: "Custom Tools",
      description: "Bespoke tools tailored to your operations.",
      icon: Wrench,
      href: "/products/custom-tools",
    },
    {
      name: "Consulting",
      description: "Expert advice tailored for your growth path.",
      icon: MessageSquare,
      href: "/products/consulting",
    },
    {
      name: "Regulations",
      description: "Reliable Regulations for uninterrupted trading.",
      icon: FileCheck,
      href: "/products/regulations",
    },
    {
      name: "Forex Copier",
      description: "Instantly copy trades across accounts.",
      icon: Copy,
      href: "/products/forex-copier",
    },
    {
      name: "Dedicated Server",
      description: "High-speed, secure servers for MT4/MT5 hosting.",
      icon: Server,
      href: "/products/dedicated-server",
    },
    {
      name: "Backend Solutions",
      description: "Custom admin panels and integration tools.",
      icon: Cog,
      href: "/products/backend-solutions",
    },
    {
      name: "Social Trading",
      description: "Enable trade sharing and follower systems.",
      icon: Users,
      href: "/products/social-trading",
    },
    {
      name: "PAMM/MAMM",
      description: "Multi-account management made easy.",
      icon: Wallet,
      href: "/products/pamm-mamm",
    },
    {
      name: "Reporting Tools",
      description: "Advanced analytics for brokers and traders.",
      icon: BarChart3,
      href: "/products/reporting-tools",
    },
    {
      name: "VPS Hosting",
      description: "Reliable VPS for uninterrupted trading.",
      icon: MonitorSmartphone,
      href: "/products/vps-hosting",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-accent"></div>
            <span className="text-xl font-semibold text-foreground">Start Broker Tech</span>
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none">
                Products
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[800px] p-4">
                <div className="grid grid-cols-3 gap-2">
                  {products.map((product) => {
                    const Icon = product.icon;
                    return (
                      <DropdownMenuItem key={product.name} asChild>
                        <a href={product.href} className="flex items-start gap-3 p-3 cursor-pointer rounded-lg hover:bg-accent/50 transition-all">
                          <div className="mt-0.5">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-foreground text-sm">{product.name}</div>
                            <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                              {product.description}
                            </div>
                          </div>
                        </a>
                      </DropdownMenuItem>
                    );
                  })}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {navigation.slice(1).map((item) => (
              item.name === "About Us" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              )
            ))}
          </div>
        </div>


        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            <a
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>

            <div className="flex flex-col gap-2">
              <div className="text-sm font-medium text-foreground">Products</div>
              <div className="flex flex-col gap-3 pl-3">
                {products.map((product) => {
                  const Icon = product.icon;
                  return (
                    <a
                      key={product.name}
                      href={product.href}
                      className="flex items-start gap-3 p-2 rounded-md hover:bg-accent transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="mt-0.5">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">{product.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {product.description}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {navigation.slice(1).map((item) => (
              item.name === "About Us" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
