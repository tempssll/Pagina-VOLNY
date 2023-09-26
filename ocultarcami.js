// Función para ocultar la sección de camisas
function ocultarCamisasSection() {
  const camisasSection = document.getElementById("camisaProducts");
  if (camisasSection) {
    camisasSection.style.display = "none";
  }
}

// Llamada a la función para ocultar las camisas al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  ocultarCamisasSection();
});
