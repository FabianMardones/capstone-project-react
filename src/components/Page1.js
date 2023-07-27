import React from 'react';
import imgHero from '../../src/img/icons_assets/restauranfood.jpg';
import Specials from './Specials';
import Section from './Section';
import HeroHome from './HeroHome';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const Page1 = ({ onReserveTableClick }) => {
  return (
    <div>
      <div className='header'>
        <Header />
        <Nav />
      </div>
      <HeroHome onReserveTableClick={onReserveTableClick} />
      <Specials />
      <Section />
      <Footer />
    </div>
  );
};

export default Page1;

