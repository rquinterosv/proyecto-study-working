import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import HeroSection from './components/HeroSection';
import CardFlag from './components/CardFlag';

function App() {
  return (
    <><Menu />
    <HeroSection />
    <div className="app-container">
      <div className="card-container">
        <CardFlag />
        <CardFlag />
      </div>
    </div>
    </>

  );
}

export default App;
