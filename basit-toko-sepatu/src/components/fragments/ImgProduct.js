export default function ImgProduct(props){
   const img = props.img;
   const title = props.title;
   const desc = props.desc;
   const feature = props.feature;
   const imgSecondary = props.imgSecondary;

   const featureItems = feature.map((arr)=>{
      return <small key={ Math.random() } className='mx-1 text-success  text-start'>+ { arr }</small>
   })

   const imgSecondaryItems = imgSecondary.map((arr)=>{
      return <img key={ Math.random() }  id='Img-secondary' className='col-4 w-35 p-0 m-1' src={ arr } alt={ 'title' } width="" height=""></img>
   })

   return(
      <div className='Img-product my-auto'>
         <div className='d-flex justify-content-center row align-items-center text-center'>

            <div className='col-5 m-0 p-0'>
               <img src={ img } alt={ title } width="70%" height=""></img>
            </div>
            <div className='col-6 p-0 text-start'>
               <h4>{ title }</h4>
               <p>{ desc }</p>
               <span className='m-0'><b>Main Feature</b></span>
               <b className='d-flex'>{ featureItems }</b>
            </div>

         <div className='d-flex justify-content-center my-3 col-12' >
            <div className='row flex-nowrap overflow-auto col-7 text-center p-0 m-0'>
               { imgSecondaryItems }
            </div>
         </div>
            <a href="#" className="btn btn-success col-6">Buy Now</a>
         </div>
      </div>
   );
}