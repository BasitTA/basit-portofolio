import HeaderH1 from "../elements/HeaderH1";
import Card from "../fragments/Card";

export default function Review(){

   const addedClass = {
      root: 'my-5 pt-5 mx-1',
      child: 'mt-4 py-4',
      img : 'rounded-circle position-absolute pt-2 w-50 top-0 start-50 translate-middle',
      h1 : 'mb-5',
   }

   const review = [
      {
         custName : 'Adin - Distributor',
         reviewText : 'Beli sepatu di sini sangat berkualitas, mulai dari bahan, pelayanan dan pasti harga sangat bersaing',
         imgCust : 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=3332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
         custName : 'Brodi - Customer',
         reviewText : 'Beli produk di Boss Store auto jadi boss muda!!',
         imgCust : 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=3246&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
         custName : 'Joe - Reseller',
         reviewText : 'Harga terbaik kualitas sangat baik',
         imgCust : 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
         custName : 'Rodri - CEO of Roemah Sepatu',
         reviewText : 'Produk sangat memuaskan dan berkelas. Kualitas pelayanan sangat baik dan responsif',
         imgCust : 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?q=80&w=3298&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
         custName : 'Adin - Distributor',
         reviewText : 'Beli sepatu di sini sangat berkualitas, mulai dari bahan, pelayanan dan pasti harga sangat bersaing',
         imgCust : 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=3332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
         custName : 'Brodi - Customer',
         reviewText : 'Beli produk di Boss Store auto jadi boss muda!!',
         imgCust : 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=3246&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
         custName : 'Joe - Reseller',
         reviewText : 'Harga terbaik kualitas sangat baik',
         imgCust : 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
         custName : 'Rodri - CEO of Roemah Sepatu',
         reviewText : 'Produk sangat memuaskan dan berkelas. Kualitas pelayanan sangat baik dan responsif',
         imgCust : 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?q=80&w=3298&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
   ]

   const reviewContent = review.map((item)=>(
      <>
         <Card rootClass={ addedClass.root} childClass={ addedClass.child } imgClass={ addedClass.img } title={ item.custName }  desc={ `"${item.reviewText}"` }  img={ item.imgCust } />    
      </>
   ));

   return(
      <div className='Review text-center row align-items-center justify-content-center mx-1'>
         <HeaderH1 h1Class={ addedClass.h1 } title='OUR HAPPY CUSTOMER' />
         <div className='row flex-nowrap overflow-auto text-center pt-5'>
            { reviewContent }
         </div>
      </div>
   );
}