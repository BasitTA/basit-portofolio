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
// w-25
   return(
      <div className={ `col-8 col-sm-5 col-lg-2 card text-center justify-content-center px-0 py-0 ${rootClass}` }>
         {/* display icon if there is no image */}
         {(icon) ? <span className=''><i className={ icon }></i></span> : <img src={ img } className={`card-img-top ${imgClass}`} alt="..." />}
         
         <div className={ `card-body ${ childClass }` }>
            <h4 className="card-title">{ title }</h4>
            <p className="card-text">{ desc }</p>
            {/* change button text based on props */}
            {(btnText) ? <a href="#" className="btn btn-sm btn-dark">{ btnText }</a> : <></>}
         </div>
      </div>
   );
}