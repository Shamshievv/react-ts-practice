import React from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import Shop from "./components/Shop";
import Blog from "./components/Blog";
import SubComponents from "./components/SubComponents";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Work/>
        <Services/>
        <Testimonials/>
        <Process/>
        <Shop/>
        <Blog/>
        <SubComponents/>
        <Contact/>
    </div>
  );
}

export default App;
