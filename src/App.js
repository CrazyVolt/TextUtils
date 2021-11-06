import './App.css';
import React, { useState } from 'react'
import NavBar  from './components/NavBar';
import TextForm from './components/TextForm'
import Alert from './components/Alert';
// import TimePicker from './components/TimePicker';

const moment = require('moment-timezone')

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  // Function to Show something after a particular time 
  const setTime = () => {
    const dateTime = moment('Mon Nov 01 2021 04:57:00 GMT+0500')
    const newDateTime = ( dateTime - new Date().getTime() )

    setTimeout(() => {
      showAlert('Working Fine', 'success')
    }, newDateTime);
  }
  
  // Function to Give Values to Alert Sate
  const showAlert = (message, type) => {
    setAlert({
      message,
      type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
      
      // Function
      showAlert('Dark Mode has been Enabled', 'success')
    }

    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <div>
        <NavBar title="CrazyVolt" about="About" mode={mode} toggleMode={toggleMode}/>

        <Alert userName='Anas' alert={alert}/>

        <div className="container">
            <TextForm heading="Enter the text" mode={mode}/>
        </div>

        {/* < TimePicker/> */}
    </div>  
  );
}

export default App;
