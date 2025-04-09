document.addEventListener('DOMContentLoaded', function() {
    // Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navLinks.classList.remove('active');
            }
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                nombre: document.getElementById('nombre').value,
                email: document.getElementById('email').value,
                empresa: document.getElementById('empresa').value,
                mensaje: document.getElementById('mensaje').value
            };

            // Here you would typically send the form data to your server
            // For now, we'll just log it and show a success message
            console.log('Form Data:', formData);
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Scroll Animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Add initial styles for animations
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // Add animation to service cards
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.2}s`;
        observer.observe(card);
    });

    // Add animation to pricing cards
    document.querySelectorAll('.pricing-card').forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.2}s`;
        observer.observe(card);
    });

    // Add animation to portfolio items
    document.querySelectorAll('.portfolio-item').forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.6s ease-out ${index * 0.2}s`;
        observer.observe(item);
    });

    // Add animation to blog cards
    document.querySelectorAll('.blog-card').forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.2}s`;
        observer.observe(card);
    });
});
