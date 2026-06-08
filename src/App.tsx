import React from 'react';
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

function App() {
  return (
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
  );
}

export default App;