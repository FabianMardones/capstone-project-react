import React, { useState } from 'react';
import Hero2 from './Hero2';
import Formulario from './Formulario';
import Success from './Success';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const BookingPage = ({ onGoBackToPage1 }) => {
  const [customer, setCustomer] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    setCustomer([...customer, formData]);
    setFormSubmitted(true);
  };

  return (
    <div>
      <div className='header'>
        <Header />
        <Nav />
      </div>
      <Hero2 />
      {!formSubmitted ? (
        <Formulario
          customer={customer}
          setCustomer={setCustomer}
          handleFormSubmit={handleFormSubmit}
        />
      ) : (
        <Success customer={customer} onGoBackToPage1={onGoBackToPage1} />
      )}
      <Footer />
    </div>
  );
};

export default BookingPage;
