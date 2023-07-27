import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';

function App() {
  const [showPage1, setShowPage1] = useState(true);

  const handleReserveTableClick = () => {
    setShowPage1(false);
  };

  const handleGoBackToPage1 = () => {
    setShowPage1(true);
  };

  return (
    <div className="App">
      {showPage1 ? (
        <HomePage onReserveTableClick={handleReserveTableClick} />
      ) : (
        <BookingPage onGoBackToPage1={handleGoBackToPage1} />
      )}
    </div>
  );
}

export default App;
