import './App.css';
import './components/Nav/navbar.css'
import './components/Header/header.css'
import './components/Sponsors/sponsors.css'
import './components/WhatsGpt/whatisGpt.css'
import './components/Feature/feature.css'
import './components/Second feature/secondfeature.css'
import './components/CTA/cta.css'
import './components/Blog/blog.css'
import './components/Footer/footer.css'
import Navbar from './components/Nav/Navbar';
import Header from './components/Header/Header';
import Sponsor from './components/Sponsors/Sponsor';
import WhatIsGpt from './components/WhatsGpt/WhatIsGpt';
import Feature from './components/Feature/Feature';
import SecondFeature from './components/Second feature/SecondFeature';
import Cta from './components/CTA/Cta';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='All-header'>
      <Navbar />
      <Header />
      </div>
      <Sponsor />
      <WhatIsGpt />
      <Feature />
      <SecondFeature />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

// scroll reveal 
// sticky nav
// smooth scrolling