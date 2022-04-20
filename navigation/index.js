let catebtn = document.querySelector('.category-btn');
let isClose = true;
catebtn.addEventListener('click',()=>{
     catelist = document.querySelector('.category-list');
     if(isClose){
          catelist.classList.remove('d-none');
     }else{
          catelist.classList.add('d-none');
     }
     isClose = !isClose;
});

document.querySelector('html').addEventListener('click',(event)=>{
     if(!event.path.includes(catebtn)){
          catelist = document.querySelector('.category-list');
          catelist.classList.add('d-none');
     }
})