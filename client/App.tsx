// This file is kept for backwards compatibility
// All routing and app initialization is now in main.tsx
import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import MangaDetail from "./pages/MangaDetail";
import Reader from "./pages/Reader";
import Profile from "./pages/Profile";
import Trending from "./pages/Trending";
import Library from "./pages/Library";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/manga/:id" element={<MangaDetail />} />
            <Route path="/reader/:id" element={<Reader />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/library" element={<Library />} />
            <Route path="/signup" element={<Signup />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
