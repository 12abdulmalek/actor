import React from 'react';
import './khan.css'
const Khan = (props) => {
    const {name,picture,profession,fee,age,city,country }=props.khanData;
   // console.log(props.loadKhanData);
    return (
        <div>
                <div className="separete">
                 <img src={picture} alt="loading..." />
                 <h2>Name : <small>{name}</small> </h2>
                 <h3>Age : <small>{age}</small></h3>
                 <h3>profession : <small>{profession}</small></h3>
               
                 <h3>Fee : <small>{fee}</small></h3>
                 <h3>Live in : <small>{city} , {country}</small></h3>
              
              
                 <button  onClick={()=>props.loadKhanData(props.khanData)}> <i class="fas fa-shopping-cart"></i> Hire Me</button>
       
                 <div >
               
                 </div>
        </div>
        </div>
    );
};

export default Khan;