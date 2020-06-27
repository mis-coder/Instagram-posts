// select elements
const draggableEls = document.querySelectorAll('.circle');
const droppableEls = document.querySelectorAll('.circle-space');



//FUNCTIONS
function dragStart(e){
    e.dataTransfer.setData("text",e.target.id);
}

function dragEnter(e){
    e.target.classList.add('droppable-hover');

}

function dragLeave(e){
    e.target.classList.remove('droppable-hover');
}

function dragOver(e){
    if(!e.target.classList.contains('dropped')){
   e.preventDefault();
    }
}

function drop(e){
    e.preventDefault();
    e.target.classList.remove('droppable-hover');
    const data = e.dataTransfer.getData("text");
    if(e.target.classList.contains(`${data}`)){
        const draggableEl = document.getElementById(data);
        e.target.classList.add('dropped');
        draggableEl.classList.add('dragged');
        e.target.classList.remove('droppable-hover');
        draggableEl.setAttribute("draggable","false");
        e.target.style.backgroundColor = data;
    }
 }
 



// EVENT LISTENERS
draggableEls.forEach(element =>{
    element.addEventListener('dragstart',dragStart);
  });


droppableEls.forEach(element => {
  element.addEventListener('dragenter',dragEnter);
  element.addEventListener('dragleave',dragLeave);
    element.addEventListener('dragover',dragOver);
    element.addEventListener('drop',drop);

});

