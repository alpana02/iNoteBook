import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import About from './components/About';
import Alerts from './components/Alerts';
import Signup from './components/Signup';
import { Login } from './components/Login';


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }
  return (
    <NoteState>
      <Router>
        <Navbar></Navbar>
        <Alerts alert={alert}></Alerts>
        <div className='container'>
        <Routes>
          <Route exact path="/about" element={<About></About>}></Route>
          <Route path="/" element={<Home showAlert={showAlert}/>}></Route>
          <Route path="/login" element={<Login showAlert={showAlert} />}></Route>
          <Route path="/signup" element={<Signup showAlert={showAlert} />}></Route>
        </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
