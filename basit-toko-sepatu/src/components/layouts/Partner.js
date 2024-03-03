import HeaderH1 from "../elements/HeaderH1";
import Card from "../fragments/Card";

export default function Partner(){
   const title = 'MEET OUR PARTNERS';

   const partner = [
      {
         partnerIcon : 'https://down-id.img.susercontent.com/file/a1eeec26b4ee0b9ce69dfe7a57dc3e93',
         partnerName: 'Pertamina',
         partnerProfile: 'Pertamina adalah Perusahaan BUMN yang bergerak di bidang energi dan penyumbang deviden terbesar di Indonesia'
      },
      {
         partnerIcon : 'https://down-id.img.susercontent.com/file/a1eeec26b4ee0b9ce69dfe7a57dc3e93',
         partnerName: 'Pertamina',
         partnerProfile: 'Pertamina adalah Perusahaan BUMN yang bergerak di bidang energi dan penyumbang deviden terbesar di Indonesia'
      },
      {
         partnerIcon : 'https://down-id.img.susercontent.com/file/a1eeec26b4ee0b9ce69dfe7a57dc3e93',
         partnerName: 'Pertamina',
         partnerProfile: 'Pertamina adalah Perusahaan BUMN yang bergerak di bidang energi dan penyumbang deviden terbesar di Indonesia'
      },
   ]

   const addedClass = {
      root: 'mx-1',
   }

   const partnerItem = partner.map((arr)=>(
      <Card img={ arr.partnerIcon } title={ arr.partnerName } desc={ arr.partnerProfile } rootClass={ addedClass.root }/>
   ));

   return(
      <div className="Partner text-center row align-items-center justify-content-center">
         <HeaderH1 title={ title }/>
         <div className='row flex-nowrap overflow-auto text-center justify-content-center'>
            { partnerItem }
         </div>
      </div>
   );
}