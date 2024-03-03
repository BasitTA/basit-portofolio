import HeaderH1 from "../elements/HeaderH1";
import Card from "../fragments/Card";

export default function Review(){

   const addedClass = {
      root: 'my-5 pt-5 mx-1',
      child: 'mt-4',
      img : 'rounded-circle position-absolute pt-2 w-50 top-0 start-50 translate-middle',
      h1 : 'mb-5',
   }

   const custName = 'Juragan Sepatu';
   const reviewText = 'Beli sepatu di sini sangat berkualitas, dijamin auto jadi boss muda!!';
   const imgCust = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

   return(
      <div className='Review text-center row align-items-center justify-content-center'>
         <HeaderH1 h1Class={ addedClass.h1 } title='OUR HAPPY CUSTOMER' />
         <div className='row flex-nowrap overflow-auto text-center pt-5 justify-content-center'>
            <Card rootClass={ addedClass.root} childClass={ addedClass.child } imgClass={ addedClass.img } title={ custName }  desc={ `"${reviewText}"` }  img={ imgCust } />
            <Card rootClass={ addedClass.root} childClass={ addedClass.child } imgClass={ addedClass.img } title={ custName }  desc={ `"${reviewText}"` }  img={ imgCust } />
            <Card rootClass={ addedClass.root} childClass={ addedClass.child } imgClass={ addedClass.img } title={ custName }  desc={ `"${reviewText}"` }  img={ imgCust } />
            <Card rootClass={ addedClass.root} childClass={ addedClass.child } imgClass={ addedClass.img } title={ custName }  desc={ `"${reviewText}"` }  img={ imgCust } />
            <Card rootClass={ addedClass.root} childClass={ addedClass.child } imgClass={ addedClass.img } title={ custName }  desc={ `"${reviewText}"` }  img={ imgCust } />
            <Card rootClass={ addedClass.root} childClass={ addedClass.child } imgClass={ addedClass.img } title={ custName }  desc={ `"${reviewText}"` }  img={ imgCust } />
         </div>
      </div>
   );
}