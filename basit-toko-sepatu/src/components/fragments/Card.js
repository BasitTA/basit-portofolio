export default function Card(props){
   const img = props.img;
   const title = props.title;
   const desc = props.desc;
   const icon = props.icon;
   const btnText = props.btnText;
   
   const rootClass = props.rootClass;
   const childClass = props.childClass;
   const imgClass = props.imgClass;
   // row flex-nowrap overflow-auto col-6 text-center p-0 m-0

   return(
      <div className={`card col-3 w-25 mt-3 text-center ${rootClass}`}>
         {/* display icon if there is no image */}
         {(icon) ? <span className=''><i className={ icon }></i></span> : <img src={ img } className={`card-img-top ${imgClass}`} alt="..." />}
         
         <div className={ `card-body ${ childClass }` }>
            <h3 className="card-title">{ title }</h3>
            <p className="card-text">{ desc }</p>
            {/* change button text based on props */}
            {(btnText) ? <a href="#" className="btn btn-primary">{ btnText }</a> : <></>}
         </div>
      </div>
   );
}