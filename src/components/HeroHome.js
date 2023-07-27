import React from 'react';
import imgHero from '../../src/img/icons_assets/restauranfood.jpg';

const HeroHome = ({ onReserveTableClick }) => {
  return (
    <>
      <div className='hero'>
        <div className='part1 cardHero'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern
          twist</p>
          <input
            type='submit'
            value='Reserve a Table'
            className='btn1'
            onClick={onReserveTableClick} // Llamar a la función proporcionada por el componente App
          />
        </div>
        <div className='part2 cardHero'>
          <img className='card' src={imgHero} alt="Restaurant" />
        </div>
      </div>
    </>
  );
};

export default HeroHome;
