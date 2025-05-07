
(function() {
  emailjs.init("YOUR_USER_ID"); // EmailJS init
})();

document.getElementById("buchung-form").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => alert("Buchung gesendet!"))
    .catch((error) => alert("Fehler: " + error));
});
