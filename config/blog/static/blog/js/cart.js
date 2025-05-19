// Функция обновления корзины
function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    let totalCount = 0;
    let totalPrice = 0;
  
    // Считаем общее количество и сумму
    Object.values(cart).forEach(item => {
      totalCount += item.quantity;
      totalPrice += item.price * item.quantity;
    });
  
    // Обновляем отображение
    document.querySelector('.cart-counter').textContent = totalCount;
    document.querySelector('.cart-total').textContent = `$${totalPrice.toFixed(2)}`;
  }
  
  // Инициализация при загрузке
  document.addEventListener('DOMContentLoaded', function() {
    updateCartDisplay();
    
    // Клик по корзине
    document.getElementById('miniCart').addEventListener('click', function() {
      window.location.href = '/cart/'; // Или другая логика
    });
  });
  
  // Вызывайте эту функцию при изменении корзины