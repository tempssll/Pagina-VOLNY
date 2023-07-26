// Función para ocultar la sección de mugs
function ocultarMugsSection() {
  const mugsSection = document.getElementById("mugsProducts");
  if (mugsSection) {
    mugsSection.style.display = "none";
  }
}

// Llamada a la función para ocultar los mugs al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  ocultarMugsSection();
});
