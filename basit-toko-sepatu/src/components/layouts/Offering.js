import Description from "../elements/Description";
import HeaderH1 from "../elements/HeaderH1";
import HeaderH4 from "../elements/HeaderH4";
import ImgProduct from "../fragments/ImgProduct";

export default function Offering(){
   const desc = 'Melangkah dalam kenyamanan berjalan dan bantalan terbaik dilengkapi upper mesh atletis yang sejuk dengan panel tumit yang eksklusif, sol dalam yang ringan.';

   const feature = ['Light', 'Anti Slip', 'Lembut']

   const imgSecondary = [ 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']

   return(
      <div id="offer" className='Offering text-center row align-items-center min-vh-100'>
         <div>
            <HeaderH1 title='DEAL TODAY'/>
            <HeaderH4 title='Limited Offer 70% Off Until Tomorrow' h4Class='text-danger'/>
            <Description desc='Spesial For SNEAKERS Only' />
            <ImgProduct title='Puma T-180 Speed' desc={ desc } feature={ feature } imgSecondary={ imgSecondary } img='https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
         </div>
      </div>
   );
}