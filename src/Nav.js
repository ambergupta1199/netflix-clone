import React, { useEffect, useState } from 'react';
import './Nav.css';
function Nav() {
    const[show,handleShow]=useState(false);
    useEffect(()=>{
window.addEventListener("scroll",()=>{
if(window.scrollY>100){
handleShow(true);
}
else{
    handleShow(false);
};
});
return ()=>{
    window.removeEventListener("scroll");
};
    },[]);
    return (
        <div className={`nav ${show && "nav__black"}`}>
        <img className="nav__logo" src="https://www.luwia.nl/wp-content/uploads/2020/03/netflix-logo-1.jpg"
       alt="Netflix Logo" ></img>
          <img className="nav__avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
       alt="Netflix Logo" ></img>  
        </div>
    )
}

export default Nav;
