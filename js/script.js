//--------------------Menu Slidebar cartegory--------------------------
const itemsliderbar = document.querySelectorAll(".cartegory-left-li");
itemsliderbar.forEach(function (menu, index) {
  menu.addEventListener("click", function () {
    menu.classList.toggle("block");
  });
});
//--------------------Product--------------------------

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

//--------------------Product button--------------------------
const buttonB = document.querySelectorAll(".product-content-right-bottom-top");
if (buttonB) {
  buttonB.addEventListener("click", function () {
    document
      .querySelector("product-content-right-bottom-content-big")
      .classList.toggle("activeB");
  });
}
