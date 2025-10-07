document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Scroll reveal animaciones
  const revealEls = document.querySelectorAll('.reveal, .section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible', 'opacity-100', 'translate-y-0');
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));

  // Sticky nav buttons
  document.querySelectorAll('.sticky-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector(`#${btn.dataset.target}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      document.querySelectorAll('.sticky-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Tilt efecto en imágenes
  document.querySelectorAll('.tilt-child').forEach(el => {
    VanillaTilt.init(el, { max: 10, speed: 400, glare: true, "max-glare": 0.15 });
  });

  // Partículas
  tsParticles.load("particle-container", {
    fpsLimit: 60,
    particles: {
      number: { value: 70 },
      color: { value: "#00c853" },
      shape: { type: "circle" },
      opacity: { value: 0.4, random: true },
      size: { value: 3, random: true },
      move: { enable: true, speed: 1.3, outModes: { default: "out" } }
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100 } }
    },
    detectRetina: true
  });
});
