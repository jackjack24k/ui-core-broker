import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, LayoutDashboard, TrendingUp, Copy, Users, Smartphone, Gift } from "lucide-react";
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
      name: "CRM & Client Portal",
      description: "Complete client lifecycle management from onboarding to retention.",
      icon: LayoutDashboard,
      href: "/products/crm",
    },
    {
      name: "Traderroom",
      description: "Real-time trading interface with advanced charting and order management.",
      icon: TrendingUp,
      href: "/products/traderroom",
    },
    {
      name: "Copy Trading",
      description: "Turn top traders into products with automated follower management.",
      icon: Copy,
      href: "/products/copy-trading",
    },
    {
      name: "Prop Funding",
      description: "Capital allocation, P&L waterfalls, and risk controls for prop firms.",
      icon: Users,
      href: "/products/prop-funding",
    },
    {
      name: "Trading App",
      description: "Native mobile experience for iOS and Android with real-time sync.",
      icon: Smartphone,
      href: "/products/trading-app",
    },
    {
      name: "Bonus Manager",
      description: "Flexible bonus rules, tiers, and automated payout schedules.",
      icon: Gift,
      href: "/products/bonus-manager",
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
              <DropdownMenuContent align="start" className="w-[320px]">
                {products.map((product) => {
                  const Icon = product.icon;
                  return (
                    <DropdownMenuItem key={product.name} asChild>
                      <a href={product.href} className="flex items-start gap-3 p-3 cursor-pointer">
                        <div className="mt-0.5">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{product.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {product.description}
                          </div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                  );
                })}
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
