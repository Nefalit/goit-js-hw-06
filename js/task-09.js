const bodyEl = document.querySelector("body")
const colorChngBtnEl = document.querySelector(".change-color");
const colorSpanEl = document.querySelector(".color")

colorChngBtnEl.addEventListener("click", (ev) => {
bodyEl.style.backgroundColor = getRandomHexColor();
colorSpanEl.textContent = bodyEl.style.backgroundColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
