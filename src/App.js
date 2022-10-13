import React, { Component, Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import WhatWeDo from './components/WhatWeDo';
import About from './components/About';
import Skill from './components/Skill';
import Counter from './components/Counter';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Team from './components/Team';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <HeroSection />
        <WhatWeDo />
        <About />
        <Skill />
        <Counter />
        <Service />
        <Portfolio />
        <Testimonial />
        <Team />
        <Contact />
        <Footer />
      </Fragment>
    )
  }
}

export default App;