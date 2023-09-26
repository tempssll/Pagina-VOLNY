// Función para eliminar la sección de indumentaria
function eliminarIndumentariaSection() {
  const indumentariaSection = document.getElementById("indumentariaProducts");
  if (indumentariaSection && indumentariaSection.parentNode) {
    indumentariaSection.parentNode.removeChild(indumentariaSection);
  }
}

// Llamada a la función para eliminar la sección de indumentaria al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  eliminarIndumentariaSection();
});
