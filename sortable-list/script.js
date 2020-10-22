const sortableList = document.querySelector("#sortable-list");
const draggables = document.querySelectorAll(".draggable");
const likeBtns = document.querySelectorAll(".like-btn");

new Sortable(sortableList, {
  handle: ".draggable",
  animation: 400,
});

likeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.contains("clicked")
      ? (btn.innerHTML = '<i class="material-icons">favorite_border</i>')
      : (btn.innerHTML = '<i class="material-icons">favorite</i>');
    btn.classList.toggle("clicked");
  });
});
