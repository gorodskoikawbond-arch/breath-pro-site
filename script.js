// Частицы фона
function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (8 + Math.random() * 12) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        p.style.width = p.style.height = (1 + Math.random() * 2) + 'px';
        p.style.opacity = (0.2 + Math.random() * 0.4).toString();
        container.appendChild(p);
    }
}
createParticles();

// FAQ
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

// Анимация появления
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.08 });

document.querySelectorAll(
    '.legend-card, .step-card, .progress-table, .feature-row, .price-card, .how-step, .faq-item'
).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Дыхательная анимация ритма
const numbers = document.querySelectorAll('.rhythm-number');
let phase = 0;
const phases = ['вдох', 'задержка', 'выдох'];
const durations = [2000, 4000, 2000];

function animateBreath() {
    numbers.forEach((n, i) => {
        n.style.transform = i === phase ? 'scale(1.3)' : 'scale(1)';
        n.style.transition = 'transform 0.5s ease';
    });
    setTimeout(() => {
        phase = (phase + 1) % 3;
        animateBreath();
    }, durations[phase]);
}
animateBreath();