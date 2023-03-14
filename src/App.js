 import React from 'react';
import './App.css';
import  { Checkout } from '//Checkout';
import {Login} from '//Login';
import {Header} from './Header';
import './Header.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import {Home} from './Home';

function App() {
  return (
  

  <>
    <div className='App'>


{/* <h1>React Router</h1> */}
<Router>
  <Routes>
    <Route exact path = '/Checkout' element = {<Checkout/>}/>
    <Route exact path = '/Login' element = {<Login/>}/>
    <Route exact path='/' 
    element={<><Header/><Home/></>}
        
    />
    {/* <Route exact path = '/' element =  {<Home/>}/> */}
  </Routes>

</Router>
    </div>



    </>
  
  
  );
}

export default App;
