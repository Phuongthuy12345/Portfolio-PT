document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất.');
    this.reset();
});

const hero = document.querySelector('.hero');
if (hero && hero.dataset.background) {
    document.querySelector('.background-image').style.backgroundImage = `url('${hero.dataset.background}')`;
}