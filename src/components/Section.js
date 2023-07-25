import React from 'react'
import imagen1 from '../../src/img/icons_assets/restaurant chef B.jpg'
import imagen2 from '../../src/img/icons_assets/Mario and Adrian A.jpg'

const Section = () => {
  return (
    <div className='hero hero2'>
        <div className='part1 cardHero cardHero2'>
        <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern
          twist</p>
        </div>
        <div className='part2 cardHero part2section'>
          <img className='card card2' src={imagen2}/>
          <img className='card card3' src={imagen1}/>
        </div>
      </div>
  )
}

export default Section
