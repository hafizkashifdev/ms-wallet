import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import heroBackgroundImage from '../src/assets/hero-bg.svg'
import Brands from './components/brands/brands';
import { About } from './components/about/about';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
    <Header/>
    
     
      <Hero />
      <Brands/>
      <About/>
      <Footer/>
    </div>
   
  );
}

export default App;
