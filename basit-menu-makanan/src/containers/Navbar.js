import React from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

export default function Navbar(){

   return(
      <div className='Nav'>
         <div className='Nav-link'>
            <Link>Contact Us</Link>
         </div>
         <div className='Nav-link'>
            <Link>About Us</Link>
            <Link>Delivery</Link>
            <Link>Locations</Link>
            <Link>Contacts</Link>
         </div>
         <div className='Nav-icon'>
            <Link><i className="fa-solid fa-basket-shopping"></i></Link>
            <p className='White-color'>0</p>
         </div>
      </div>
   );
}