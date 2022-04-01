
import { Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import OrderReview from './Component/OrderReview/OrderReview';
function App() {
 
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Router path='/' elemenet={<Home></Home>} ></Router>
      <Router path='/home' elemenet={<Home></Home>}></Router>
      <Router path ='orderReview' elemenet={<OrderReview></OrderReview>}></Router>
    </Routes>
    
    </div>
  );
}

export default App;
