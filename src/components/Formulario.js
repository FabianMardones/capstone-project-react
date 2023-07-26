import React from 'react'
import { useState } from 'react'

const Formulario = ({cliente, setCliente}) => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ occasion, setOccasion ] = useState('')
  const [ day, setDay ] = useState('')
  const [ hour, setHour ] = useState('')
  const [ people, setPeople ] = useState('')
  const [ side, setSide] = useState('')
  const [ error, setError ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

      if([name, email, phone, occasion, day, hour, people, side].includes('')){
          setError(true)
          return;
      }
      setError(false)


      const objCliente = {
        name,
        email,
        phone,
        occasion,
        day,
        hour,
        people,
        side
      }

      setCliente([...cliente, objCliente])

      setName('')
      setEmail('')
      setPhone('')
      setOccasion('')
      setDay('')
      setHour('')
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
                    id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>Hour 
                <option value=''>Please select an option</option>
                <option value='Engagement'>Engagement</option>
                <option value='Celebration'>Celebration</option>
                <option value='Bithday'>Bithday</option>
                <option value='None'>None</option>
                </select>

                <label htmlFor='date' 
                      className='labelForm labelDate'>Select Day And Hour</label>
            <div className='dayAndHour'>
                <input id="date" 
                      type="date" 
                      className='inputForm inputDate'
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                      />

                <select className='inputHour inputForm inputDate' id="hour"
                        value={hour} onChange={(e) => setHour(e.target.value)}>
                <option value=''>Please select an Hour</option>
                <option value='13:00'>13:00</option>
                <option value='14:00'>14:00</option>
                <option value='15:00'>15:00</option>
                <option value='16:00'>16:00</option>
                <option value='17:00'>17:00</option>
                <option value='18:00'>18:00</option>
                <option value='19:00'>19:00</option>
                </select>
            </div>

            <div className='finalForm'>
              <label htmlFor='manyPeople' 
                    className='labelForm labelMany'>How many people?</label>
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
                  className='btn1 btnForm' 
                  value='Reserve a Table'
                  />
      </div>
    </form>
    </>
  )
}

export default Formulario
