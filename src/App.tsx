
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Applications from "./pages/Applications";
import Servers from "./pages/Servers";
import Databases from "./pages/Databases";
import Containers from "./pages/Containers";
import Monitoring from "./pages/Monitoring";
import Terminals from "./pages/Terminals";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Help from "./pages/Help";

const queryClient = new QueryClient();

const App = () => {
  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/apps" element={<Applications />} />
            <Route path="/servers" element={<Servers />} />
            <Route path="/databases" element={<Databases />} />
            <Route path="/containers" element={<Containers />} />
            <Route path="/monitors" element={<Monitoring />} />
            <Route path="/terminals" element={<Terminals />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
