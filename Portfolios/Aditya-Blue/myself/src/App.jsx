import React from "react";
import { About, Footer, Contact, Work, Skills } from './containers'
import { Navbar } from './components';

function App() {
  return (
    <div>
      <Navbar />
      <div className="app">
        <About />
        <Skills />
        <Work />
        <Contact />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
