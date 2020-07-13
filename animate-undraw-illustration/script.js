//select elements from dom
const colorBoxes = document.querySelectorAll(".color");
const animatedComponents = document.querySelectorAll(".component");

//put all the components of svg that you want to animate in the array
const components = ["#CapA", "#smallA", "#Vector_5", "#Vector_6", "#Vector_8"];

//restart the animation
function restartAnimation() {
  animatedComponents.forEach((component) => {
    component.style.animation = "none";
    setTimeout(() => {
      component.style.animation = "";
    }, 20);
  });
}

// change the color
function changeColor(array, color) {
  array.forEach((item) => {
    document.querySelector(item).style.fill = color;
  });
}

//speech recognition goes here
function speechListener() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  recognition.start();

  recognition.addEventListener("result", (e) => {
    const res = e.results[0][0].transcript;
    // console.log(res);
    document.querySelector(".mic p").innerText = res;
    changeColor(components, res);
    restartAnimation();
  });

  recognition.addEventListener("end", () => recognition.start());
}

//apply colors to the palette or the color boxes
colorBoxes.forEach(
  (box) => (box.style.backgroundColor = box.getAttribute("id"))
);

//click event handling
colorBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    const color = box.getAttribute("id");
    changeColor(components, color);
    restartAnimation();
  });
});

speechListener();
