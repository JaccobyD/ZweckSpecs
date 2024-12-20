// JavaScript to handle the button click
document.getElementById("toggleButton").addEventListener("click", function() {
    const surpriseText = document.getElementById("surpriseText");
    surpriseText.classList.toggle("hidden"); // Toggle visibility of the surprise message
});
