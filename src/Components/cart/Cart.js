import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    const cartLength = props.cart.length;
    const reducer = (previous,current)=>previous+current.fee;
    const totalFee=props.cart.reduce(reducer,0);
    const reduc = (previous,current)=>previous+current.name;
    const names=props.cart.reduce(reduc,'');
   // console.log(totalFee);
   
    return (
        
          <div >
            {/* show total fee and how many item select  */}
          <h1>Invited Guest Added : {cartLength}</h1>
             <h1>Total Guest Cost : ${totalFee}</h1>
             <button>Add Them</button>
             <h1> name : {names}</h1>
          </div>
         
        
    );
};

export default Cart;