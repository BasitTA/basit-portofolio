import Card from "../fragments/Card";

export default function Welcome(){
   return(
      <div className='Welcome text-center row align-items-center'>
         <div>
            <h1>YOU ARE THE BOSS NOW!</h1>
            <p>Rasakan pengalaman baru anda menjadi boss muda yang berkarakter</p>
            <div className='d-flex gap-2'>
               <Card title='Boots' desc='' btnText='Buy Now' img='https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
               <Card title='Loafers' desc='' btnText='Buy Now' img='https://images.unsplash.com/photo-1615979474401-8a6a344de5bd?q=80&w=2962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
               <Card title='Sneakers' desc='' btnText='Buy Now' img='https://images.unsplash.com/photo-1518894781321-630e638d0742?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
               <Card title='Running' desc='' btnText='Buy Now' img='https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
         </div>
      </div>
   );
}