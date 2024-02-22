import WelcomeCard from "../fragments/WelcomeCard";

export default function Welcome(){
   return(
      <div className='Welcome text-center' style={{ }}>
         <h1>YOU ARE THE BOSS NOW!</h1>
         <p>Rasakan pengalaman baru anda menjadi boss muda yang berkarakter</p>
         <div className='d-flex gap-2'>
            <WelcomeCard title='Boots' desc='' img='https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <WelcomeCard title='Loafers' desc='' img='https://images.unsplash.com/photo-1615979474401-8a6a344de5bd?q=80&w=2962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <WelcomeCard title='Sneakers' desc='' img='https://images.unsplash.com/photo-1518894781321-630e638d0742?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <WelcomeCard title='Running' desc='' img='https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            
         </div>
      </div>
   );
}