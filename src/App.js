import React from 'react';
import Navbar from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div className='container'>
      <Navbar />
      <Header />
     <Footer/>
    </div>
  );
}

export default App;