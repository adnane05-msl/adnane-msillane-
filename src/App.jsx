import React from 'react'
import './App.css'

import Accueil from './Accueil/Accueil';
import Navbar from './Navbar/Navbar';
import Apropos from './Apropos/Apropos';
import Competences from './Competences/Competences';
import Projets from './Projets/Projets';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <div id="accueil">
        <Accueil />
      </div>
      <div id="apropos">
        <Apropos />
      </div>
      <div id="competences">
        <Competences />
      </div>
      <div id="projets">
        <Projets />
      </div>
      {/* <div id="contact">
        <Contact />
      </div> */}
      <Footer />
      
    </div>
    
  )
}

export default App
