import Navbar from "../sections/Navbar.jsx";
import { CardWelcome, CardMe } from "../sections/home.jsx";
import DotGrid from "../components/DotGrid.jsx";
import TargetCursor from "../components/TargetCursor.jsx";
import { ProjetsCarousell } from "../sections/projets.jsx";
import { CompetencesCards } from "../sections/competences.jsx";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {

  const location = useLocation();

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    const el = document.getElementById(location.state.scrollTo);

    console.log(location.state.scrollTo);

    if (el) {
      
      const offsets = {
        projects: -177,
        competences: -160,
      };
      
      const offset = offsets[location.state.scrollTo] ?? 0;
      
      console.log(offset);
      const top = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    window.history.replaceState({}, "");
  }, [location]);

  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={false}
      />
      <Navbar />
      <main>
        {/* Seção com DotGrid */}
        <section id="accueille" className="dotgrid-section">
          <DotGrid
            dotSize={5}
            gap={13}
            baseColor="#271e37"
            activeColor="#5227ff"
            proximity={100}
            shockRadius={150}
            shockStrength={3}
            resistance={1000}
            returnDuration={1}
          />
          <div className="dotgrid-content">
            <CardWelcome />
            <CardMe />
          </div>
        </section>

        {/* Resto da página com fundo simples */}
        <section className="simple-section py-20">
          {/* Projetos*/}
          <section id="projects">
            <ProjetsCarousell />
          </section>
          {/* Competencias */}
          <section id="competences">
            <CompetencesCards />
          </section>
        </section>
      </main>
    </>
  );
}
