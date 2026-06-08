import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SchedulePage from './pages/SchedulePage';
import WorkshopsPage from './pages/WorkshopsPage';
import WorkshopDetailsPage from './pages/WorkshopDetailsPage';
import CompetitionsPage from './pages/CompetitionsPage';
import AccommodationPage from './pages/AccommodationPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import SplashLogo from './components/SplashLogo';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Lock scroll while splash is active
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSplash]);

  return (
    <>
      {showSplash && <SplashLogo onComplete={() => setShowSplash(false)} />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="workshops" element={<WorkshopsPage />} />
          <Route path="workshops/:id" element={<WorkshopDetailsPage />} />
          <Route path="competitions" element={<CompetitionsPage />} />
          <Route path="accommodation" element={<AccommodationPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;