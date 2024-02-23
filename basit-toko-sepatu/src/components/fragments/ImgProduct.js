export default function ImgProduct(props){
   const img = props.img;
   const title = props.title;
   const desc = props.desc;
   const feature = props.feature;
   const imgSecondary = props.imgSecondary;

   const featureItems = feature.map((arr)=>{
      return <li>{ arr }</li>
   })

   const imgSecondaryItems = imgSecondary.map((arr)=>{
      return <img id='Img-secondary' className='col-4 w-35 p-0 m-1' src={ arr } alt={ 'title' } width="" height=""></img>
   })

   return(
      <div className='Img-product my-auto'>
         <div className='d-flex justify-content-around row align-items-center'>
            <div className='col-5'>
               <a href='#'>
                  <img src={ img } alt={ title } width="80%" height=""></img>
               </a>
            </div>
            <div className='col-7 text-center'>
               <h5>{ title }</h5>
               <p>{ desc }</p>
               <ul className='text-center'>{ featureItems }</ul>
               <a href="#" className="btn btn-primary">Buy Now</a>
            </div>
         </div>
         <div className='d-flex justify-content-center' >
            <div class="row flex-nowrap overflow-auto col-6 text-center p-0 m-0">
               { imgSecondaryItems }
            </div>
         </div>
      </div>
   );
}