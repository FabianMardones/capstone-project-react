import React from 'react'
import imgCheck from '../../src/img/icons_assets/check.png'
import CustomersList from './CustomersList'

const Success = ({customer, onGoBackToPage1}) => {


  return (
    <>{customer && customer.length ? (
        <>
        <div className='formName'>
            <h2>Booking Successfuly</h2>
        </div>
        <div className='formName check'>
            <img src={imgCheck} alt='imagen check'/>
        </div>
        {customer.map( customer => (
            <CustomersList
            key={customer.id}
            customer={customer} 
            onGoBackToPage1={onGoBackToPage1}/>
        ))}
        </>
        
    ) : <>
    
    </>}
    <div className='formName'>
            <h2></h2>
        </div>
    </>
  )
}

export default Success
