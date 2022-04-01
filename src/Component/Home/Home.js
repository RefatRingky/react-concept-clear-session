import React from 'react';
import useTshirt from '../../hooks/useTshirst';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirts,setTshirts] = useTshirt();
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                 {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        
                    ></TShirt>)
                 }
            </div>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;