import HeroTitle from "../fragments/HeroTitle";
import Navbar from "../fragments/Navbar";

export default function Hero(){
   return(
      <div className='Hero'>
         <Navbar />
         <HeroTitle />
      </div>
   );
}