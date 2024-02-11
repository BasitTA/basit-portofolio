import React from 'react';
import '../styles/App.css';

export default function Navbar(){

   return(
      <div className='Nav'>
         <div className='Nav-link'>
            <a href='#'>0812-0000-0000</a>
         </div>
         <div className='Nav-link'>
            <a href='#'>About Us</a>
            <a href='#'>Delivery</a>
            <a href='#'>Locations</a>
            <a href='#'>Contacts</a>
         </div>
         <div className='Nav-icon'>
            <a href='#'>Cart</a>
            <a href='#'>Counter</a>
         </div>
      </div>
   );
}