// 1. Hamburger Menü
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// 2. Der "Scroll-Erzwinger" (Löst dein Problem!)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Verhindert das Standard-Verhalten (nur URL ändern)

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Scrollt das Element sanft in die Mitte des Bildschirms
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // 'start' springt an den Anfang der Section
            });
            
            // Schließt das Menü mobil automatisch nach dem Klick (Optional, aber praktisch)
            const menu = document.querySelector(".menu-links");
            const icon = document.querySelector(".hamburger-icon");
            if (menu.classList.contains("open")) {
                 menu.classList.remove("open");
                 icon.classList.remove("open");
            }
        }
    });
});

// 3. Scroll Animation (Passiv, stört nicht)
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);
reveal();

// --- SCROLL PROGRESS BAR ---
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    
    document.getElementById("scroll-progress").style.width = scrolled + "%";
});
// --- 3D TILT EFFECT FÜR KARTEN ---
// Wir wenden es auf deine Projekt-Container an
VanillaTilt.init(document.querySelectorAll(".details-container"), {
    max: 10,           // Max Neigung (weniger ist edler)
    speed: 400,        // Geschwindigkeit der Animation
    glare: true,       // Fügt einen Lichtreflex hinzu (wie echtes Glas!)
    "max-glare": 0.3,  // Wie stark das Licht spiegelt
    scale: 1.02        // Leichtes Zoomen
});
// --- EASTER EGG: SHADER COMPILER ---
window.addEventListener("load", () => {
    // Wir warten 1.5 Sekunden nach dem Laden, damit der Nutzer sich erst sicher fühlt
    setTimeout(() => {
        const toast = document.getElementById("shader-toast");
        if(toast) {
            toast.classList.add("show");
            
            // Nach 4 Sekunden ist er "fertig" und verschwindet wieder
            setTimeout(() => {
                toast.classList.remove("show");
            }, 4000);
        }
    }, 1500);
});