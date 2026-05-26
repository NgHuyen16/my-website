const actionToastEl = document.getElementById('actionToast');
const contactForm = document.getElementById('contactForm');
const heroContactBtn = document.getElementById('heroContactBtn');
const toast = actionToastEl ? new bootstrap.Toast(actionToastEl, { delay: 3000 }) : null;

if (heroContactBtn) {
    heroContactBtn.addEventListener('click', () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        toast?.show();
        contactForm.reset();
    });
}

const productButtons = document.querySelectorAll('.product-action');
productButtons.forEach(button => {
    button.addEventListener('click', () => {
        toast?.show();
    });
});
