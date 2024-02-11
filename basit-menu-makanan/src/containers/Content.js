import { useEffect } from "react";
import '../styles/Content.css';
import Button from "../components/Button";

export default function Content(props){

   const menus = props.menu;
   
   useEffect(()=>{
      console.log(menus);
   },[]);
   
   return(
      <div>
         <div className="Content-header">
            <div>Left Header</div>
            <div>Center Header</div>
            <div>Right Header</div>
         </div>
         <div className="Content-body">
            {
               menus.map((arr)=>(
                  <div className="Content-body-card col-3">
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