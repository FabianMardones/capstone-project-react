import React from 'react'

const CustomerList = ({customer, setCustomerR, deleteCustomer, goToHomePage}) => {

    const handleDelete = () => {
        const response = window.confirm(`Hey ${name}!! Are you sure you want to delete your reservation?`)
        if(response){
            deleteCustomer(id)
        }
    }

    const { name, email, phone, occasion, day, availableTimes, people, side, id} = customer

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
                    <span>{availableTimes}</span></h3>
            </div>
            <div className='detail'>
                <h3>Number of guests: {''}
                    <span>{people}</span></h3>
            </div>
            <div className='detail'>
                <h3>side: {''}
                    <span>{side}</span></h3>
            </div>
            <h2 className='finalMessage'>Thank you <span className='nameMessage'>{name}</span> {''}Your reservation information was sent to your email</h2>
            <div className='btnCustomer'>
                <button className="btnCustomerInfo color1" 
                        type="button"
                        onClick={() => setCustomerR(customer)}>Edit</button>
                <button className="btnCustomerInfo color2" 
                        type="button"
                        onClick={handleDelete}>Delete</button>
            </div>
            <input type='Submit'
                  className='btnMessage'
                  value='Finish'
                  onClick={goToHomePage}
                  />
            </div>
        </div>
    </>
  )
}

export default CustomerList
