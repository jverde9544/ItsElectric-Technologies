
// Function to switch between light mode and dark mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    const themeButton = document.getElementById("theme-toggle");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Switch to Light Mode";
    } else {
        themeButton.textContent = "Switch to Dark Mode";
    }
}

// Event listener #1: Theme button click
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", toggleTheme);


// Event listener #2: Contact form submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const visitorName = document.getElementById("name").value;
    const statusMessage = document.getElementById("form-status");

    statusMessage.textContent =
        "Thank you, " + visitorName + "! Your message has been received.";

    contactForm.reset();
});
