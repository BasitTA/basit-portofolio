import { useLocation } from "react-router-dom"; //utk ambil data dari state
import { useEffect, useState } from "react";

export const ProductDetail = () => {
   const location = useLocation(); //pakai fungsi useLocation utk ambil variabel state
   const detailMenu = location.state.state;
   console.log(detailMenu)

   const { dataMenu, setDataMenu } = useState('');

   const fetchData = async () => {
      const link = 'www.themealdb.com/api/json/v1/1/lookup.php?i='+detailMenu.idMeal;
      const data = await fetch(link);
      const dataJson = await data.json();
      setDataMenu(dataJson);
   }

   useEffect(()=>{
      fetchData();
   },[dataMenu]);

   console.log(dataMenu);
   return(
      <>
         <img src={ detailMenu.strMealThumb } alt={ detailMenu.strMealThumb }></img>
         <h1> { detailMenu.strMeal } </h1>
         <p>Deskripsi</p>

         <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
               {/* <li>{ dataMenu.strIngredient}</li> */}
            </ul>
         </div>
         <div>
            Country of Origin: { }
         </div>
      </>
   );
}