const inputEl = document.querySelector("#validation-input");
console.log(inputEl);

inputEl.addEventListener('blur', (ev) => {
    inputEl.textContent = ev.currentTarget.value;
    if (inputEl.textContent.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    }
    else if (
        inputEl.textContent.length !== Number(inputEl.dataset.length) &&
        inputEl.textContent !== ""
    ) {
      inputEl.classList.add("invalid");
      inputEl.classList.remove("valid");
    }
    else if (inputEl.textContent === "") {
      inputEl.classList.remove("invalid");
      inputEl.classList.remove("valid");
    }
})
