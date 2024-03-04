export default function HeaderH4(props){
   const title = props.title;
   const h4Class = props.h4Class

   return(
      <>
         <h4 className={ `${h4Class}` }>
            { title }
         </h4>
      </>
   );
}