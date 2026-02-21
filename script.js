// FAQ аккордеон
function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const isOpen = answer.classList.contains('open');
    document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('active'));
    if (!isOpen) {
        answer.classList.add('open');
        button.classList.add('active');
    }
}

// Анимация появления элементов
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.08 });

document.querySelectorAll(
    '.belief-card, .steps-card, .feature-card, .pricing-card, .howto-step, .faq-item'
).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    observer.observe(el);
});

// Анимация дыхательного цикла
const breathNums = document.querySelectorAll('.breath-num');
const durations = [2000, 8000, 4000];
let phase = 0;

function animateBreath() {
    breathNums.forEach((n, i) => {
        n.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
        n.style.transform = i === phase ? 'scale(1.25)' : 'scale(1)';
        n.style.opacity = i === phase ? '1' : '0.5';
    });
    setTimeout(() => {
        phase = (phase + 1) % 3;
        animateBreath();
    }, durations[phase]);
}
animateBreath();