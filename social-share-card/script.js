const shareBtn = document.getElementById("share-btn");
const followBtn = document.getElementById("follow-btn");
const card = document.getElementById("card");
const shareIconsElement = document.getElementById("share-icons");
const shareIcons = document.querySelectorAll(".share-icons div");
const cardItems = document.querySelectorAll(".card > *");
const sharedElement = document.querySelector(".shared-element");

shareBtn.addEventListener("click", () => {
  if (!shareBtn.classList.contains("clicked")) {
    shareBtn.classList.add("clicked");
    followBtn.style.display = "none";
    card.style.height = "75%";
    setTimeout(() => {
      shareIconsElement.style.display = "flex";
    }, 600);
  } else {
    shareBtn.classList.remove("clicked");
    followBtn.style.display = "flex";
    card.style.height = "100%";
    shareIconsElement.style.display = "none";
  }
});

shareIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("clickShare");
    setTimeout(() => {
      shareIconsElement.style.display = "none";
      card.style.height = "0%";
      card.style.background = "transparent";
      cardItems.forEach((item) => {
        item.style.display = "none";
      });
      setTimeout(() => {
        sharedElement.style.opacity = "1";
      }, 600);
    }, 200);
  });
});
