// script.js
function toggleText() {
    var text = document.getElementById("hiddenText");
    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block"; // Muestra el texto
    } else {
        text.style.display = "none"; // Oculta el texto
    }
}