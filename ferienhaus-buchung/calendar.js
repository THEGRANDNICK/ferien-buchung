
flatpickr("#kalender", {
  disable: [
    "2025-05-12", "2025-05-23", "2025-05-31",
    "2025-06-03", "2025-06-04", "2025-06-19",
    "2025-06-27", "2025-06-28"
  ],
  dateFormat: "Y-m-d",
  onChange: function(selectedDates, dateStr) {
    document.getElementById("selected-date").value = dateStr;
  }
});
