import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirst';
import Cart from '../Cart/Cart';

import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirts,setTshirts] = useTshirt();
    const [cart,setCart] = useState([]);

    const handleAddToCart = (selectedItem)=>{
        const exists =cart.find(tShirt => tShirt._id === selectedItem._id);
        if(!exists){
            const newCart = [...cart,selectedItem];
            setCart(newCart);
        }
        else{
            alert('Item is added');
        }
    }
    const handleRemoveFromCart = (selectedItem)=>{
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest);
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