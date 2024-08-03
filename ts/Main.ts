const allShowText = document.querySelectorAll(
  "#pricing .work-container .box .show"
);
const AllTexts = document.querySelectorAll(
  "#pricing .work-container .box .footer p"
);
const upBtn = document.querySelector(".up-btn");
const arrayTexts = Array.from(AllTexts);
const allBoxes = document.querySelectorAll(
  "#blog .testimoials-container .boxes-container .boxes .box"
);
const listsOfBoxes = document.querySelectorAll(
  "#blog .testimoials-container .lists-container .list .img"
);
const leftArrow = document.querySelector(
  "#blog .testimoials-container .lists-container .left-arrow"
);
const rightArrow = document.querySelector(
  "#blog .testimoials-container .lists-container .right-arrow"
);
const burrgerList = document.querySelector("header .nav-list .spans");
const ulNavList = document.querySelector("header .nav-list ul");
// hangdle Burgger Nav List
burrgerList?.addEventListener("click", () => {
  if (ulNavList?.classList.contains("max-lg:hidden")) {
    ulNavList.classList.replace("max-lg:hidden", "max-lg:flex-col");
  } else {
    ulNavList?.classList.replace("max-lg:flex-col", "max-lg:hidden");
  }
});

let currentSlide = 0;

// Handle processing the text
function handleTextProcess() {
  allShowText.forEach((showIcon, index) => {
    showIcon.addEventListener("click", () => {
      if (arrayTexts[index].classList.contains("hidden")) {
        showIcon.innerHTML = "-";
        arrayTexts[index].classList.remove("hidden");
        document
          .querySelectorAll("#pricing .work-container .box")
          [index]?.classList.add("active");
      } else {
        arrayTexts[index].classList.add("hidden");
        document
          .querySelectorAll("#pricing .work-container .box")
          [index]?.classList.remove("active");
        showIcon.innerHTML = "+";
      }
    });
  });
}
handleTextProcess();
// Handle Scroll To Up
window.onscroll = () => {
  window.scrollY >= 1000
    ? upBtn?.classList.remove("hidden")
    : upBtn?.classList.add("hidden");
};
upBtn?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// handle Testimonials Slider
function handleSlide() {
  handleListIcons();
  handleRightArrow();
  handleLeftArrow();
}
handleSlide();
// Handle List Icons
function handleListIcons() {
  listsOfBoxes?.forEach((list, listIndex) => {
    list.addEventListener("click", () => {
      listsOfBoxes.forEach((list) => list.classList.remove("active"));
      currentSlide = listIndex;
      list.classList.add("active");
      handleBox();
    });
  });
}
// Handle Right Arrow
function handleRightArrow() {
  rightArrow?.addEventListener("click", function () {
    if (currentSlide >= listsOfBoxes.length - 1) {
      return false;
    } else {
      listsOfBoxes.forEach((list) => list.classList.remove("active"));
      currentSlide++;
      listsOfBoxes[currentSlide].classList.add("active");
      handleBox();
    }
    return;
  });
}
// Handle Left Arrow
function handleLeftArrow() {
  leftArrow?.addEventListener("click", function () {
    if (currentSlide <= 0) {
      return false;
    } else {
      listsOfBoxes.forEach((list) => list.classList.remove("active"));
      currentSlide--;
      listsOfBoxes[currentSlide].classList.add("active");
      handleBox();
    }
    return;
  });
}
// Handle Boxes
function handleBox() {
  allBoxes.forEach((box, boxIndex) => {
    box.className = "box";
    box.classList.add(`or-${boxIndex + 1 - currentSlide}`);
    currentSlide === 0
      ? leftArrow?.classList.add("disabled")
      : leftArrow?.classList.remove("disabled");
    currentSlide >= listsOfBoxes.length - 1
      ? rightArrow?.classList.add("disabled")
      : rightArrow?.classList.remove("disabled");
  });
}
