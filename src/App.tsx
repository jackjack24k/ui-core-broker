import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import ForexCRM from "./pages/products/ForexCRM";
import ForexWebdesign from "./pages/products/ForexWebdesign";
import ForexLiquidity from "./pages/products/ForexLiquidity";
import PropFirmCRM from "./pages/products/PropFirmCRM";
import RiskManagement from "./pages/products/RiskManagement";
import CustomTools from "./pages/products/CustomTools";
import Consulting from "./pages/products/Consulting";
import Regulations from "./pages/products/Regulations";
import ForexCopier from "./pages/products/ForexCopier";
import DedicatedServer from "./pages/products/DedicatedServer";
import BackendSolutions from "./pages/products/BackendSolutions";
import SocialTrading from "./pages/products/SocialTrading";
import PammMamm from "./pages/products/PammMamm";
import ReportingTools from "./pages/products/ReportingTools";
import VpsHosting from "./pages/products/VpsHosting";

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
          <Route path="/products/forex-crm" element={<ForexCRM />} />
          <Route path="/products/forex-webdesign" element={<ForexWebdesign />} />
          <Route path="/products/forex-liquidity" element={<ForexLiquidity />} />
          <Route path="/products/prop-firm-crm" element={<PropFirmCRM />} />
          <Route path="/products/risk-management" element={<RiskManagement />} />
          <Route path="/products/custom-tools" element={<CustomTools />} />
          <Route path="/products/consulting" element={<Consulting />} />
          <Route path="/products/regulations" element={<Regulations />} />
          <Route path="/products/forex-copier" element={<ForexCopier />} />
          <Route path="/products/dedicated-server" element={<DedicatedServer />} />
          <Route path="/products/backend-solutions" element={<BackendSolutions />} />
          <Route path="/products/social-trading" element={<SocialTrading />} />
          <Route path="/products/pamm-mamm" element={<PammMamm />} />
          <Route path="/products/reporting-tools" element={<ReportingTools />} />
          <Route path="/products/vps-hosting" element={<VpsHosting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
