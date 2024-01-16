import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
 
 const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
    document.body.style.backgroundColor = 'gray'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'

    }
  }

  return (
 <>
<Navbar title="CWP"  mode={mode} toggleMode={toggleMode}/>  
<Alert alert="this is alert"/>

<div className="container my-3">
<Textform heading="Enter the taxt to analyze" mode={mode}/>
 
      {/* <About /> */}

</div>
 </>
  );
}

export default App;
