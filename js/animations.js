
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll("section");
  const zoomElements = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  const zoomObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("zoom-in");
      }
    });
  }, { threshold: 0.3 });

  zoomElements.forEach(el => {
    el.classList.add("zoom-init");
    zoomObserver.observe(el);
  });
});
