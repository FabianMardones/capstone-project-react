import React from 'react'
import CardDishes from './CardDishes'

const Specials = () => {
  return (
    <div>
      <div className='specialSection'>
        <div className='titleBtn'>
            <h2>This Week Specials!</h2>
            <input type='submit' value='Online Menu' className='btn1 btn2'/>
        </div>
        <div className='CardsPromotion'>
        <CardDishes/>
        <CardDishes/>
        <CardDishes/>
        </div>
      </div>
    </div>
  )
}

export default Specials
