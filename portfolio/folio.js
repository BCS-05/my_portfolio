// Simple page navigation
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });

            // Show selected page
            const pageId = this.getAttribute('data-page');
            document.getElementById(pageId).classList.add('active');

            // Scroll to top
            window.scrollTo(0, 0);
        });
    });
});
