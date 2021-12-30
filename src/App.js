
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
/*import TextForm from './components/TextForm';
<div className='container'>
     <TextForm title= "Enter text here"/>
    </div>
     const [mode, setMode] = useState('dark'); // Whether dark mode is enabled or not
    (const toggleMode = ()=>{
      if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = '#042743';
     }
     else{
       setMode('light');
       document.body.style.backgroundColor = 'white';
     }
   }
    )*/
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
    msg: message,
    Type: type
    }) 
    setTimeout(()=>{
    setAlert(null);                                                                                                                                                                                                                      
    },1500);
  }                                                
  const toggleMode = ()=>{
    if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor = '#042743';
     document.body.style.Color = 'white';
     showAlert("Dark mode has been enabled","success");
   }
   else{
     setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert("Light mode has been enable","success")
   }
 }

  return (                                                                                                               
    <>
 
   

 
    
    
    <Navbar title = "TextUtils" mode={mode}  toggleMode= {toggleMode}/>
    <Alert alert={alert}/>
    <div className='container' >
     <TextForm title= "Enter text here" mode={mode} showAlert={showAlert}  />
    </div>

   

    </>
  );
}

export default App;
