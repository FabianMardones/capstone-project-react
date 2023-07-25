import React from 'react'
import imgHero from '../../src/img/icons_assets/restauranfood.jpg'
import Specials from './Specials'
import Section from './Section'
import CardDishes from './CardDishes'
import HeroHome from './HeroHome'

const Main = () => {
  return (
    <div>
      <HeroHome/>
      <Specials/>
      <Section/>
    </div>
  )
}

export default Main
