// bikin object utk simpan nama aktivitas & tanggal selesai
const activity = {
   activityName: activityName = [],
   dueDate: dueDate = []
};

 // ambil input nama & tanggal dari form
const nameInput = document.querySelector('#activityName').value;
const dateInput= document.querySelector('#dueDate').value;   

// pesan jika data kosong
const message = 'Pastikan data sudah terisi semua';

// konten aktivitas
let content='';

// menambahkan aktivitas
function addActivity(){
   if(nameInput && dateInput){
      activity.activityName.push(nameInput);
      activity.dueDate.push(dateInput);
      updateInterface();
   }else{
      console.log(message);
   }
}

function updateInterface(){
   // pengulangan dalam object
   activity.activityName.forEach((value, index) => {
      content += `
         <div class="content" id="${index}">
         <p class="activity-name">${activity.activityName[index]}</p>
         <p class="activity-due-date">${activity.dueDate[index]}</p>
         <button class="btn-remove" onclick="remove(${index})">Hapus</button>
         </div>
      `;
   });
   // tampilkan konten ke html
   document.querySelector('.main').innerHTML = content;
   // mengosongkan value dari konten
   content = '';
}

function remove(activityId){
   // hapus aktivitas dalam array
   activity.activityName.splice(activityId,1);
   activity.dueDate.splice(activityId,1);
   // hapus tampilan aktivitas
   document.getElementById(activityId).remove();
   
   // pengulangan dalam object
   activity.activityName.forEach((value, index) => {
      content += `
         <div class="content" id="${index}">
         <p class="activity-name">${activity.activityName[index]}</p>
         <p class="activity-due-date">${activity.dueDate[index]}</p>
         <button class="btn-remove" onclick="remove(${index})">Hapus</button>
         </div>
      `;
   });
   // tampilkan konten ke html
   document.querySelector('.main').innerHTML = content;
   // mengosongkan value dari konten
   content = '';
}