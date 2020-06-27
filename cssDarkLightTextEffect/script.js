const switchBtn = document.querySelector('.mode-toggle');
const modeTxt = document.querySelector('.mode-toggle p span');
const page = document.querySelector('.container');
const pointer = document.querySelector('.pointer');

//listen to click event and change the mode
switchBtn.addEventListener('click', ()=>{
    page.classList.toggle('dark-mode');
    modeTxt.innerText = modeTxt.innerText === 'LIGHT' ? 'DARK' : 'LIGHT';
});


//set left and top for the pointer
document.documentElement.addEventListener('mousemove', e => {
    pointer.style.left = `${e.pageX}px`;
    pointer.style.top = `${e.pageY}px`
});