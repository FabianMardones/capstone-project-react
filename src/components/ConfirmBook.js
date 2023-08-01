import React, { useState } from 'react'
import imgCheck from '../../src/img/icons_assets/check.png'
import CustomerList from './CustomerList'

const ConfirmBook = ({customer, setCustomerR, deleteCustomer, availableTimes, goToHomePage}) => {

  return (
    <>
        {customer && customer.length ?(
            <>
        <div className='formName'>
            <h2>Booking Successfuly</h2>
        </div>
        <div className='formName check'>
            <img src={imgCheck}/>
        </div>
        {customer.map( (customer) => 
            <CustomerList
            key={customer.id}
            customer={customer}
            setCustomerR={setCustomerR}
            deleteCustomer={deleteCustomer}
            availableTimes={availableTimes}
            goToHomePage={goToHomePage}
            />
        )}
            </>
        ): ''}
    </>
  )
}

export default ConfirmBook
