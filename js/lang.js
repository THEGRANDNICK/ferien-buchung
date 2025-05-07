
function setLanguage(lang) {
  document.querySelectorAll('[data-de]').forEach(el => {
    el.innerHTML = el.getAttribute(`data-${lang}`);
  });
}
setLanguage('de');
