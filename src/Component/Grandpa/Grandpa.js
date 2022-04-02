import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
export const RingContext = createContext('ring');
const Grandpa = () => {
  const [house,setHouse] = useState(1);
  const ornaments = 'diamond';
  const handleBuyHouse =()=>{
      const newHouseCount = house + 1;
      setHouse(newHouseCount);
  }
    return (
        
     <RingContext.Provider value='alur ring'>
            <div className='grandpa' style={{display:'flex'}}>
            <h4>Grandpa</h4>
            
            <p>house:{house} <button onClick={handleBuyHouse}>Buy A house</button></p>
           <section  style={{ display: 'flex' }}>
           <Father house={house}></Father>
           <Uncle house={house}></Uncle>
           <Aunty house={house}></Aunty>
           </section>
        </div>
     </RingContext.Provider>
    );
};

export default Grandpa;