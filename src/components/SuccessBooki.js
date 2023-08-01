import React from 'react'
import CustomerList from './CustomerList'
import imgCheck from '../../src/img/icons_assets/check.png'
import Header from './Header'
import Nav from './Nav'
import Hero2 from './Hero2'
import Footer from './Footer'
import ConfirmBook from './ConfirmBook'

const SuccessBooki = ({customer, setCustomerR, deleteCustomer}) => {
  return (
    <>
      <div className='header'>
      <Header/>
      <Nav/>
      </div>
      <Hero2/>
        <div className='formName'>
            <h2>Booking Successfuly</h2>
        </div>
        <div className='formName check'>
            <img src={imgCheck}/>
        </div>
        <CustomerList customer={{customer}}
        setCustomerR={setCustomerR} deleteCustomer={deleteCustomer}/>
    </>
  )
}

export default SuccessBooki
