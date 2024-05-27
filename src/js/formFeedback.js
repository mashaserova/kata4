document.addEventListener("DOMContentLoaded", function () {
    const submit = document.querySelector('.submit-feedback');
    submit.addEventListener("click", function (event) {
        const name = document.getElementById("username").value;
        const email = document.getElementById("useremail").value;
        const password = document.getElementById("userfeedback").value;
        const tel = document.getElementById('phone').value;
        if (!name || !email || !password) {
            alert("Все поля должны быть заполнены");
            event.preventDefault(); // Предотвращаем отправку формы
        } else if (!isValidEmail(email)) {
            alert("Введите корректный Email");
            event.preventDefault();
        } else if (!isValidPhone(tel)) {
            alert("Введите корректный номер телефона");
            event.preventDefault();
        }
    });

    function isValidPhone(phone) {
        // Регулярное выражение для проверки телефона
        const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        return phonePattern.test(phone);
    }
    function isValidEmail(email) {
        // Регулярное выражение для проверки email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
});
