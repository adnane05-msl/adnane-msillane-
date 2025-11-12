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
      <Accueil />
      <Apropos />
      <Competences />
      <Projets />
      {/* <Contact />*/}
      <Footer />
      
    </div>
    
  )
}

export default App
