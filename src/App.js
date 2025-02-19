import Hero from './components/Hero/Hero';
import './App.css';
import Programs from './components/Programs/Programs.jsx';
import Reasons from './components/Reasons/Reasons.jsx';
import Plans from './components/Plans/Plans.jsx';
import Testimonials from "./components/Testimonials/Testimonials.jsx"
import Join from './components/Join/Join.jsx'
import Footer from './components/Footer/Footer.jsx';
function App() {
  return (
    <div className="App">
          <Hero />
          <Programs />
          <Reasons />
          <Plans />
          <Testimonials />
          <Join />
          <Footer />
    </div>
  );
}

export default App;
