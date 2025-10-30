  <script>
    // animation on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    window.addEventListener('scroll', () => {
      fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('active');
        }
      });
    });
  </script>