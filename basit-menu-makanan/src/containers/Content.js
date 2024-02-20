import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom"; //navigation: kalo mau programatically
import ButtonDetail from "../components/ButtonDetail";

export default function Content(props){

   const menus = props.menu;
   let menuByCategory = null;
   let strMenu = '';
   const [content,setContent] = useState('');

   // Set Menu Default Value
   const setDefault = ()=>{
      strMenu = menus.map((arr)=>(
         <div key={ arr.idMeal }  className="Content-body-card White-color">
            <div>
               <img src={ arr.strMealThumb } className="Img-responsive" alt={ arr.strMeal }></img>
            </div>
   
            <div className="Display-flex Left-sided">
               <p >{ arr.strMeal }</p>
               <ButtonDetail menu={ arr } />
            </div>
   
            <div className="Price">
               <p><small><i> Rp. {arr.idMeal}</i></small></p>
            </div>

            <Link className="Black-color Add-to-cart">Add to Cart <i className="fa-solid fa-cart-plus"></i></Link>
         </div>
      ));
      setContent(strMenu);
   }

   // Fetch data menu by category
   const fetchData = async (category)=>{
      const link = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='+category;
      const data = await fetch(link);
      menuByCategory = await data.json();
      
      if(menuByCategory.meals){
         let filteredMenu = menuByCategory.meals
         // console.log(menuByCategory.meals);
         strMenu = filteredMenu.map((arr)=>(
            <div key={ arr.idMeal }  className="Content-body-card White-color">
               <div>
                  <img src={ arr.strMealThumb } className="Img-responsive" alt={ arr.strMeal }></img>
               </div>
      
               <div className="Display-flex Left-sided">
                  <p >{ arr.strMeal }</p>
                  <ButtonDetail menu={ arr } />
               </div>
      
               <div className="Price">
                  <p><small><i> Rp. {arr.idMeal}</i></small></p>
               </div>
   
               <Link className="Black-color Add-to-cart">Add to Cart <i className="fa-solid fa-cart-plus"></i></Link>
            </div>
         ));
         setContent(strMenu)
      }
   }
   
   // Handling button clicked
   const btnClicked = (category)=>{
      fetchData(category);
   }
   
   // use effect for default menu,
   useEffect(()=>{
      setDefault();
   },[strMenu]);
   
   // use effect for fetching data by category
   useEffect(()=>{
      fetchData();
   },[content]);
   
   return(
      <div className="Content">
         <div className="Content-header White-color">
            {/* Filter Btn */}
            <div className="Content-header-left">
               <p><i className="fa-solid fa-filter"></i> Filter by</p>
               <button type="button" onClick={()=>btnClicked('Breakfast')}> Main Course</button>
               <button type="button" onClick={()=>btnClicked('Dessert')}> Dessert </button>
               <button type="button" onClick={()=>btnClicked('Starter')}> Starter </button>
            </div>
            <div className="Content-header-center Yellow-color">
               <h1>CUSTOMER<br></br>FAVOURITES</h1>
            </div>
            {/* Cart Btn */}
            <div className="Content-header-right">
               <div className="Content-info Yellow-color">
                  <i className="fa-regular fa-clock" style={{ width: '190px' }}></i>
                  All orders for Tuesday pick up must be placed by 8pm Sunday evening
               </div>
            </div>
         </div>

         {/* All Contents */}
         <div className="Content-body">
            {
               content
            }
         </div>
      </div>
   );
}