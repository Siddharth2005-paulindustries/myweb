// Initialize Particle.js
particlesJS.load('particles-js', 'particle-config.json', function() {
    console.log('particles.js loaded');
  });
  
  // Smooth transitions
  document.querySelectorAll("nav a, .page-content a").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const target = event.target.getAttribute("href");
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  });
  