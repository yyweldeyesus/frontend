// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const nav = document.querySelector('.main-nav');
    const menuToggle = document.createElement('div');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '☰';
    document.body.insertBefore(menuToggle, nav);

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Job Filter
    const searchForm = document.querySelector('.search-form');
    const jobItems = document.querySelectorAll('.job-item');

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const keyword = this.querySelector('[name="keywords"]').value.toLowerCase();
        const location = this.querySelector('[name="location"]').value.toLowerCase();
        const company = this.querySelector('[name="company"]').value.toLowerCase();

        jobItems.forEach(job => {
            const jobText = job.textContent.toLowerCase();
            const matches = 
                (keyword === '' || jobText.includes(keyword)) &&
                (location === '' || jobText.includes(location)) &&
                (company === '' || jobText.includes(company));
            
            job.style.display = matches ? 'block' : 'none';
        });
    });

    // Sticky Header
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        header.style.position = window.scrollY > 100 ? 'sticky' : 'static';
        header.style.top = window.scrollY > 100 ? '0' : '';
        header.style.zIndex = window.scrollY > 100 ? '1000' : '';
    });

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        if (validateEmail(email)) {
            alert('Thank you for subscribing!');
            this.reset();
        } else {
            alert('Please enter a valid email address');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});