import React from 'react';
import Navbar from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Port from './components/Portfolio/Portfolio';


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Port/>
     <Footer/>
    </div>
  );
}

export default App;