// script.js

let products = [
  { id: 1, name: "Produk 1", price: 100, image: "/img/foto.jpg" },
  { id: 2, name: "Produk 2", price: 150, image: "product2.jpg" },
  { id: 3, name: "Produk 3", price: 120, image: "product3.jpg" },
  // Tambahkan produk lainnya sesuai kebutuhan
];

// script.js

let mainContent = document.getElementById("main-content");

function renderProducts(products) {
  mainContent.innerHTML = "";
  products.forEach((product) => {
    let productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rp ${product.price}</p>
            <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
        `;

    mainContent.appendChild(productCard);
  });
}

function addToCart(productId) {
  // Logika untuk menambahkan produk ke keranjang belanja
  console.log(`Produk dengan id ${productId} telah ditambahkan ke keranjang.`);
}

// Memanggil fungsi untuk menampilkan produk pada saat halaman dimuat
renderProducts(products);
