import React, { useState } from 'react';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

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
        <Page1 onReserveTableClick={handleReserveTableClick} />
      ) : (
        <Page2 onGoBackToPage1={handleGoBackToPage1} />
      )}
    </div>
  );
}

export default App;
