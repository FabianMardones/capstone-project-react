import React from 'react'

const Formulario = () => {
  return (
    <form className='form'>
      <div className='formContainer'>
            <label htmlFor='name' className='labelForm'>Full Name</label>
            <input id="name" type="text" placeholder="Full Name" className='inputForm'/>

            <label htmlFor='Email' className='labelForm'>Email</label>
            <input id="Email" type="text" placeholder="Email" className='inputForm'/>

            <label htmlFor='phone' className='labelForm'>Phone Number</label>
            <input id="phone" type="text" placeholder="Cellphone" className='inputForm'/>

            <label htmlFor='date' className='labelForm labelDate'>Select Day And Hour</label>
            <select className='inputForm' id="Hour">Hour
                <option value='13:00'>13:00</option>
                <option value='14:00'>14:00</option>
                <option value='15:00'>15:00</option>
                <option value='16:00'>16:00</option>
                <option value='17:00'>17:00</option>
                <option value='18:00'>18:00</option>
                <option value='19:00'>19:00</option>
                </select>

                <label htmlFor='date' className='labelForm labelDate'>Select Day And Hour</label>
            <div className='dayAndHour'>
                <input id="date" type="date" className='inputForm inputDate'/>
                
                <select className='inputForm inputDate' id="Hour">
                <option value='13:00'>13:00</option>
                <option value='14:00'>14:00</option>
                <option value='15:00'>15:00</option>
                <option value='16:00'>16:00</option>
                <option value='17:00'>17:00</option>
                <option value='18:00'>18:00</option>
                <option value='19:00'>19:00</option>
                </select>
            </div>
            

      </div>
    </form>
  )
}

export default Formulario
