// FAQ аккордеон
function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const isOpen = answer.classList.contains('open');

    // Закрываем все
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));

    // Открываем если было закрыто
    if (!isOpen) {
        answer.classList.add('open');
        button.classList.add('active');
    }
}

// Анимация появления при скролле
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.step, .faq-item, .price-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Трекинг клика по кнопке (опционально)
document.querySelectorAll('.buy-button').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Buy button clicked');
        // Сюда можно добавить аналитику
    });
});