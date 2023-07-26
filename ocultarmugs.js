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
// Función para ocultar la sección de buzos
function ocultarBuzosSection() {
  const buzosSection = document.getElementById("sacoProducts");
  if (buzosSection) {
    buzosSection.style.display = "none";
  }
}

// Llamada a la función para ocultar los buzos al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  ocultarBuzosSection();
});
// Función para ocultar la sección de camisas


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
