// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navigation scroll effect
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Waitlist form handling
const form = document.getElementById('waitlistForm');
const formSuccess = document.getElementById('formSuccess');

/*
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        company: document.getElementById('company').value,
        email: document.getElementById('email').value,
        clients: document.getElementById('clients').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };
    
    // Log to console (in production, this would be sent to a backend)
    console.log('Waitlist submission:', formData);
    
    // You can integrate with services like:
    // - Google Sheets API
    // - EmailJS
    // - Netlify Forms
    // - Firebase
    // - Or your own backend
    
    // Example EmailJS integration (commented out):
    /*
    emailjs.send('service_id', 'template_id', formData)
        .then(function(response) {
            showSuccess();
        }, function(error) {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again.');
        });
    * /
    
    // For now, just show success message
    showSuccess();
});
*/

function showSuccess() {
    // Hide form and show success message
    form.style.display = 'none';
    formSuccess.classList.add('show');
    
    // Optional: Reset form after a delay
    setTimeout(() => {
        form.reset();
        form.style.display = 'flex';
        formSuccess.classList.remove('show');
    }, 10000); // Reset after 10 seconds
}

// Add animation on scroll for feature cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe platform features
document.querySelectorAll('.platform-feature').forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateX(-20px)';
    feature.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(feature);
});

// Add subtle parallax effect to hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-bg');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Dynamic Year
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
