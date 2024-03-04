import Hero from "../layouts/Hero";
import Welcome from "../layouts/Welcome";
import UniqueValue from "../layouts/UniqueValue";
import Offering from "../layouts/Offering";
import Review from "../layouts/Review";
import Partner from "../layouts/Partner";
import Footer from "../layouts/Footer";

export default function LandingPage(){

   return(
      <div className='Landing-page'>
         <Hero /> {/* navbar */}
         <div className='container'>
            <Welcome />
            <UniqueValue/>
            <Offering />
            <Review />
            <Partner />
         </div>
         <Footer />
      </div>
   );
}
