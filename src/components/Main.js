import React from 'react'
import imgHero from '../../src/img/icons_assets/restauranfood.jpg'
import Specials from './Specials'
import Section from './Section'
import CardDishes from './CardDishes'
import HeroHome from './HeroHome'
import Hero2 from './Hero2'
import Success from './ConfirmBook'

const Main = ({goToForm}) => {
  return (
    <div>
      <HeroHome goToForm={goToForm}/>
      <Specials/>
      <Section/>
    </div>
  )
}

export default Main
