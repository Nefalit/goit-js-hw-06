const loginFormEl = document.querySelector(".login-form");
loginFormEl.addEventListener('submit', (ev) => {
    ev.preventDefault();
    if (
      ev.currentTarget.elements.email.value === "" ||
      ev.currentTarget.elements.password.value === ""
    ) {
      alert("Все поля должны быть заполнены");
    }
    else {
        const dataUser = {
          email: ev.currentTarget.elements.email.value,
          password: ev.currentTarget.elements.password.value,
        };
      console.log(dataUser);
       ev.currentTarget.reset();
    }
})
