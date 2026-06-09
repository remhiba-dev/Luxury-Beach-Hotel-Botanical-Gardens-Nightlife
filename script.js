/**
 * Aetheria Resort - Core Interaction Script
 * Engineering by WebGenius Standards
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Dynamic Sticky Navigation Engine
    const header = document.getElementById('main-header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // 2. Responsive Mobile Drawer Interface
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = mobileToggle.querySelector('i');

    const toggleMenu = () => {
        navMenu.classList.toggle('active');
        
        // Handle visual toggle state for structural icon
        if (navMenu.classList.contains('active')) {
            menuIcon.className = 'fas fa-times';
            ariaToggleStatus(true);
        } else {
            menuIcon.className = 'fas fa-bars';
            ariaToggleStatus(false);
        }
    };

    const ariaToggleStatus = (isOpen) => {
        mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };

    mobileToggle.addEventListener('click', toggleMenu);

    // 3. Graceful Drawer Dismissal on Navigation
    const targetLinks = document.querySelectorAll('.nav-link');

    targetLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuIcon.className = 'fas fa-bars';
                ariaToggleStatus(false);
            }
        });
    });
});