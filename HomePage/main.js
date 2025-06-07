
// HomePage/main.js
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".appointment-button"); //changes background when button is clicked
  button.addEventListener("click", () => {
    document.body.style.backgroundColor = "#f3e2f4";
  });
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    // Example: validate phone number format
    const phone = document.getElementById("phone").value;
    const phonePattern = /^\\(\\d{3}\\) \\d{3}-\\d{4}$/;
    if (phone && !phonePattern.test(phone)) {
      alert("Use phone format (555) 555-5555");
      event.preventDefault(); // stop submission
    }
    // Add other checks here (name length, required fields, etc.)
  });
});

