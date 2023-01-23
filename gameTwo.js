let showName;
let welcomeblock=document.querySelector('.welc');
let welcparagraph=document.querySelector('.welcomeP');
let welh =document.querySelector('.welh');
let rolesP = document.querySelector('.roles')
if(localStorage.length >0){
    // userName.value = localStorage.getItem('namee');
    // welh.innerHTML = userName.value;
    showName = localStorage.getItem('namee');
    welh.textContent = 'Welcome ' + showName;
     welcomeblock.style.background = "white";
 welcomeblock.style.width = '450px';
 welcomeblock.style.height = '250px';
 welcomeblock.style.margin = 'auto';
 welcomeblock.style.textAlign = 'center';
       welcparagraph.textContent = 'We hope you enjoy our game';
    rolesP.textContent = 'To win, you should kill 25(black and white) birds in specified time'
}

//  document.body.innerHTML = welcomeblock;

