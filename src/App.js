import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grandpa from './Component/Grandpa/Grandpa';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import OrderReview from './Component/OrderReview/OrderReview';

function App() {
 
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/orderreview' element={<OrderReview></OrderReview>}></Route>
      <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
    </Routes>
    
    </div>
  );
}

export default App;
