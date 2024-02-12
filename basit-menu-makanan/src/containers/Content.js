import { useEffect } from "react";
import Button from "../components/ButtonAdd";

export default function Content(props){

   const menus = props.menu;
   
   useEffect(()=>{
      console.log(menus);
   },[]);
   
   return(
      <div>
         <div className="Content-header White-color">
            <div className="Content-header-left">
               <p>Filter by:</p>
               <a href="">Main Course</a>
               <a href="">Dessert</a>
               <a href="">Appetizer</a>
            </div>
            <div className="Content-header-center Yellow-color">
               <h1>CUSTOMER<br></br>FAVOURITES</h1>
            </div>
            <div className="Content-header-right">
               <div className="Content-cart">
                  <a href=""><i class="fa-solid fa-basket-shopping"></i></a>
                  <p>0</p>
               </div>
               <div className="Content-info Yellow-color">
                  <i class="fa-regular fa-clock" style={{ width: '190px' }}></i>
                  <p>All orders for Tuesday pick up must be placed by 8pm Sunday evening</p>
               </div>
            </div>
         </div>
         <div className="Content-body">
            {
               menus.map((arr)=>(
                  <div className="Content-body-card White-color">
                     <img src={arr.strMealThumb} className="Img-responsive"></img>
                     
                      <i></i>

                     <div className="Display-flex Left-sided">
                        <p>weight</p>
                        <p>price</p>
                     </div>

                     <div className="Display-flex Left-sided">
                        <p>{ arr.strMeal }</p>
                        <Button />
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   );
}