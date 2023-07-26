import React from 'react'

const Formulario = () => {
  return (
    <>
    <div  className='formName'>
      <h2>Schedule your reservation</h2>
    </div>
    <form className='form'>
      <div className='formContainer'>
            <label htmlFor='name' 
                  className='labelForm'>Full Name</label>
            <input id="name" 
                  type="text" 
                  placeholder="Full Name" 
                  className='inputForm'
                  />

            <label htmlFor='Email' 
                  className='labelForm'>Email</label>
            <input id="Email" 
                  type="text" 
                  placeholder="Email" 
                  className='inputForm'
                  />

            <label htmlFor='phone' 
                  className='labelForm'>Phone Number</label>
            <input id="phone" 
                  type="text" 
                  placeholder="Cellphone" 
                  className='inputForm'
                  />

            <label htmlFor='occasion' 
                  className='labelForm labelDate'>Special Occasion?</label>
            <select className='inputForm' 
                    id="occasion">Hour
                <option value='none'>Please select an option</option>
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
                      />

                <select className='inputHour inputForm inputDate' id="date">
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
                    />

              <select className='inputSide' id="side">
                <option value=''>Please your side</option>
                <option value='13:00'>Indoor</option>
                <option value='14:00'>Patio</option>
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
