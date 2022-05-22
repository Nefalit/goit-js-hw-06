const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (ev) => {
    outputEl.textContent = ev.currentTarget.value
    if (ev.currentTarget.value === "") {
        outputEl.textContent = "Anonymous";
    }
});