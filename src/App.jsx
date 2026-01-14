import Navbar from './sections/Navbar.jsx';
import { CardWelcome, CardMe } from './sections/home.jsx';
import DotGrid from './components/DotGrid.jsx';
import TargetCursor from './components/TargetCursor.jsx';
import { ProjetsCarousell } from './sections/projets.jsx';
import { CompetencesCards } from './sections/competences.jsx';


function App() {
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
        <section id="accuille" className="dotgrid-section">
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
          {/* Conteúdo adicional aqui */}
          <section id="projects">
            <ProjetsCarousell />
          </section>
          <section id="competences">
            <CompetencesCards />
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
