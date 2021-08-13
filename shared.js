let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.mobile-nav');
let selectPlanButtons = document.querySelectorAll('.plan button');
let toggelButton =document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');


//console.dir(backdrop);
for(let i = 0; i < selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click',function(){
        //modal.style.display = 'block';
        //backdrop.style.display = 'block';
        //modal.className = 'open'; // this overwrite the complete class list
        modal.classList.add ('open');
        backdrop.classList.add('open');
    })
}

backdrop.addEventListener("click",function(){
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove ('open');
    closeModal();
});

if(modalNoButton){
    modalNoButton.addEventListener("click", closeModal);
}

function closeModal(){
   //backdrop.style.display = "none";
   //modal.style.display = "none";
   if(modal){
    modal.classList.remove ('open');
   }
   backdrop.classList.remove ('open');
}  
  
toggelButton.addEventListener('click',function(){
    //   mobileNav.style.display = 'block';
    //   backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});