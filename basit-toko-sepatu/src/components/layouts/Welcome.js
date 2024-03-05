import HeaderH1 from "../elements/HeaderH1";
import HeaderH5 from "../elements/HeaderH5";
import Card from "../fragments/Card";

export default function Welcome(){
   return(
      <div className='Welcome text-center row align-items-center min-vh-100 mb-5'>
         <div className='row justify-content-center mt-5 pb-5'>
            <HeaderH1 title='YOU ARE THE BOSS NOW!' h1Class='mt-4'/>
            <HeaderH5 title='Rasakan pengalaman baru menjadi boss muda yang berkarakter'/>
            <div className='row d-flex gap-2 justify-content-center mt-4 h-100 px-0'>
               <Card btnText='Boots' childClass='pt-0' imgClass='h-100' img='https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
               <Card btnText='Loafers' childClass='pt-0' imgClass='h-100' img='https://images.unsplash.com/photo-1615979474401-8a6a344de5bd?q=80&w=2962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
               <Card btnText='Sneakers' childClass='pt-0' imgClass='h-100' img='https://images.unsplash.com/photo-1518894781321-630e638d0742?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
               <Card btnText='Running' childClass='pt-0' imgClass='h-100' img='https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
         </div>
      </div>
   );
}