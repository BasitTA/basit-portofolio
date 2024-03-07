import { useState } from 'react';
import '../App.css';

export default function Cart(){
   const [cart, setCart] = useState([]);

   const handlingButton = (id)=>{
      if(cart.find(item=>item.id === id)){
         setCart(
            cart.map(item=>item.id === id ? { ...item, qty: item.qty+1 } : item)
         );
      }else{
         setCart([...cart, { id, qty: 1 }])
      }
   }

   const data = [
      { id: 1, name: 'Gold Variant', price: 3000000, source: { nation:{ name: 'Indonesia', code: 'ID', city: 'Jakarta', zipcode: 18991} },size: ['Medium','Extra Large','Super Large'] }, { id: 2, name: 'Black Variant', price: 3000000 }, { id: 3, name: 'Red Variant', price: 1500000 }, { id: 4, name: 'White Variant', price: 1500000 }, { id: 5, name: 'Purple Variant', price: 1500000 },
   ]

   const displayData = data.map((item)=>( 
      <div key={ item.id } className='text-center'>
         <div>{ item.name } : { item.price }</div>
         <button onClick={ ()=>(handlingButton(item.id)) }>+</button>
      </div>
   ));
   
   const displayCartData = cart.map((item)=>{ 
      const dataFound = data.find((data)=>(data.id === item.id));
      return(
         <tr key={ dataFound.id } className='text-center'>
            <td>{ dataFound.name }</td>
            <td>{ dataFound.price }</td>
            <td>{ item.qty }</td>
            <td>{ item.qty*dataFound.price }</td>
         </tr>
      );
   });

   return(
      <>
         <h1 className='center'>Use State</h1>
         <div>
            <div className='center'>
               { displayData }
            </div>
            <div className='center'>
               <table className='text-center'>
                  <thead>
                     <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                     </tr>
                  </thead>
                  <tbody>
                     { displayCartData }
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
}