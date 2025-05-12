import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import AllProjectsPage from './sections/AllProjectsPage';
import ProjectDetailsPage from './sections/ProjectDetailsPage';

const AppContent = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith('/project/');

  const handleSeeAllProjects = () => {
    setShowAllProjects(true);
    window.scrollTo(0, 0);
  };

  const handleBackToMain = () => {
    setShowAllProjects(false);
    window.scrollTo(0, 0);
  };

  if (showAllProjects) {
    return <AllProjectsPage onBack={handleBackToMain} />;
  }

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <AboutMe />
            <Projects onSeeAllProjects={handleSeeAllProjects} />
            <TechStack />
            <FeatureCards />
            <Contact />
          </>
        } />
        <Route path="/project/:projectId" element={<ProjectDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
