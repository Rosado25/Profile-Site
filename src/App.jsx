import Navbar from './components/Navbar.jsx';
import { CardWelcome, CardMe } from './pages/home.jsx';
import DotGrid from './components/DotGrid.jsx';
import TargetCursor from './components/TargetCursor.jsx';


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
        <section className="dotgrid-section">
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
        <section className="simple-section">
          {/* Conteúdo adicional aqui */}
        </section>
      </main>
    </>
  );
}

export default App;
