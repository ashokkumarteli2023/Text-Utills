import React,{useState} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  const [currentMode, setCurrentMode] = useState(
        {
          color:'black',
          backgroundColor:'white'
        }
            );
  const[mode, setMode]=useState('Enable Dark Mode');

  const toggleMode=()=>{
    // console.log("toggleMode is clicked");
    console.log(currentMode);
    if(currentMode.color==='black')
    {
      setCurrentMode({
        color:'white',
        backgroundColor:'black',
      })
      setMode('Disable Dark Mode');
      // document.title="anything"
    }
    else{
      setCurrentMode({
        color:'black',
        backgroundColor:'white'
      })
      setMode('Enable Dark Mode');
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={currentMode}>
    <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={currentMode}>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-Link active mx-3" aria-current="page" to="/" style={currentMode}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="/About" style={currentMode}>About</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
        <button className="btn btn-primary" onClick={toggleMode}>{mode}</button>
      </form>
    </div>
  </div>
    </nav>
    </div>
  )
}

Navbar.prototype={
    // title: PropTypes.string
    title: PropTypes.string.isRequired
};

Navbar.defaultPrototype={
    title : "MyProject"
};
