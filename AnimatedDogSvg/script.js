// select elements
const moveTailbtn = document.getElementById('move-tail');
const tail = document.getElementById('tail');

const rollEyesbtn = document.getElementById('roll-eyes');
const rightEye = document.getElementById('righteyeball');
const leftEye = document.getElementById('lefteyeball');

const moveRearbtn = document.getElementById('move-rightear');
const rightEar = document.getElementById('RightEar');

const moveLearbtn = document.getElementById('move-leftear');
const leftEar = document.getElementById('LeftEar');

const rollbodybtn = document.getElementById('roll-body');
const dogBody = document.getElementById('body');




/*--------------- Event listeners--------------------------*/

// move/stop the tail
moveTailbtn.addEventListener('click', ()=>{
    tail.classList.toggle('move-tail');
});

//roll/stop rolling eyes
rollEyesbtn.addEventListener('click',() =>{
   rightEye.classList.toggle('move-right-eye');
   leftEye.classList.toggle('move-left-eye');
});

// move/stop moving right ear
moveRearbtn.addEventListener('click', () =>{
   rightEar.classList.toggle('move-right-ear');
});

// move/stop moving left ear
moveLearbtn.addEventListener('click', () =>{
    leftEar.classList.toggle('move-left-ear');
 });

//  roll or stop rolling the dog's body
 rollbodybtn.addEventListener('click',() =>{
     dogBody.classList.toggle('roll-body');
      if(!(dogBody.classList).contains('roll-body')){
          tail.style.opacity = 1;
      }
      else{
          tail.style.opacity = 0;
      }
 });