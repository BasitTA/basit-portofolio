import { useLocation } from "react-router-dom"; //utk ambil data dari state
import { useEffect, useState } from "react";

export const ProductDetail = () => {
   const location = useLocation(); //pakai fungsi useLocation utk ambil variabel state
   const detailMenu = location.state.menu;

   const [ dataMenu, setDataMenu ] = useState('');
   
   useEffect(()=>{
      fetchData();
   },[dataMenu]);

   // ambil data berdasarkan id menu
   const fetchData = async () => {
      const link = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detailMenu.idMeal}`;
      const data = await fetch(link);
      const menu = await data.json();
      setDataMenu(menu.meals[0]);
   }

   // utk membuat 20 ingredients
   let ingredients = [];
   let str='';
   for(let i=0; i<20; i++){
      str = 'dataMenu.strIngredient'+(i+1);
      ingredients.push(eval(str));  //convert string to code & push to the array
   }

   const filteredIngredients = ingredients.filter(n=>n); //remove null value

   // utk membuat list of ingredients
   const listOfIngredients = filteredIngredients.map((arr, i)=>(
      <li key={ i }>{ arr }</li>
   ));

   return(
      <>
         <img src={ dataMenu.strMealThumb } alt={ dataMenu.strMealThumb }></img>
         <h1> { dataMenu.strMeal } </h1>

         <div className="Ingredients">
            <h2>Ingredients</h2>
            <ul>
               { listOfIngredients }
            </ul>
         </div>

         <div className="Instructions">
            <h2>Instructions</h2>
            <p>{ dataMenu.strInstructions }</p>
         </div>

         <div className="Country">
            <h3>Country of Origin: { dataMenu.strArea } Food</h3>
         </div>
      </>
   );
}