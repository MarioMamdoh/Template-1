"use strict";
const allShowText = document.querySelectorAll("#pricing .work-container .box .show");
const AllTexts = document.querySelectorAll("#pricing .work-container .box .footer p");
const upBtn = document.querySelector(".up-btn");
const arrayTexts = Array.from(AllTexts);
const allBoxes = document.querySelectorAll("#blog .testimoials-container .boxes-container .boxes .box");
const listsOfBoxes = document.querySelectorAll("#blog .testimoials-container .lists-container .list .img");
const leftArrow = document.querySelector("#blog .testimoials-container .lists-container .left-arrow");
const rightArrow = document.querySelector("#blog .testimoials-container .lists-container .right-arrow");
const burrgerList = document.querySelector("header .nav-list .spans");
const ulNavList = document.querySelector("header .nav-list ul");
burrgerList === null || burrgerList === void 0 ? void 0 : burrgerList.addEventListener("click", () => {
    if (ulNavList === null || ulNavList === void 0 ? void 0 : ulNavList.classList.contains("max-lg:hidden")) {
        ulNavList.classList.replace("max-lg:hidden", "max-lg:flex-col");
    }
    else {
        ulNavList === null || ulNavList === void 0 ? void 0 : ulNavList.classList.replace("max-lg:flex-col", "max-lg:hidden");
    }
});
let currentSlide = 0;
function handleTextProcess() {
    allShowText.forEach((showIcon, index) => {
        showIcon.addEventListener("click", () => {
            var _a, _b;
            if (arrayTexts[index].classList.contains("hidden")) {
                showIcon.innerHTML = "-";
                arrayTexts[index].classList.remove("hidden");
                (_a = document
                    .querySelectorAll("#pricing .work-container .box")[index]) === null || _a === void 0 ? void 0 : _a.classList.add("active");
            }
            else {
                arrayTexts[index].classList.add("hidden");
                (_b = document
                    .querySelectorAll("#pricing .work-container .box")[index]) === null || _b === void 0 ? void 0 : _b.classList.remove("active");
                showIcon.innerHTML = "+";
            }
        });
    });
}
handleTextProcess();
window.onscroll = () => {
    window.scrollY >= 1000
        ? upBtn === null || upBtn === void 0 ? void 0 : upBtn.classList.remove("hidden")
        : upBtn === null || upBtn === void 0 ? void 0 : upBtn.classList.add("hidden");
};
upBtn === null || upBtn === void 0 ? void 0 : upBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
function handleSlide() {
    handleListIcons();
    handleRightArrow();
    handleLeftArrow();
}
handleSlide();
function handleListIcons() {
    listsOfBoxes === null || listsOfBoxes === void 0 ? void 0 : listsOfBoxes.forEach((list, listIndex) => {
        list.addEventListener("click", () => {
            listsOfBoxes.forEach((list) => list.classList.remove("active"));
            currentSlide = listIndex;
            list.classList.add("active");
            handleBox();
        });
    });
}
function handleRightArrow() {
    rightArrow === null || rightArrow === void 0 ? void 0 : rightArrow.addEventListener("click", function () {
        if (currentSlide >= listsOfBoxes.length - 1) {
            return false;
        }
        else {
            listsOfBoxes.forEach((list) => list.classList.remove("active"));
            currentSlide++;
            listsOfBoxes[currentSlide].classList.add("active");
            handleBox();
        }
        return;
    });
}
function handleLeftArrow() {
    leftArrow === null || leftArrow === void 0 ? void 0 : leftArrow.addEventListener("click", function () {
        if (currentSlide <= 0) {
            return false;
        }
        else {
            listsOfBoxes.forEach((list) => list.classList.remove("active"));
            currentSlide--;
            listsOfBoxes[currentSlide].classList.add("active");
            handleBox();
        }
        return;
    });
}
function handleBox() {
    allBoxes.forEach((box, boxIndex) => {
        box.className = "box";
        box.classList.add(`or-${boxIndex + 1 - currentSlide}`);
        currentSlide === 0
            ? leftArrow === null || leftArrow === void 0 ? void 0 : leftArrow.classList.add("disabled")
            : leftArrow === null || leftArrow === void 0 ? void 0 : leftArrow.classList.remove("disabled");
        currentSlide >= listsOfBoxes.length - 1
            ? rightArrow === null || rightArrow === void 0 ? void 0 : rightArrow.classList.add("disabled")
            : rightArrow === null || rightArrow === void 0 ? void 0 : rightArrow.classList.remove("disabled");
    });
}
//# sourceMappingURL=Main.js.map