// Регистрация
document.getElementById("register-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    const email = prompt("Введите email:");
    const password = prompt("Введите пароль:");
    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Регистрация успешна!");
});

// Вход
document.getElementById("login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.querySelector("input[type='email']").value;
    const password = e.target.querySelector("input[type='password']").value;
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
        alert("Добро пожаловать!");
        window.location.href = "index.html";
    } else {
        alert("Неверный email или пароль!");
    }
});