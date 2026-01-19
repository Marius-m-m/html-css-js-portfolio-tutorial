
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
}
loadTheme();


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' 
            });
            const menu = document.querySelector(".menu-links");
            const icon = document.querySelector(".hamburger-icon");
            if (menu && menu.classList.contains("open")) {
                 menu.classList.remove("open");
                 icon.classList.remove("open");
            }
        }
    });
});


let isScrolling = false;
const reveals = document.querySelectorAll(".reveal");
const progressBar = document.getElementById("scroll-progress");

function onScrollOptimized() {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            const windowHeight = window.innerHeight;
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            
            reveals.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                    reveal.classList.add("active");
                }
            });

            if(progressBar) {
                const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (scrollTop / scrollHeight) * 100;
                progressBar.style.width = scrolled + "%";
            }

            isScrolling = false;
        });
        isScrolling = true;
    }
}

window.addEventListener("scroll", onScrollOptimized);
onScrollOptimized();

if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".details-container"), {
        max: 10,          
        speed: 400,        
        glare: true,     
        "max-glare": 0.3, 
        scale: 1.02        
    });
}

window.addEventListener("load", () => {
    setTimeout(() => {
        const toast = document.getElementById("shader-toast");
        if(toast) {
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 4000);
        }
    }, 1500);
});