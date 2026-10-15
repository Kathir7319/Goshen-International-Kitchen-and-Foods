import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import QuickInfoBar from './components/QuickInfoBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 5 Simple Pages from Blueprint
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import StoryPage from './pages/StoryPage';
import CateringPage from './pages/CateringPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-orange-200">
        
        {/* Quick Top Bar */}
        <QuickInfoBar />

        {/* Clean Header */}
        <Navbar />

        {/* Main Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/catering" element={<CateringPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Simple Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}
