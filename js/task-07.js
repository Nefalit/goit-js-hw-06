const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", (ev) => {
  textEl.style.fontSize = `${ev.currentTarget.value}px`;
});
