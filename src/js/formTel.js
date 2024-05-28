document.addEventListener("DOMContentLoaded", function () {
    const submit = document.querySelector('.submit-tel');
    
    submit.addEventListener("click", function (event) {
        const tel = document.getElementById('usertel').value;
        
        if (!tel) {
            alert("Поле должно быть заполнено");
            event.preventDefault(); // Предотвращаем отправку формы
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
});
