import React from 'react'
import greekSalad from '../../src/img/icons_assets/greek salad.jpg'
import bici from '../../src/img/icons_assets/directions_bike_FILL0_wght400_GRAD0_opsz48.svg'

const CardDishes = () => {
  return (
    <div className='cardOptions'>
    <div className='cardSpecial'>
        <img className='cardSpecialImg' src={greekSalad}/>
            <div className='dishName'>
                <h3>Greek Salad</h3>
                <h3>$12.99</h3>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <div className='orderADelivery'>
                <h4>Order a delivery</h4>
            <img src={bici} alt='image'/>
        </div>
    </div>
    </div>
  )
}

export default CardDishes
