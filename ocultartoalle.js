// Función para ocultar la sección de toallas
function ocultarToallasSection() {
  const toallasSection = document.getElementById("toallasProducts");
  if (toallasSection) {
    toallasSection.style.display = "none";
  }
}

// Llamada a la función para ocultar las toallas al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  ocultarToallasSection();
});
