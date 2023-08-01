import { useState, useEffect} from 'react'
import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Hero2 from './Hero2'
import BookingForm from './BookingForm'
import Footer from './Footer'
import ConfirmBook from './ConfirmBook'


const BookingPage = ({goToHomePage}) => {
    const [ goToPage , setGoToPage ] = useState(false)
    const [ customer, setCustomer ] = useState(JSON.parse(localStorage.getItem('customer')) ?? [])
    const [ customerR, setCustomerR ] = useState({})
    const [ availableTimes, setAvailableTimes ] = useState([])


    useEffect(() => {
        localStorage.setItem('customer', JSON.stringify( customer ))
    }, [customer])


  const deleteCustomer =  (id) => {
    const customerUpdate = customer.filter(customerR => customerR.id !== id)
    setCustomer(customerUpdate)
  }

  const clickPage = (formData) => {
    setCustomer([...customer, formData])
    setGoToPage(true)
  }

  return (
    <> 
    <div>
      <div className='header'>
      <Header/>
      <Nav/>
      </div>
      <Hero2/>
      <BookingForm
        customer={customer}
        setCustomer={setCustomer}
        customerR={customerR}
        setCustomerR={setCustomerR}
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        />
      <ConfirmBook
      customer={customer}
      setCustomerR={setCustomerR}
      deleteCustomer={deleteCustomer}
      goToHomePage={goToHomePage}
      />
      <Footer/>
    </div>
    </>
  )
}

export default BookingPage