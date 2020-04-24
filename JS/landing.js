
function scrollAppear(){
    let introText = document.querySelector('.content');
    let introPosition = introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/2;
    if(introPosition < screenPosition){
        introText.classList.add('content-appear');
    }
}
window.addEventListener('scroll', scrollAppear);