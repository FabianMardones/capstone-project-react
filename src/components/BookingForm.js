import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error'

const BookingForm = ({customer, setCustomer, customerR, setCustomerR, availableTimes, setAvailableTimes}) => {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ occasion, setOccasion ] = useState('')
  const [ day, setDay ] = useState('')
  const [ people, setPeople ] = useState('')
  const [ side, setSide] = useState('')
  const [ error, setError ] = useState(false)

useEffect(() => {
      if( Object.keys(customer).length > 0){
            setName(customerR.name);
            setEmail(customerR.email);
            setPhone(customerR.phone);
            setOccasion(customerR.occasion);
            setDay(customerR.day);
            setAvailableTimes(customerR.availableTimes);
            setPeople(customerR.people);
            setSide(customerR.side);
      }
}, [customerR])

  const generarId = () => {
      const random = Math.random().toString(36).substr(2);
      const datee = Date.now().toString(36);
      return random + datee;
    };

  const handleSubmit = (e) => {
    e.preventDefault()

      if([name, email, phone, occasion, availableTimes, people, side].includes('')){
          setError(true)
          return;
      }
      setError(false)


      const objCustomer = {
        name,
        email,
        phone,
        occasion,
        day,
        availableTimes,
        people,
        side,
      }

      if(customerR.id) {
            objCustomer.id = customerR.id
            const customerUpdate = customer.map( customerRState => customerRState.id ===
            customerR.id ? objCustomer : customerRState)

            setCustomer(customerUpdate)
            setCustomerR({})

      }else{
            objCustomer.id = generarId()
            setCustomer([...customer, objCustomer])
      }

      setName('')
      setEmail('')
      setPhone('')
      setOccasion('')
      setDay('')
      setAvailableTimes('')
      setPeople('')
      setSide('')

  }


  return (
    <>
    <div className='formName'>
      <h2>Schedule your reservation</h2>
    </div>
    <form className='form' onSubmit={handleSubmit}>
      <div className='formContainer'>

      {error && <Error>all fields are required</Error>}

            <label htmlFor='name' 
                  className='labelForm'>Full Name</label>
            <input id="name" 
                  type="text" 
                  placeholder="Full Name" 
                  className='inputForm'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />

            <label htmlFor='Email' 
                  className='labelForm'>Email</label>
            <input id="Email" 
                  type="text" 
                  placeholder="Email" 
                  className='inputForm'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />

            <label htmlFor='phone' 
                  className='labelForm'>Phone Number</label>
            <input id="phone" 
                  type="text" 
                  placeholder="Cellphone" 
                  className='inputForm'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  />

            <label htmlFor='occasion' 
                  className='labelForm labelDate'>Special Occasion?</label>
            <select className='inputForm' 
                    id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option value=''>Please select an option</option>
                <option value='Engagement'>Engagement</option>
                <option value='Celebration'>Celebration</option>
                <option value='Bithday'>Bithday</option>
                <option value='None'>None</option>
                </select>

                <label htmlFor='date' className='labelForm labelDate'>
                  Select Day And Hour
                  </label>
            <div className='dayAndHour'>
            <input
              id='date'
              type='date'
              className='inputForm inputDate'
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />

            <select className='inputHour inputForm inputDate' id="hour"
                  value={availableTimes} onChange={(e) => setAvailableTimes(e.target.value)}>
                  <option value=''>Please select an Hour</option>
                  <option value='13:00'>13:00</option>
                  </select>
            </div>

            <div className='finalForm'>
              <label htmlFor='manyPeople' 
                    className='labelForm labelMany'>Number of guests</label>
              <label htmlFor='side' 
                    className='labelForm labelSide'>Select your side</label>
            </div>

            <div className='inputFinalForm'>
              <input id="manyPeople" 
                    type="text" 
                    placeholder="Many people" 
                    className='inputMany'
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    />

              <select className='inputSide' id="side"
              value={side} onChange={(e) => setSide(e.target.value)}>
                <option value=''>Please your side</option>
                <option value='Indoor'>Indoor</option>
                <option value='Patio'>Patio</option>
                </select>
            </div>

            <input type='Submit' 
                  className='btnForm' 
                  value={customerR.id ? 'Edit Booking' : 'Reserve a table'}
                  />
      </div>
    </form>
    </>
  )
}

export default BookingForm
