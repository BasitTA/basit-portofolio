export default function FooterItems(props){
   const title = props.title;
   const item = props.item;

   const detail = item.map((arr)=>(
      <>
         <span className=''><i className={ arr.icon }></i></span>
         <a href='#' className="card-text">{ arr.detail }</a>
      </>
   ));

   return(
      <div className={`col mt-3 text-center`}>
         <h5 className="card-title text-white">{ title }</h5>
         
         <div className={ `card-body ` }>
            { detail }
         </div>
      </div>
   );
}