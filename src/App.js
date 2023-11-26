import './App.css';
import Menu from './components/Menu';
import HeroSection from './components/HeroSection';
import CardFlag from './components/CardFlag';
import Service1 from './components/Service1';

function App() {
  return (
    <>
      <Menu />
      <HeroSection />
      <div className="app-container">
        <div className="card-container d-flex justify-content-center">
          <div className="col-lg-6">
            <CardFlag />
          </div>
          <div className="col-lg-6">
            <CardFlag />
          </div>
        </div>
      </div>
      <Service1 /> {/* Render Service1 component here */}
    </>
  );
}

export default App;
