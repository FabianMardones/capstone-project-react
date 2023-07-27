import React from 'react'

const CustomersList = ({customer, onGoBackToPage1}) => {

    const handleFinishButtonClick = () => {
        onGoBackToPage1(); // Llamamos a la función pasada desde Success para volver a Page1
      };
    

    const { name, email, phone, occasion, day, hour, people, side } = customer 

  return (
    <>
     <div className='form'>
            <div className='formContainer message'>
                <h2>Reservation details</h2>
            <div className='detail'>
                <h3>Full Name: {''}
                    <span>{name}</span>
                </h3>
            </div>
            <div className='detail'>
                <h3>Email: {''}
                    <span>{email}</span>
                </h3>
            </div>
            <div className='detail'>
                <h3>Phone Number: {''}
                    <span>{phone}</span>
                </h3>
            </div>
            <div className='detail'>
                <h3>Occasion: {''}
                    <span>{occasion}</span>
                </h3>
            </div>
            <div className='detail'>
                <h3>Date: {''}
                    <span>{day}</span></h3>
            </div>
            <div className='detail'>
                <h3>Hour: {''}
                    <span>{hour}</span></h3>
            </div>
            <div className='detail'>
                <h3>People: {''}
                    <span>{people}</span></h3>
            </div>
            <div className='detail'>
                <h3>Side: {''}
                    <span>{side}</span></h3>
            </div>
            <h2 className='finalMessage'>Thank you {name} Your reservation information was sent to your email</h2>
            <input 
                type='Submit' 
                  className='btnMessage btnForm btn1' 
                  value='Finish'
                  onClick={handleFinishButtonClick}
                  />
            </div>
        </div> 
    </>
  )
}

export default CustomersList
