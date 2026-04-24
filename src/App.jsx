import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { navLinks } from "./data/portfolioData";

const SECTION_IDS = navLinks.map((link) => link.id);

function App() {
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    );

    if (!sections.length) {
      return undefined;
    }

    let frameId = 0;

    const syncNavigationState = () => {
      setIsScrolled(window.scrollY > 24);
      const navOffsetValue = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--nav-offset"),
      );
      const navOffset = Number.isNaN(navOffsetValue) ? 108 : navOffsetValue;
      const markerLine = Math.min(
        Math.max(navOffset + 32, window.innerHeight * 0.35),
        window.innerHeight * 0.55,
      );

      const sectionRects = sections.map((section) => ({
        id: section.id,
        top: section.getBoundingClientRect().top,
        bottom: section.getBoundingClientRect().bottom,
      }));

      const sectionAtMarker = sectionRects.find(
        (section) => section.top <= markerLine && section.bottom >= markerLine,
      );

      let nextActiveSection = sectionAtMarker?.id ?? sections[0].id;

      if (!sectionAtMarker) {
        const nearestSection = sectionRects.reduce((closest, section) => {
          const currentDistance = Math.min(
            Math.abs(section.top - markerLine),
            Math.abs(section.bottom - markerLine),
          );

          if (!closest || currentDistance < closest.distance) {
            return { id: section.id, distance: currentDistance };
          }

          return closest;
        }, null);

        nextActiveSection = nearestSection?.id ?? nextActiveSection;
      }

      setActiveSection(nextActiveSection);
    };

    const requestSyncNavigationState = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(syncNavigationState);
    };

    syncNavigationState();
    window.addEventListener("scroll", requestSyncNavigationState, { passive: true });
    window.addEventListener("resize", requestSyncNavigationState);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestSyncNavigationState);
      window.removeEventListener("resize", requestSyncNavigationState);
    };
  }, []);

  return (
    <div className="page-root">
      <Navbar
        links={navLinks}
        activeSection={activeSection}
        isScrolled={isScrolled}
        onNavigate={setActiveSection}
      />

      <main className="app-shell">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
