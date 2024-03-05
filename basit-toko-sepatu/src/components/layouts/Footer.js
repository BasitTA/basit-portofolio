import FooterItems from "../fragments/FooterItems";

export default function Footer(){

   const dataContact = {
      title : 'Contact Us',
      item :[
         {
            icon : 'fa-solid fa-location-dot',
            detail : 'Jl. Fatmawati , Jakarta Selatan'
         },
         {
            icon : 'fa-brands fa-whatsapp',
            detail : '0812-0000-9999'
         },
         {
            icon : 'fa-brands fa-whatsapp',
            detail : '0899-1111-9999'
         },
         {
            icon : 'fa-solid fa-envelope',
            detail : 'boss@store.com'
         },
      ]
   }
   
   const dataCategory = {
      title : 'Category',
      item :[
         { 
            // icon : 'fa-solid fa-shoe-prints',
            detail : 'Boots'
         }, 
         {  
            // icon : 'fa-solid fa-shoe-prints',
            detail : 'Loafers' 
         }, 
         {  
            icon : 'fa-solid fa-star',
            detail : 'Sneakers' 
         }, 
         {  
            // icon : 'fa-solid fa-shoe-prints',
            detail : 'Running' 
         }, 
      ]
   }
   
   const dataSocialMedia = {
      title : 'Social Media',
      item :[
         {
            icon : 'fa-brands fa-instagram',
            detail : 'BOSS_STORE'
         },
         {
            icon : 'fa-brands fa-tiktok',
            detail : 'BOSS_STORE'
         },
         {
            icon : 'fa-brands fa-facebook',
            detail : 'BOSS_STORE'
         },
         {
            icon : 'fa-brands fa-youtube',
            detail : 'BOSS_STORE'
         },
      ]
   }

   let contact, category, socialMedia = '';

   for(let i = 0; i < 3; i++){
      contact = <FooterItems title={ dataContact.title } item={ dataContact.item }/>
      category = <FooterItems title={ dataCategory.title } item={ dataCategory.item }/>
      socialMedia = <FooterItems title={ dataSocialMedia.title } item={ dataSocialMedia.item }/>
   }

   return(
      <div className='Footer row justify-content-center text-center align-items-center mt-3 bg-dark'>
         <div className='row justify-content-center text-center'>
            { contact }
            { category }
            { socialMedia }
         </div>
         <div><span>&#169;</span> BossStore.com</div>
      </div>
   );
}