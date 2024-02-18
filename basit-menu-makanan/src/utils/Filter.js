import { useState } from "react";

export const Filter = () => {
   const [menu, setMenu] = useState(null);
   const category = '';

   const fetchData = async ()=>{
      const link = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='+category;
   }

   
   return(
      <>

      </>
   );
}