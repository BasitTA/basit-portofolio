import { useLocation } from "react-router-dom"; //utk ambil data dari state
import { useEffect, useState } from "react";

export const ProductDetail = () => {
   const location = useLocation(); //pakai fungsi useLocation utk ambil variabel state
   const detailMenu = location.state.menu;

   const [ menu, setMenu ] = useState('');
   const [ country, setCountry ] = useState('');
   
   useEffect(()=>{
      fetchData();
      if(menu){
         fetchDataCountry();
      }
   },[menu]);

   // ambil data berdasarkan id menu
   const fetchData = async () => {
      const linkMenu = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detailMenu.idMeal}`;
      const dataMenu = await fetch(linkMenu);
      const menuJson = await dataMenu.json();
      setMenu(menuJson.meals[0]);
   }
   
   // ambil data bendera negara
   const fetchDataCountry = async () => {
      try{
         const linkCountry = `https://restcountries.com/v3.1/name/${menu.strArea}`;
         const dataCountry = await fetch(linkCountry);
         if(!dataCountry.ok){
            setCountry('a');
         }else{
            const countryJson = await dataCountry.json();
            setCountry(countryJson[0].flag);
         }
      }catch(error){
         console.log('err'+error);
      }
   }

   // utk membuat 20 ingredients
   let ingredients = [];
   let str='';
   for(let i=0; i<20; i++){
      str = 'menu.strIngredient'+(i+1);
      ingredients.push(eval(str));  //convert string to code & push to the array
   }

   const filteredIngredients = ingredients.filter(n=>n); //remove null value

   // utk membuat list of ingredients
   const listOfIngredients = filteredIngredients.map((arr, i)=>(
      <li className="Ingredients" key={ i }>- { arr }</li>
   ));

   return(
      <div className="Product-detail">
         <h1 className="Yellow-color"> { menu.strMeal }</h1>
         <img src={ menu.strMealThumb } alt={ menu.strMealThumb }></img>
         <h3 className="White-color">{ country } { menu.strArea } Food</h3>

         <div className="Width-80 White-color">
            <h2 className="Yellow-color">Ingredients</h2>
            <ul>
               { listOfIngredients }
            </ul>
            <h2 className="Yellow-color">Instructions</h2>
            <p>{ menu.strInstructions }</p>
         </div>
      </div>
   );
}