const reveals = document.querySelectorAll(
  '.reveal-left, .reveal-right'
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-show');
      }
    });
  },
  { threshold: 0.3 }
);

reveals.forEach(el => observer.observe(el));
