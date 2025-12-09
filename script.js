function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Hier ist kein weiterer Code mehr nötig, da die Details-Buttons
// in der index.html jetzt direkt 'window.open' aufrufen.