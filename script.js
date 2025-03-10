// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function () {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // Redirect Sign Up to login.html
    const signUpBtn = document.querySelector('.sign-up-btn'); // Fixed selector
    if (signUpBtn) {
        signUpBtn.addEventListener('click', function () {
            window.location.href = 'login.html';
        });
    }

    // Redirect Get Started to login.html
    const getStartedBtn = document.getElementById('getStartedBtn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function () {
            window.location.href = 'login.html';
        });
    }

    // Redirect Learn More to Discover section
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function () {
            const discoverSection = document.getElementById('discover');
            if (discoverSection) {
                discoverSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    // Initialize all accordions as closed
    header.setAttribute('aria-expanded', 'false');
    
    header.addEventListener('click', function () {
        // Toggle aria-expanded attribute
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        
        // Get the content element that follows this header
        const content = this.nextElementSibling;
        
        // Toggle the active class on the content (not the header)
        content.classList.toggle('active');
        
        // Optional: Close other accordions (accordion style)
        if (!isExpanded) {
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.setAttribute('aria-expanded', 'false');
                    otherHeader.nextElementSibling.classList.remove('active');
                }
            });
        }
    });
});

    // Newsletter form submission
    const newsletterForms = document.querySelectorAll('form');

    newsletterForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert(`Thank you for subscribing with: ${emailInput.value}`);
                emailInput.value = '';
            }
        });
    });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Animated entrance for elements when they come into view
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.features-card, .stats-container, .hero-content, .newsletter-container');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementPosition < windowHeight * 0.9) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run animation check on page load
});