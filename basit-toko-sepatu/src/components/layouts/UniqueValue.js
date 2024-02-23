import HeaderH1 from "../elements/HeaderH1";
import Card from "../fragments/Card";

export default function UniqueValue(){


   return(
      <div className='Unique-value text-center row align-items-center'>
         <div >
            <HeaderH1 title='WHY BOSS STORE?'/>
            <div className='d-flex flex-wrap gap-2 justify-content-center'>
               <Card title='Local Brand' desc='Mengutamakan kemajuan perekonomian Indonesia' icon='fa-solid fa-location-dot'/>
               <Card title='Kualitas' desc='Terbuat dari materi berkualitas tinggi' icon='fa-solid fa-medal'/>
               <Card title='Service' desc='Pelayanan terbaik dan jaminan kenyamanan berbelanja' icon='fa-solid fa-handshake-angle'/>
               <Card title='Local Brand' desc='Mengutamakan kemajuan perekonomian Indonesia' icon='fa-solid fa-location-dot'/>
               <Card title='Kualitas' desc='Terbuat dari materi berkualitas tinggi' icon='fa-solid fa-medal'/>
               <Card title='Service' desc='Pelayanan terbaik dan jaminan kenyamanan berbelanja' icon='fa-solid fa-handshake-angle'/>
            </div>
         </div>
      </div>
   );
}