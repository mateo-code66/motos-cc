const titulo = document.querySelector("h1");
const colores = ["red", "yellow", "blue", "lime", "orange", "cyan"];

titulo.addEventListener("click", function() {
    const colorRandom = colores[Math.floor(Math.random() * colores.length)];
    titulo.style.color = colorRandom;
});