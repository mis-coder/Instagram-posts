//selecting elements
const randomBtn = document.querySelector('.random-color-btn');
const colorBgDiv = document.querySelector('.random-color-div:first-of-type');
const colorNameDiv = document.querySelector('.random-color-div:nth-child(2)');
const colorName = document.querySelector('#random-color-name');

//declare variables
let red, green, blue;

//function to generate a random number and use it as a value for r,g,b each
function generateRandomColor(){
       return Math.floor(Math.random() * 255);
   }

//function that converts rgb value to hex value
function rgbTohex(r,g,b){
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
      
    if(r.length == 1)
        r = `0${r}`;
    if(g.length == 1)
        g = `0${g}`;
    if(b.length == 1)
        b = `0${b}`;
        
    return `#${r}${g}${b}`.toUpperCase();
}
 
//when user clicks on button handle that event
   randomBtn.addEventListener('click', () =>{
     red = generateRandomColor();
     blue = generateRandomColor();
     green = generateRandomColor(); 
    colorBgDiv.style.background = `rgb(${red},${green},${blue})`;
    colorName.innerText =  `rgb(${red},${green},${blue})`;
   });

//when user clicks on div that has name of color
  colorNameDiv.addEventListener('click', () =>{
      if(!colorName.classList.contains('hex')){
           colorName.classList.add('hex');
      colorName.innerText =  rgbTohex(red, green, blue);  
}   
   else{
           colorName.classList.remove('hex');
           colorName.innerText =  `rgb(${red},${green},${blue})`;
    }
   });
