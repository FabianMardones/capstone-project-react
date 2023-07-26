import React from 'react'
import imgCheck from '../../src/img/icons_assets/check.png'

const Success = () => {
  return (
    <>
        <div className='formName'>
            <h2>Booking Successfuly</h2>
        </div>
        <div className='formName check'>
            <img src={imgCheck}/>
        </div>
        <div className='form'>
            <div className='formContainer message'>
                <h2>Reservation details</h2>
            <div className='detail'>
                <h3>Full Name: {''}
                    <span>Molly Ferdinand</span>
                </h3>
            </div>
            <div className='detail'>
                <h3>Email: {''}
                    <span>mollyferdinand@mail.com</span>
                </h3>
            </div>
            <div className='detail'>
                <h3>Phone Number: {''}
                    <span>+13123139194</span>
                </h3>
            </div>
            <div className='detail'>
                <h3>Date: {''}
                    <span>dd/mm/yyy</span>
                </h3>
            </div>
            <div className='detail'>
                <h3>Hour: {''}
                    <span>13:00</span></h3>
            </div>
            <div className='detail'>
                <h3>Full Name: {''}
                    <span>Molly Ferdinand</span></h3>
            </div>
            <div className='detail'>
                <h3>Side: {''}
                    <span>Patio</span></h3>
            </div>
            <div className='detail'>
                <h3>People: {''}
                    <span>2</span></h3>
            </div>
            <h2 className='finalMessage'>Your reservation information was sent to your email</h2>
            <input type='Submit' 
                  className='btnMessage btnForm' 
                  value='Finish'
                  />
            </div>
        </div>
    </>
  )
}

export default Success
