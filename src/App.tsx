import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Index from "./pages/Index";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import CRM from "./pages/products/CRM";
import Traderroom from "./pages/products/Traderroom";
import CopyTrading from "./pages/products/CopyTrading";
import PropFunding from "./pages/products/PropFunding";
import TradingApp from "./pages/products/TradingApp";
import BonusManager from "./pages/products/BonusManager";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products/crm" element={<CRM />} />
          <Route path="/products/traderroom" element={<Traderroom />} />
          <Route path="/products/copy-trading" element={<CopyTrading />} />
          <Route path="/products/prop-funding" element={<PropFunding />} />
          <Route path="/products/trading-app" element={<TradingApp />} />
          <Route path="/products/bonus-manager" element={<BonusManager />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
