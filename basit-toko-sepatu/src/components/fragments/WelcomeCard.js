export default function WelcomeCard(props){
   const img = props.img;
   const title = props.title;
   const desc = props.desc;

   return(
      <div className="card w-25 mt-3">
         <img src={ img } className="card-img-top h-50" alt="..." />
         <div className="card-body">
            <h5 className="card-title">{ title }</h5>
            <p className="card-text">{ desc }</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
      </div>
   );
}