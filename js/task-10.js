const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", () => createBox(inputEl.value));
destroyBtnEl.addEventListener("click", destroyBox);

function createBox(value) {
  const allBox = boxesEl.querySelectorAll("div").length;
  const startSize = allBox * 10 + 30;

  for (let index = 0; index < value; index++) {
    const divBox = document.createElement("div");
    divBox.style.backgroundColor = `${getRandomHexColor()}`;
    divBox.style.width = `${startSize + 10 * index}px`;
    divBox.style.height = `${startSize + 10 * index}px`;
    boxesEl.append(divBox);
  }

}

function destroyBox() {
  boxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
