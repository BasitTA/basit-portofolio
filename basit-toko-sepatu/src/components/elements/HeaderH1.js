export default function HeaderH1(props){
   const title = props.title;
   const h1Class = props.h1Class;

   return(
      <>
         <h1 className={ `${h1Class}` }>
            { title }
         </h1>
      </>
   );
}