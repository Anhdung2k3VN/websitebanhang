//--------------------Home slide --------------------------

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

//-------------------- scroll--------------------------
window.addEventListener("scroll", function () {
  x = window.scrollY;
  if (x > 0) {
    document.querySelector("header").style.backgroundColor = "white";
    document.querySelector("header").style.boxShadow =
      "0 0 10px rgba(0, 0, 0, 0.1)";
    document.querySelector("header").style.transition = "0.5s";
  } else {
    document.querySelector("header").style.backgroundColor =
      "rgba(255, 255, 255, 0.3)";
    document.querySelector("header").style.boxShadow = "none";
  }
});

//--------------------Menu Slidebar cartegory--------------------------
const itemsliderbar = document.querySelectorAll(".cartegory-left-li");
itemsliderbar.forEach(function (menu, index) {
  menu.addEventListener("click", function () {
    menu.classList.toggle("block");
  });
});

//--------------------Product --------------------------

const gioithieu = document.querySelectorAll(".gioithieu");
const chitiet = document.querySelectorAll(".chitiet");
const baoquan = document.querySelectorAll(".baoquan");

function resetActiveStates() {
  gioithieu.forEach((item) => item.classList.remove("active"));
  chitiet.forEach((item) => item.classList.remove("active"));
  baoquan.forEach((item) => item.classList.remove("active"));
}

function resetDisplay() {
  document.querySelector(
    ".product-content-right-bottom-content-intro"
  ).style.display = "none";
  document.querySelector(
    ".product-content-right-bottom-content-detail"
  ).style.display = "none";
  document.querySelector(
    ".product-content-right-bottom-content-preserve"
  ).style.display = "none";
}

function setActiveDisplay(type) {
  resetDisplay();
  switch (type) {
    case "gioithieu":
      document.querySelector(
        ".product-content-right-bottom-content-intro"
      ).style.display = "block";
      break;
    case "chitiet":
      document.querySelector(
        ".product-content-right-bottom-content-detail"
      ).style.display = "block";
      break;
    case "baoquan":
      document.querySelector(
        ".product-content-right-bottom-content-preserve"
      ).style.display = "block";
      break;
  }
}

if (gioithieu.length) {
  gioithieu.forEach(function (item, index) {
    item.addEventListener("click", function () {
      resetActiveStates();
      item.classList.add("active");
      setActiveDisplay("gioithieu");
    });
  });
}

if (chitiet.length) {
  chitiet.forEach(function (item, index) {
    item.addEventListener("click", function () {
      resetActiveStates();
      item.classList.add("active");
      setActiveDisplay("chitiet");
    });
  });
}

if (baoquan.length) {
  baoquan.forEach(function (item, index) {
    item.addEventListener("click", function () {
      resetActiveStates();
      item.classList.add("active");
      setActiveDisplay("baoquan");
    });
  });
}
gioithieu[0].click();

//--------------------Product button show container--------------------------
const showContainerBtn = document.querySelector(
  ".product-content-right-bottom-content-big"
);
function showContainer() {
  showContainerBtn.classList.toggle("activeB");
}

//--------------------Product Big img--------------------------

const bigImg = document.querySelector(".product-content-left-big-img img");
const smallImgs = document.querySelectorAll(
  ".product-content-left-small-img img"
);

smallImgs.forEach((img) => {
  img.addEventListener("click", () => {
    bigImg.src = img.src;
  });
});
//--------------------test--------------------------
function chuyenTrang() {
  window.location.href = "http://127.0.0.1:5500/delivery.html";
}

function chuyenTrang1() {
  window.location.href = "http://127.0.0.1:5500/payment.html";
}
