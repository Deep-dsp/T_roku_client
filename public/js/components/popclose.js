{/* <section class="pop-box">
        <div class="close-button"></div> */}
const pop = document.querySelector('.pop-box');
const close = pop.querySelector('.close-button p');

close.addEventListener('click', ()=>{
    pop.classList.add('pop-close');
});

