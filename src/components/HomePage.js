import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import HeroHome from './HeroHome'
import Specials from './Specials'
import Footer from './Footer'


const HomePage = ({goToForm}) => {
  return (
    <div>
      <div className='header'>
      <Header/>
      <Nav/>
      </div>
      <Main goToForm={goToForm}/>
      <Footer/>
    </div>
  )
}

export default HomePage
