// Simple mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        // Toggle display of main nav on mobile
        if (mainNav.style.display === 'flex') {
            mainNav.style.display = 'none';
        } else {
            mainNav.style.display = 'flex';
            mainNav.style.flexDirection = 'column';
            mainNav.style.position = 'absolute';
            mainNav.style.top = '60px';
            mainNav.style.left = '0';
            mainNav.style.right = '0';
            mainNav.style.backgroundColor = '#1E293B';
            mainNav.style.padding = '20px';
            mainNav.style.borderBottom = '2px solid #334155';
            
            // Adjusting link margins for mobile view
            const links = mainNav.querySelectorAll('a');
            links.forEach(link => {
                link.style.margin = '10px 0';
                link.style.textAlign = 'center';
            });
        }
    });
});