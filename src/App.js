import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import title from './module';
// let name="Ashok";
function App() {
  const [alert, setAlert]=useState(null);
  const showAlert=(type,msg)=>{
        setAlert({
          Type:type,
          Message:msg
        })
        setTimeout(()=>{
          setAlert(null);
        },1500)
  };
  
  return (
    <>
    <Router>
    <Navbar title="TextUtills" />
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
          <Route exact path="/About" element={ <About />}/>
            
          <Route exact path="/" element={<TextForm heading="This is TextArea Heading" showTextFormAlert={showAlert}/>} />
         
       </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
