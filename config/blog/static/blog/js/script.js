document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для кнопок пагинации
    document.querySelector('.prev-btn').addEventListener('click', function() {
        console.log('Нажата кнопка "Назад"');
        // Здесь логика перехода на предыдущую страницу
    });

    document.querySelectorAll('.page-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Нажата кнопка страницы', this.textContent);
            // Логика перехода на конкретную страницу
        });
    });

    document.querySelector('.next-btn').addEventListener('click', function() {
        console.log('Нажата кнопка "Вперед"');
        // Логика перехода на следующую страницу
    });

    // Обработчик для кнопок покупки
    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Товар добавлен в корзину!');
        });
    });

    // Обработчик сортировки
    document.querySelector('.sorting select').addEventListener('change', function() {
        console.log('Выбрана сортировка:', this.value);
        // Логика сортировки товаров
    });
});