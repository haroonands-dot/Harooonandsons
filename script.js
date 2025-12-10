          // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelectorAll('input[type="text"]')[1].value;
            const message = this.querySelector('textarea').value;
            
            // In a real application, you would send this data to a server
            // For demo purposes, we'll just show an alert
            alert(`Thank you ${name}! Your message has been sent. We will contact you at ${email} soon.`);
            
            // Reset form
            this.reset();
        });
        
        // Animate elements on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.about-image, .vm-box, .product-card');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }
        
        // Set initial state for animated elements
        document.querySelectorAll('.about-image, .vm-box, .product-card').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });
        
        // Trigger animation on load and scroll
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);
        
        // Add gold shimmer effect to logo on hover
        const logos = document.querySelectorAll('.logo-main');
        logos.forEach(logo => {
            logo.addEventListener('mouseenter', function() {
                this.style.textShadow = '0 0 15px rgba(212, 175, 55, 0.8)';
            });
            
            logo.addEventListener('mouseleave', function() {
                this.style.textShadow = '0 0 10px rgba(212, 175, 55, 0.5)';
            });
        });



        document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.querySelector('input[placeholder="Your Name"]').value;
    let email = document.querySelector('input[placeholder="Your Email"]').value;
    let subject = document.querySelector('input[placeholder="Subject"]').value;
    let message = document.querySelector('textarea').value;

    let mailtoLink = `mailto:Razaqkhan100@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Hello Sir,\n\nI visited your website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
});
    