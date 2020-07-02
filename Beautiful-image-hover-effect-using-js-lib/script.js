//selecting all the elements
const openBtn = document.querySelector('.menu-btn.open');
const closeBtn = document.querySelector('.menu-btn.close');
const navbar = document.querySelector('.navbar');
const topBtn = document.querySelector('.scroll-to-top');

//event listeners for opening and closing menu
openBtn.addEventListener('click', () =>{
     navbar.style.right = "0";
});

closeBtn.addEventListener('click', () =>{
    navbar.style.right = "-30rem";
});


//event listener for handling go to top 
window.addEventListener('scroll',() =>{
    if(document.documentElement.scrollTop > 50){
        topBtn.style.display ="block";
    }
    else{
        topBtn.style.display ="none";
    }
    
});

topBtn.addEventListener('click',() =>{
   document.documentElement.scrollTop = 0;
});


//create new instances for both divs of images
new hoverEffect({
    parent: document.querySelector('.image-div-1'),
    intensity: 0.9,
    image1: './images/image-2.jpg',
    image2: './images/image-1.jpg',
    displacementImage: './images/smoke-effect.png'
});

new hoverEffect({
    parent: document.querySelector('.image-div-2'),
    intensity: 0.3,
    image1:'./images/image-4.jpg',
    image2: './images/image-3.jpg',
    displacementImage: './images/water-texture-png.png'
});


