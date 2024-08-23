document.getElementById("menu-toggle").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
});

document
  .getElementById("message-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    // Ambil data dari formulir
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Tampilkan pesan konfirmasi (untuk tujuan demo)
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Kosongkan formulir setelah pengiriman
    this.reset();
  });
