// Belajar menggunakan useState, useEffect, localStorage, lifecycle concept, 
// Js: find, map, reduce, spread operator, ternary operator

import { useEffect, useState } from 'react';

export default function CartCoffee(){
   const dataCoffee = [
      { id: 1, name: 'Latte', price: 25000 },
      { id: 2, name: 'Americano', price: 22000 },
      { id: 3, name: 'Espresso', price: 19000 },
   ];

   const [cart, setCart] = useState([]);
   const [totalQty, setTotalQty] = useState([]);
   const [totalPrice, setTotalPrice] = useState([]);

   // didMount
   useEffect(()=>{
      
      setCart(
         JSON.parse(localStorage.getItem('cart')) || []
      )
      
   },[]);

   // didUpdate
   useEffect(()=>{
      if(cart.length>0){
         const sumQty = cart.reduce((accumulator,item)=>{
            // const dataFound = dataCoffee.find((data)=>(data.id === item.id))
            return accumulator + item.qty
         }, 0);
         const sumPrice = cart.reduce((accumulator,item)=>{
            const dataFound = dataCoffee.find((data)=>(data.id === item.id))
            return accumulator + dataFound.price * item.qty
         }, 0);
         setTotalQty(sumQty);
         setTotalPrice(sumPrice);
         
         localStorage.setItem('cart', JSON.stringify(cart));
      }
   },[cart]);

   const handlingAddBtn = (id)=>{
      if(cart.find((item)=>(item.id === id))){
         setCart(
            cart.map(item=>item.id === id ? { ...item, qty: item.qty+1 } : item)
         )
      }else{
         setCart([
            ...cart,
            {id:id, qty:1}
         ]);
      }
   };

   const displayData = dataCoffee.map((item)=>(
      <div key={ item.id } className='text-center'>
         <div>
            {`${ item.name } - ${ item.price }`}
         </div>
         <button onClick={ ()=>handlingAddBtn(item.id) }>+</button>
      </div>
   ));

   const displayCartData = cart.map((item)=>{
      const dataFound = dataCoffee.find((data)=>(data.id === item.id));

      return(
         <tr key={ dataFound.id }>
            <td>{ dataFound.name }</td>
            <td>{ dataFound.price }</td>
            <td>{ item.qty }</td>
            <td>{ item.qty*dataFound.price }</td>
         </tr>
      );
   });

   const displayTotal = <tr>
      <th>Total /all </th>
      <th></th>
      <th>{ totalQty } </th>
      <th>{ totalPrice }</th>
   </tr>;

   return(
      <>
         <h1 className='center'>Use State - Use Effect</h1>
         <div>
            <ul className='center'>
               { displayData }
            </ul>
            <div className='center'>
               <table className='text-center'>
                  <thead>
                     <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total Price /item</th>
                     </tr>
                  </thead>
                  <tbody>
                     { displayCartData }
                  </tbody>
                  <tbody>
                     { displayTotal }
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
}