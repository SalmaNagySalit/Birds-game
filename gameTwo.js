let showName;
let welcomeblock=document.querySelector('.welc');
let welcparagraph=document.querySelector('.welcomeP');
let welh =document.querySelector('.welh');
let rolesP = document.querySelector('.roles')

let smallbird=0;
let bigbird=0;



let welcbox=document.querySelectorAll('.box')[0];
let scrbox=document.querySelectorAll('.box')[1];
let timelim=document.querySelectorAll('.box')[2];
let birdkill=document.querySelectorAll('.box')[3];


if(localStorage.length >0){
    // userName.value = localStorage.getItem('namee');
    // welh.innerHTML = userName.value;
 showName = localStorage.getItem('namee');
 welh.textContent = 'Welcome ' + showName;
 welcomeblock.style.background = "white";
 welcomeblock.style.width = '420px';
 welcomeblock.style.height = '220px';
 welcomeblock.style.margin = 'auto';
 welcomeblock.style.textAlign = 'center';
       welcparagraph.textContent = 'We hope you enjoy our game';
       
    rolesP.textContent = 'To win, you should kill 25(black and white) birds in specified time'
}


