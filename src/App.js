import './App.css';
import BookingPage from './components/BookingPage';
import { useState } from 'react';
import HomePage from './components/HomePage';


function App() {
  const [ goToPage, setGoToPage ] = useState(true)

  const goToForm = () => {
    setGoToPage(false)
  }

  const goToHomePage = () => {
    setGoToPage(true)
  }


  return (
    <>
    <div className="App">
      {goToPage ? (
        <HomePage goToForm={goToForm}/>
      ) : (
        <BookingPage goToHomePage={goToHomePage}/>
      )}
    </div>
    </>
  );
}

export default App;
