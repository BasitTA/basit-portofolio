export default function Card(props){
   const img = props.img;
   const title = props.title;
   const desc = props.desc;
   const icon = props.icon;
   const btnText = props.btnText;

   return(
      <div className="card col-3 w-25 mt-3 text-center">
         {/* display icon if there is no image */}
         {
            (icon) ? <span className=''><i className={ icon }></i></span> : <img src={ img } className="card-img-top h-50" alt="..." />
         }
         
         <div className="card-body">
            <h3 className="card-title">{ title }</h3>
            <p className="card-text">{ desc }</p>
            {
               (btnText) ? <a href="#" className="btn btn-primary">{ btnText }</a> : <></>
            }
            
         </div>
      </div>
   );
}