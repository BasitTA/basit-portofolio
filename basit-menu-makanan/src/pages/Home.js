import Content from "../containers/Content";
import Hero from "../containers/Hero";
import Navbar from "../containers/Navbar";

import { useState, useEffect, useRef} from 'react';


export const Home = () => {
   const [menu, setMenu] = useState(null);
 
   const fetchData = async() => {
     const link = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert';
     const data = await fetch(link);
     const menu = await data.json();
     setMenu(menu.meals);
   }
 
   useEffect(()=>{
     // run fetch data
     fetchData();
   },[menu]);
 
   if(!menu) return 'Tunggu sebentar, sedang mengambil data..';
 
   return(
      <>
         <header className="Header">
            <nav><Navbar /></nav>
            <section><Hero /></section>
         </header>
         <section>
            <Content menu={ menu }/>
         </section>
         <footer></footer>
      </>
   );
}