import React from 'react'
import CardDishes from './CardDishes'

const Specials = () => {
  return (
    <div>
        <div className='hero btnSection'>
          <div className='part1 cardHero sectionTitle'>
            <h2>This Week Specials!</h2>
          </div>
          <div className='part2 cardHero sectionBtn'>
            <input type='submit' value='Online Menu' className='btn1 btn2'/>
          </div>
        </div>
        <div className='CardsPromotion'>
          <div className='dishes'>
            <CardDishes/>
            <CardDishes/>
            <CardDishes/>
          </div>
        </div>
    </div>
  )
}

export default Specials
