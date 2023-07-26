import './App.css';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Hero2 from './components/Hero2';
import Main from './components/Main';
import Nav from './components/Nav';
import Success from './components/Success';


function App() {
  return (
    <>
    <div className="App">
      <div className='header'>
      <Header/>
      <Nav/>
      </div>
      {/* <Main/> */}
      <Hero2/>
      <Formulario/>
      {/* <Success/> */}
      <Footer/>
    </div>
    </>
  );
}

export default App;
