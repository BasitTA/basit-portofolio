import HeaderH1 from "../elements/HeaderH1";
import Card from "../fragments/Card";

export default function Partner(){
   const title = 'MEET OUR PARTNERS';

   const partner = [
      {
         id : 1,
         partnerIcon : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Logo-lippo.svg/1200px-Logo-lippo.svg.png',
         partnerName: 'Lippo Group',
      },
      {
         id : 2,
         partnerIcon : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Holcim_logo.svg/2560px-Holcim_logo.svg.png',
         partnerName: 'HOLCIM',
      },
      {
         id : 3,
         partnerIcon : 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/LogoMetroTVsince2010.svg/250px-LogoMetroTVsince2010.svg.png',
         partnerName: 'Metro TV',
      },
      {
         id : 4,
         partnerIcon : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/TvOne_2023.svg/1280px-TvOne_2023.svg.png',
         partnerName: 'TV ONE',
      },
      {
         id : 5,
         partnerIcon : 'https://png.pngtree.com/png-clipart/20221224/original/pngtree-bca-bank-logo-png-image_8801637.png',
         partnerName: 'BCA',
      },
      {
         id : 6,
         partnerIcon : 'https://i.pinimg.com/originals/2f/88/4b/2f884b66c1a53b93a9e4826e5f4c459d.png',
         partnerName: 'Garuda Indonesia',
      },
      {
         id : 7,
         partnerIcon : 'https://indonesiahannovermesse.id/assets/uploads/exhibitors/pt-pertamina.png',
         partnerName: 'Pertamina',
      },
      {
         id : 8,
         partnerIcon : 'https://www.zarla.com/images/zarla-sneakist-1x1-2400x2400-20211206-t8b9wmrc79hddgp8x7cw.png?crop=1:1,smart&width=250&dpr=2',
         partnerName: 'Sneakist',
      },
   ]

   const partnerItem = partner.map((arr)=>(
      <img className='col-4 col-sm-3 col-lg-2 mb-3 rounded h-100' key={ arr.id } src={ arr.partnerIcon } alt={ arr.partnerName }></img>
   ));

   return(
      <div id="partner" className="Partner text-center row align-items-center justify-content-center mb-5 py-5">
         <HeaderH1 title={ title } h1Class='mb-5'/>
         <div className='row text-center justify-content-center align-items-center'>
            { partnerItem }
         </div>
      </div>
   );
}