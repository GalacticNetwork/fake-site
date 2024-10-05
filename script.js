function showLesson(lesson) {
    alert(`Starting ${lesson} lesson!`);
    // Here, you could load different lessons dynamically or navigate to a new page with more details
}

// Simple form submission logic for now
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent! We'll get back to you soon.");
});
