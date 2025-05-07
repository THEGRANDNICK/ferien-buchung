
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  const sections = Array.from(document.querySelectorAll("section"));
  const toggleDark = document.getElementById("toggle-dark");

  // Scrollspy
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const top = section.offsetTop - 80;
      if (pageYOffset >= top) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // Dark Mode Toggle
  toggleDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
