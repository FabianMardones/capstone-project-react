import React from 'react'
import imgHero from '../../src/img/icons_assets/restauranfood.jpg'
import Specials from './Specials'
import Section from './Section'

const Main = () => {
  return (
    <div>
      <div className='hero'>
        <div className='part1 cardHero'>
        <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern
          twist</p>
          <input type='submit' value='Reserve a Table' className='btn1'/>
        </div>
        <div className='part2 cardHero'>
          <img className='card' src={imgHero}/>
        </div>
      </div>
      <Specials/>
      <Section/>
    </div>
  )
}

export default Main
