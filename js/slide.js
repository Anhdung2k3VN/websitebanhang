const imPosition = document.querySelectorAll("#slider img");
const isContainer = document.querySelector(".aspect-ratio-169");
const dotsItem = document.querySelectorAll(".dot");
let index = 0;

imPosition.forEach((img, index) => {
  img.style.left = `${index * 100}%`;
});
addEventListenerToDots();

function imgSlide() {
  index++;
  if (index > imPosition.length - 1) {
    index = 0;
  }

  isContainer.style.left = "-" + index * 100 + "%";

  for (let i = 0; i < imPosition.length; i++) {
    if (i === index) {
      document.querySelectorAll(".dot")[i].classList.add("active");
    } else {
      document.querySelectorAll(".dot")[i].classList.remove("active");
    }
  }
}

function slideTo(index) {
  isContainer.style.left = "-" + index * 100 + "%";
}
function addEventListenerToDots() {
  dotsItem.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      slideTo(index);
    });
  });
}
setInterval(imgSlide, 2000);
