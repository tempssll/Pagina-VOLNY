// Datos simulados de productos para sacos y camisas
const sacos = [
  { id: 101, name: "Saco Clásico", price: 8000, image: "" },
  { id: 102, name: "Saco de Lana", price: 8000, image: "sacodos.jpeg" },
  { id: 102, name: "Saco de Lana", price: 8000, image: "sacodos.jpeg" },
  { id: 102, name: "Saco de Lana", price: 8000, image: "sacodos.jpeg" },
  { id: 101, name: "Saco Clásico", price: 8000, image: "saco.jpeg" },
  { id: 102, name: "Saco de Lana", price: 8000, image: "" },
  { id: 102, name: "Saco de Lana", price: 8000, image: "" },
  { id: 102, name: "Saco de Lana", price: 8000, image: "" },
  { id: 102, name: "Saco de Lana", price: 8000, image: "" },
  { id: 102, name: "Saco de Lana", price: 8000, image: "" },

  // Agrega más sacos aquí
];

const camisas = [
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "camisa.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },

  // Agrega más camisas aquí
];

const mugs = [
  { id: 201, name: "Camisa Blanca", price: 8000, image: "camisa.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "camisados.jpeg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "camisa.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "camisados.jpeg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "camisa.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },

  // Agrega más camisas aquí
];

const toallas = [
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "camisados.jpeg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "camisa.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "camisados.jpeg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "camisa.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },

  // Agrega más camisas aquí
];

const indumentaria = [
  { id: 201, name: "Camisa Blanca", price: 8000, image: "camisa.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "camisados.jpeg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "camisa.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "camisados.jpeg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "camisa.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },

  // Agrega más camisas aquí
];

const chaleco = [
  { id: 201, name: "Camisa Blanca", price: 8000, image: "camisa.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "camisados.jpeg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "camisados.jpeg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "camisa.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },

  // Agrega más camisas aquí
];

const sacoProductsContainer = document.getElementById("sacoProducts");
const camisaProductsContainer = document.getElementById("camisaProducts");
const mugsProductsContainer = document.getElementById("mugsProducts");
const toallasProductsContainer = document.getElementById("toallasProducts");
const indumentariaProductsContainer = document.getElementById(
  "indumentariaProducts"
);
const chalecoProductsContainer = document.getElementById("chalecoProducts");

// Función para mostrar los productos de sacos
function showSacos() {
  sacoProductsContainer.innerHTML = "";
  sacos.forEach((product) => {
    const productCard = createProductCard(product);
    sacoProductsContainer.appendChild(productCard);
  });
}

/* NUEVA SECCION ARREGLANDO */
// app.js
// app.js

// app.js

// Aquí puedes agregar más lógica o funciones si es necesario
// ...

// Función para mostrar los productos de camisas
function showCamisas() {
  camisaProductsContainer.innerHTML = "";
  camisas.forEach((product) => {
    const productCard = createProductCard(product);
    camisaProductsContainer.appendChild(productCard);
  });
}

function showMugs() {
  mugsProductsContainer.innerHTML = "";
  mugs.forEach((product) => {
    const productCard = createProductCard(product);
    mugsProductsContainer.appendChild(productCard);
  });
}

function showToallas() {
  toallasProductsContainer.innerHTML = "";
  toallas.forEach((product) => {
    const productCard = createProductCard(product);
    toallasProductsContainer.appendChild(productCard);
  });
}
function showIndumentaria() {
  indumentariaProductsContainer.innerHTML = "";
  indumentaria.forEach((product) => {
    const productCard = createProductCard(product);
    indumentariaProductsContainer.appendChild(productCard);
  });
}

function showChaleco() {
  chalecoProductsContainer.innerHTML = "";
  chaleco.forEach((product) => {
    const productCard = createProductCard(product);
    chalecoProductsContainer.appendChild(productCard);
  });
}

// Función para crear una tarjeta de producto
function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.className = "productCard";
  productCard.innerHTML = `
      <img src="imagenes/${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Precio: $${product.price}</p>
     
      <div class="productDetails" id="details-${product.id}">
      </div>
    `;
  return productCard;
}

// app.js

// Función para mostrar u ocultar la barra lateral
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// Asignar la función al botón o enlace que activa la barra lateral
const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
sidebarToggleBtn.addEventListener("click", toggleSidebar);

// app.js
const sidebar = document.getElementById("sidebar");

function toggleCategory(categoryId) {
  const categorySection = document.getElementById(categoryId);
  categorySection.classList.toggle("hidden");
}

sidebarToggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

// app.js

function toggleCategory(categoryId) {
  const categorySection = document.getElementById(categoryId);
  categorySection.classList.toggle("hidden");
}

sidebarToggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

// Mostrar los productos al cargar la página
showSacos();
showCamisas();
showMugs();
showToallas();
showIndumentaria();
showChaleco();

/* Seccion de la barra lateral  */
