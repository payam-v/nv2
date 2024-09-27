// JavaScript for Novel Vibrations website

document.addEventListener('DOMContentLoaded', function() {
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (isValid) {
                alert('Thank you for your message. We will get back to you soon!');
                form.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Gallery image modal
    const galleryImages = document.querySelectorAll('.gallery-image');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            modal.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
            modal.style.display = 'flex';
        });
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Responsive navigation
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.setAttribute('aria-label', 'Toggle menu');
    
    const nav = document.querySelector('nav');
    nav.parentNode.insertBefore(menuToggle, nav);

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('show');
        }
    });
});
