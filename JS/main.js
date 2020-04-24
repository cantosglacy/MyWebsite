
const text = document.querySelector(".animate");
const strText = text.textContent; 
const splitText = strText.split("");
text.textContent= "";


for(let i=0; i< splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] +  "</span>";


}


let char = 0;

let timer = setInterval(appear, 50);


function appear() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fill');
    char++;

if (char === splitText.length){
    complete();
    return;
}
}

function complete (){
    clearInterval(timer);
    timer = null;
}





function scrollAppear(){
    let introText = document.querySelector('.title-delete');
    let introPosition = introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/4;
    if(introPosition < screenPosition){
        introText.classList.add('title-appear');
    }
}



window.addEventListener('scroll', scrollAppear);






/*
function boxAppear(){
    let introText = document.querySelector('#portfolio');
    let introPosition = introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/2;
    if(introPosition < screenPosition){
        introText.classList.add('box-appear');
    }
}*/


const gallery = document.querySelectorAll(".box-1");
function boxChange(){
    document.querySelectorAll(".box1").innerHTML = "text";
}

boxChange();