import HeaderH1 from "../elements/HeaderH1";
import Card from "../fragments/Card";

export default function Partner(){
   const title = 'MEET OUR PARTNERS';

   const partner = [
      {
         partnerIcon : 'https://down-id.img.susercontent.com/file/a1eeec26b4ee0b9ce69dfe7a57dc3e93',
         partnerName: 'Pertamina',
      },
      {
         partnerIcon : 'https://down-id.img.susercontent.com/file/a1eeec26b4ee0b9ce69dfe7a57dc3e93',
         partnerName: 'Pertamina',
      },
      {
         partnerIcon : 'https://down-id.img.susercontent.com/file/a1eeec26b4ee0b9ce69dfe7a57dc3e93',
         partnerName: 'Pertamina',
      },
      {
         partnerIcon : 'https://down-id.img.susercontent.com/file/a1eeec26b4ee0b9ce69dfe7a57dc3e93',
         partnerName: 'Pertamina',
      },
      {
         partnerIcon : 'https://down-id.img.susercontent.com/file/a1eeec26b4ee0b9ce69dfe7a57dc3e93',
         partnerName: 'Pertamina',
      },
      {
         partnerIcon : 'https://down-id.img.susercontent.com/file/a1eeec26b4ee0b9ce69dfe7a57dc3e93',
         partnerName: 'Pertamina',
      },
      {
         partnerIcon : 'https://down-id.img.susercontent.com/file/a1eeec26b4ee0b9ce69dfe7a57dc3e93',
         partnerName: 'Pertamina',
      },
      {
         partnerIcon : 'https://down-id.img.susercontent.com/file/a1eeec26b4ee0b9ce69dfe7a57dc3e93',
         partnerName: 'Pertamina',
      },
      {
         partnerIcon : 'https://down-id.img.susercontent.com/file/a1eeec26b4ee0b9ce69dfe7a57dc3e93',
         partnerName: 'Pertamina',
      },
   ]

   const partnerItem = partner.map((arr)=>(
      <img className='col-8 col-md-5 col-lg-3 gap-2' src={ arr.partnerIcon } alt={ arr.partnerName }></img>
   ));

   return(
      <div className="Partner text-center row align-items-center justify-content-center">
         <HeaderH1 title={ title }/>
         <div className='rowtext-center justify-content-center'>
            { partnerItem }
         </div>
      </div>
   );
}