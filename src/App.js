import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';

function App() {
  const {gun,SetGun} = useState([]);

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    .then(res=>res.json())
    .then(data=>console.log(data))
  },[])
  return (
    <div className="App">
     <Navbar></Navbar>
    </div>
  );
}

export default App;
