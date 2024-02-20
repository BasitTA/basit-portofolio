import { Link } from "react-router-dom";

export default function ButtonDetail(props) {

   const menu = props.menu;
// console.log(menu.strMeal)
   return(
      <Link className="Button-detail" to={ `/productDetail/${menu.idMeal}` } state={{ menu: menu }}>
         <i className="fa-solid fa-circle-info"></i>
      </Link>
   );
}