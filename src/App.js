import './App.css';

// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not.
  const [btntext, setBtnText] = useState("Enable Light Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2500);
  }


  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");

      
    }
  }

  return (
    <>
      <Router>
      <Navbar title="T-DOC" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}></Alert>
      <div className="container">
      <Routes>
          <Route exact path="/About" element={<About/>}>
          </Route>
          <Route exact path="/Home"element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below:"/>}>         
          </Route>
      </Routes>
        </div>
        </Router>
    </>
  );
}

export default App;