import React from 'react'
import imgHero from '../../src/img/icons_assets/restauranfood.jpg'
import Specials from './Specials'
import Section from './Section'
import CardDishes from './CardDishes'
import HeroHome from './HeroHome'
import Formulario from './Formulario'

const Main = () => {
  return (
    <div>
      <HeroHome/>
      <Formulario/>
      {/* <Specials/> */}
      <Section/>
    </div>
  )
}

export default Main
