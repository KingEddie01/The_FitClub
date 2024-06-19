import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Join from './Components/Join/Join';
import Plan from './Components/Plans/Plan';
import Program from './Components/Program/Program';
import Reason from './Components/Reasons/Reason';
import Testimonial from './Components/Testimonials/Testimonial';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Program/>
          <Reason/>
          <Plan/>
          <Testimonial/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
