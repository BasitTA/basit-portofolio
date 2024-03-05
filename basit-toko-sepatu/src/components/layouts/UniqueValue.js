import HeaderH1 from "../elements/HeaderH1";
import Card from "../fragments/Card";

export default function UniqueValue(){


   return(
      <div id="unique-value" className='Unique-value text-center row align-items-center justify-content-center min-vh-50 pt-5'>
         <div className=''>
            <HeaderH1 title='WHY BOSS STORE?' h1Class='mt-3 mb-5 pt-5' />
            <div className='d-flex flex-wrap gap-2 justify-content-center p-0 m-0'>
               <Card title='Local Brand' desc='Mengutamakan kemajuan perekonomian Indonesia' icon='fa-solid fa-location-dot'/>
               <Card title='Kualitas' desc='Terbuat dari materi berkualitas tinggi' icon='fa-solid fa-medal'/>
               <Card title='Service' desc='Pelayanan terbaik dan jaminan kenyamanan berbelanja' icon='fa-solid fa-handshake-angle'/>
               <Card title='Cepat' desc='Pengiriman secepat kilat' icon='fa-solid fa-truck-fast'/>
               <Card title='Garansi' desc='Bergaransi 1 Tahun Pemakaian' icon='fa-solid fa-award'/>
            </div>
         </div>
      </div>
   );
}