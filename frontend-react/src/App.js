import React from 'react';
import { About, Footer, Header, Resume, Skills, Testimonials, Work } from './containers';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Resume />
      <Footer />
    </div>
  )
}

export default App