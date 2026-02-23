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
    '.belief-card, .level-card, .pro-item, .pricing-card, .howto-step, .faq-item, .warning-card'
).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    observer.observe(el);
});

// Анимация дыхания
const breathNums = document.querySelectorAll('.breath-num');
const durations = [2000, 8000, 4000];
let phase = 0;

function animateBreath() {
    breathNums.forEach((n, i) => {
        n.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
        n.style.transform = i === phase ? 'scale(1.25)' : 'scale(1)';
        n.style.opacity = i === phase ? '1' : '0.45';
    });
    setTimeout(() => {
        phase = (phase + 1) % 3;
        animateBreath();
    }, durations[phase]);
}
animateBreath();

// СЛАЙДЕР СКРИНШОТОВ
var sliderCurrent = 0;
var sliderMax = 3;
var GAP = 20;

function initSlider() {
    var viewport = document.querySelector('.screens-viewport');
    var grid = document.getElementById('screensGrid');
    var items = grid.querySelectorAll('.screen-item');
    if (!viewport || !grid || items.length === 0) return;

    // Ширина одного item = (ширина viewport - 2 gap) / 3.3
    var viewW = viewport.offsetWidth;
    var itemW = (viewW - GAP * 2) / 3.3;

    items.forEach(function(item) {
        item.style.flex = '0 0 ' + itemW + 'px';
        item.style.width = itemW + 'px';
    });

    grid.style.gap = GAP + 'px';

    document.getElementById('prevBtn').disabled = true;
    document.getElementById('nextBtn').disabled = false;
}

function slideScreens(dir) {
    sliderCurrent += dir;
    if (sliderCurrent < 0) sliderCurrent = 0;
    if (sliderCurrent > sliderMax) sliderCurrent = sliderMax;

    var grid = document.getElementById('screensGrid');
    var item = grid.querySelectorAll('.screen-item')[0];
    var itemW = item.offsetWidth + GAP;

    grid.style.transform = 'translateX(-' + (sliderCurrent * itemW) + 'px)';

    document.getElementById('prevBtn').disabled = (sliderCurrent === 0);
    document.getElementById('nextBtn').disabled = (sliderCurrent === sliderMax);
}

window.addEventListener('load', initSlider);
window.addEventListener('resize', initSlider);
