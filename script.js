// Music Control
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        isMusicPlaying = false;
    } else {
        backgroundMusic.play().catch(e => {
            console.log('Audio autoplay was prevented:', e);
        });
        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
        isMusicPlaying = true;
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Enhanced Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation class based on section type
            if (entry.target.classList.contains('journey')) {
                entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
            } else if (entry.target.classList.contains('midwife-spotlight')) {
                entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
            } else if (entry.target.classList.contains('letter')) {
                entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
            } else if (entry.target.classList.contains('gallery')) {
                entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
            } else if (entry.target.classList.contains('celebration')) {
                entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
                // Trigger confetti for celebration section
                setTimeout(() => {
                    createConfetti();
                }, 1000);
            }
            
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Enhanced parallax effect to floating elements and backgrounds
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-heart, .floating-star, .floating-baby, .floating-heart2, .floating-star2, .floating-baby2');
    const parallaxBgs = document.querySelectorAll('.parallax-bg');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
    
    parallaxBgs.forEach((bg, index) => {
        const speed = 0.3 + (index * 0.1);
        bg.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add click effect to milestone badge
const milestoneBadge = document.querySelector('.milestone-badge');
if (milestoneBadge) {
    milestoneBadge.addEventListener('click', () => {
        milestoneBadge.style.animation = 'none';
        setTimeout(() => {
            milestoneBadge.style.animation = 'pulse 2s ease-in-out infinite';
        }, 10);
    });
}

// Enhanced gallery interactions
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
    
    // Add click effect for gallery items
    item.addEventListener('click', () => {
        // Create a ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(64, 224, 208, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '10';
        
        const rect = item.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (rect.width / 2 - size / 2) + 'px';
        ripple.style.top = (rect.height / 2 - size / 2) + 'px';
        
        item.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Small confetti burst
        setTimeout(() => {
            createSmallConfetti();
        }, 300);
    });
});

// Carousel functionality
let carouselData = {
    'amys-calling': {
        images: [
            'images/amys-calling/IMG-20250808-WA0030.jpg',
            'images/amys-calling/IMG-20250808-WA0026.jpg',
            'images/amys-calling/IMG-20250808-WA0014.jpg',
            'images/amys-calling/IMG-20250808-WA0012.jpg',
            'images/amys-calling/IMG-20250808-WA0008.jpg',
            'images/amys-calling/IMG-20250808-WA0006.jpg',
            'images/amys-calling/IMG-20250808-WA0005.jpg',
            'images/amys-calling/IMG-20250808-WA0004.jpg',
            'images/amys-calling/IMG-20250808-WA0003.jpg'
        ],
        currentIndex: 0
    },
    'amy-declan': {
        images: [
            'images/amy-declan/IMG-20250808-WA0025.jpg',
            'images/amy-declan/IMG-20250808-WA0021.jpg',
            'images/amy-declan/IMG-20250808-WA0016.jpg',
            'images/amy-declan/IMG-20250808-WA0013.jpg',
            'images/amy-declan/IMG-20250808-WA0010.jpg',
            'images/amy-declan/IMG-20250808-WA0007.jpg'
        ],
        currentIndex: 0
    },
    'riley': {
        images: [
            'images/riley/IMG-20250808-WA0031.jpg',
            'images/riley/IMG-20250808-WA0028.jpg',
            'images/riley/IMG-20250808-WA0023.jpg',
            'images/riley/IMG-20250808-WA0024.jpg'
        ],
        currentIndex: 0
    },
    'our-family': {
        images: [
            'images/our-family/IMG-20250808-WA0027.jpg',
            'images/our-family/IMG-20250808-WA0018.jpg',
            'images/our-family/IMG-20250808-WA0029.jpg',
            'images/our-family/IMG-20250808-WA0022.jpg',
            'images/our-family/IMG-20250808-WA0020.jpg',
            'images/our-family/IMG-20250808-WA0019.jpg',
            'images/our-family/IMG-20250808-WA0017.jpg',
            'images/our-family/IMG-20250808-WA0015.jpg',
            'images/our-family/IMG-20250808-WA0011.jpg',
            'images/our-family/IMG-20250808-WA0009.jpg'
        ],
        currentIndex: 0
    }
};

// Function to change carousel slides
function changeSlide(button, direction) {
    const carouselContainer = button.closest('.carousel-container');
    const folder = carouselContainer.dataset.folder;
    const data = carouselData[folder];
    
    if (!data) return;
    
    // Update current index
    data.currentIndex += direction;
    
    // Loop around
    if (data.currentIndex >= data.images.length) {
        data.currentIndex = 0;
    } else if (data.currentIndex < 0) {
        data.currentIndex = data.images.length - 1;
    }
    
    // Update the image
    const slide = carouselContainer.querySelector('.carousel-slide');
    const img = slide.querySelector('img');
    img.src = data.images[data.currentIndex];
    
    // Add a subtle animation
    slide.style.opacity = '0';
    setTimeout(() => {
        slide.style.opacity = '1';
    }, 50);
}

// Auto-advance carousels
function autoAdvanceCarousels() {
    document.querySelectorAll('.carousel-container').forEach(container => {
        const folder = container.dataset.folder;
        const data = carouselData[folder];
        
        if (data && data.images.length > 1) {
            data.currentIndex = (data.currentIndex + 1) % data.images.length;
            const slide = container.querySelector('.carousel-slide');
            const img = slide.querySelector('img');
            img.src = data.images[data.currentIndex];
        }
    });
}

// Auto-advance every 5 seconds
setInterval(autoAdvanceCarousels, 5000);

// Small confetti burst for gallery clicks
function createSmallConfetti() {
    const colors = ['#40e0d0', '#ffffff', '#ff69b4'];
    const emojis = ['💙', '⭐', '👶'];
    
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        const isEmoji = Math.random() > 0.5;
        
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * 100 + 'vh';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `smallFall ${Math.random() * 2 + 1}s linear forwards`;
        
        if (isEmoji) {
            confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            confetti.style.fontSize = '1rem';
        } else {
            confetti.style.width = '6px';
            confetti.style.height = '6px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
        }
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

// Add typing effect to the main title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const titleElement = document.querySelector('.main-title .title-line:nth-child(2)');
    if (titleElement) {
        const originalText = titleElement.textContent;
        setTimeout(() => {
            typeWriter(titleElement, originalText, 150);
        }, 1000);
    }
});

// Enhanced confetti effect for celebration
function createConfetti() {
    const colors = ['#40e0d0', '#ffffff', '#ff69b4', '#ffd700', '#ff6b6b', '#4ecdc4'];
    const confettiCount = 80;
    const emojis = ['💙', '⭐', '👶', '🎉', '💕', '✨'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const isEmoji = Math.random() > 0.7;
        
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `fall ${Math.random() * 4 + 3}s linear forwards`;
        
        if (isEmoji) {
            confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            confetti.style.fontSize = '1.5rem';
            confetti.style.animation = `fall ${Math.random() * 4 + 3}s linear forwards, spin ${Math.random() * 2 + 1}s linear infinite`;
        } else {
            confetti.style.width = Math.random() * 8 + 6 + 'px';
            confetti.style.height = Math.random() * 8 + 6 + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        }
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 7000);
    }
}

// Add fall, spin, and ripple animations for confetti
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
    @keyframes smallFall {
        to {
            transform: translateY(50vh) rotate(180deg);
            opacity: 0;
        }
    }
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Trigger confetti when clicking on celebration section
const celebrationSection = document.querySelector('.celebration');
if (celebrationSection) {
    celebrationSection.addEventListener('click', createConfetti);
}

// Add heart beat effect to floating hearts
function addHeartbeat() {
    const hearts = document.querySelectorAll('.floating-heart, .floating-heart2');
    hearts.forEach(heart => {
        heart.style.animation = 'float 6s ease-in-out infinite, heartbeat 2s ease-in-out infinite';
    });
}

// Add heartbeat animation
const heartbeatStyle = document.createElement('style');
heartbeatStyle.textContent = `
    @keyframes heartbeat {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }
`;
document.head.appendChild(heartbeatStyle);

// Initialize heartbeat effect
addHeartbeat();

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '3px';
    progressBar.style.backgroundColor = '#40e0d0';
    progressBar.style.zIndex = '10000';
    progressBar.style.transition = 'width 0.3s ease';
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'm' || e.key === 'M') {
        musicToggle.click();
    }
    if (e.key === ' ') {
        e.preventDefault();
        createConfetti();
    }
});

// Add touch support for mobile
document.addEventListener('touchstart', () => {
    // Enable audio on first touch (mobile browsers require user interaction)
    if (!isMusicPlaying) {
        backgroundMusic.play().then(() => {
            backgroundMusic.pause();
        }).catch(e => {
            console.log('Audio interaction failed:', e);
        });
    }
});
