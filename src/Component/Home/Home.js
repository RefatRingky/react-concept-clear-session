import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirst';
import Cart from '../Cart/Cart';

import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirts,setTshirts] = useTshirt();
    const [cart,setCart] = useState([]);
    const handleAddToCart = (selectedItem)=>{
        const newCart = [...cart,selectedItem];
        setCart(newCart);
    }
    const handleRemoveFromCart = (selectedItem)=>{

    }
    
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                 {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart ={handleAddToCart}
                        
                    ></TShirt>)
                 }
            </div>
            <div className='cart-container'>

            <Cart
            handleRemoveFromCart={handleRemoveFromCart}
            cart={cart}
            ></Cart>
            </div>
        </div>
    );
};

export default Home;