//getting the position of our cursor on html element
const pos = document.documentElement;

/*---------when mouse moves  setting some property in dom------*/
pos.addEventListener('mousemove', e=>{
  pos.style.setProperty('--x', e.clientX + "px");
  pos.style.setProperty('--y', e.clientY + "px");
});




