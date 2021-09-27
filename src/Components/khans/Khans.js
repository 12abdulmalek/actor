import React, { useEffect, useState } from 'react';
import Khan from '../actor/Khan';
import Cart from '../cart/Cart';
import './khans.css'
const Khans = () => {
        const [actoress,setActoress] = useState([]);
        const [cart , setCart] = useState([]);
        useEffect(()=>{
            // json file load here 
              fetch('./actoress.JSON')
              .then(res => res.json())
              .then(data => setActoress(data))
        },[]);
        const loadKhanData=data=>{
           
            const newCart =[...cart,data];
            setCart(newCart);
        }
        console.log('car',cart);
    return (
        <div>
              <div className="carts">
           <div className="divided">
           {
            //    to search each data using map 
                actoress.map( khanData =>  <Khan
                key={khanData.key}
                khanData={khanData}
                loadKhanData={loadKhanData}
                >
                </Khan> )
            }
            
           </div>
           {/* here i show in ui to cart  */}
           <div>
               {
            <Cart
              cart={cart}
            ></Cart>
               }
           </div>
        </div>
        </div>
    );
};

export default Khans;